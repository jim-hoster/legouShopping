$(
    function () {
        // 注册框显示
        $('.sign-box .detail>p').click(
            function () {
                $('.sign-box .detail>p').css('display', 'none');
                $('.detail .login-detail').css('display', 'block')
            }
        )

        // 表单验证
        let $username = $('.login-detail .username  input');
        let $nickname = $('.login-detail .nickname  input');
        let $pwd = $('.login-detail .pwd  input');
        let $email = $('.login-detail .email  input');
        let uFlag = false;
        let nFlag = false;
        let plag = false;
        let eFlag = false;
        /*  
         */
        // 每一个项做失焦格式验证
        // 再做ajax验证
        // 用户名验证
        $username.blur(
            function () {
                let uVal = $('.login-detail .username  input').val();
                if (/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(uVal)) {
                    $(this).parent().addClass('greenBorder');
                    $(this).next().text('');
                    uFlag = true;
                    $.ajax({
                        type: 'GET',
                        url: 'http://127.0.0.1:8848/accrepeat.php',
                        data: 'username=' + uVal,
                        success: function (res) {
                            console.log(res);
                            if (res === 'ok') {
                                $('.login-detail .username').removeClass('redBorder').addClass('greenBorder')
                            } else {
                                $('.login-detail .username').removeClass('greenBorder').addClass('redBorder');
                                let num = Math.floor(Math.random() * 8999) + 1000;
                                $('.login-detail .username span').html('<span>用户名太受欢迎，请试试' + uVal + num + '</span>')
                            }
                        }

                    })
                } else {
                    $(this).parent().addClass('redBorder');
                    $(this).next().text('用户名不合法，请重新输入');
                    uFlag = false;
                }
            }
        )

        // 昵称验证
        $nickname.blur(
            function () {
                let nVal = $('.login-detail .nickname  input').val();
                console.log(nVal);
                if (!nVal) {
                    $(this).parent().addClass('redBorder');
                    $(this).next().text('此处为必填字段');
                    nFlag = false;
                } else if (
                    nVal.match(/蔡老师|蔡老大/g)
                ) {
                    $(this).parent().addClass('redBorder');
                    $(this).next().text('您的昵称有涉黄嫌疑，请重新输入');
                    $('.login-detail .nickname  input').val(nVal.replace(/蔡老师|蔡老大/g, '***'));
                    nFlag = false;
                } else {
                    $(this).parent().addClass('greenBorder');
                    $(this).next().text('');
                    nFlag = true;

                }
            }
        )

        // 密码验证
        $pwd.blur(
            function () {
                let pVal = $('.login-detail .pwd  input').val();
                if (/^(\w){6,20}$/.test(pVal)) {
                    $(this).parent().addClass('greenBorder');
                    $(this).next().text('');
                    pFlag = true;

                } else {
                    $(this).parent().addClass('redBorder');
                    $(this).next().text('请输入6-20个字母、数字、下划线');
                    pFlag = false;
                }

            }
        )

        // 邮箱验证
        $email.blur(
            function () {
                let eVal = $('.login-detail .email  input').val();
                if (/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(eVal)) {
                    $(this).parent().addClass('greenBorder');
                    $(this).next().text('');
                    eFlag = true;

                } else {
                    $(this).parent().addClass('redBorder');
                    $(this).next().text('邮箱格式有误，请重新输入');
                    eFlag = false;
                }

            }
        )

        // 密码框小眼睛
        let peFlag = false
        $('#pwdEye').click(
            function () {
                if (!peFlag) {
                    $(this).parent().find('input').attr('type', 'text');
                    $(this).attr('src', '../images/眼睛_开.svg')
                    peFlag = true;
                } else {
                    $(this).parent().find('input').attr('type', 'password');
                    $(this).attr('src', '../images/眼睛_闭.svg')
                    peFlag = false
                }

            }
        )

        // 注册点击事件
        $('#submitBtn').click(
            function () {
                let uVal = $username.val();
                let pVal = $pwd.val();
                let eVal = $email.val();
                let nVal = $nickname.val();
                if (!(uVal && nVal && pVal && eVal)) {
                    $username.trigger("blur");
                    $pwd.trigger("blur");
                    $email.trigger("blur");
                    $nickname.trigger("blur");
                    return false;
                };
                $.ajax({
                    type: 'post',
                    url: 'http://127.0.0.1:8848/reg.php',
                    data: {
                        username: uVal,
                        pwd: pVal,
                        email: eVal,
                        nickname: nVal
                    },
                    success: function (res) {
                        if (res === 'ok') {
                            alert('恭喜你，' + uVal + '，新新贷已注册成功');
                            location.href = "./login.html";
                        } else {
                            alert('抱歉，' + uVal + "，请稍后重试")
                        }

                    }
                })
            }
        )












    }
)