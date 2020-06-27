$(
    function () {
        // 用户名登录密码验证
        $('#loginBtn').click(
            function () {
                let username = $('.login input[type="text"]').val();
                let pwd = $('.login input[type="password"]').val();
                let drag_text = $('#drag .drag_text').text()
                if (!(username && pwd)) {
                    return false
                } else if (drag_text !== '验证通过') {
                    return false

                }
                // 发送ajax;
                $.ajax({
                    type: 'post',
                    url: "http://127.0.0.1:8848/login.php",
                    data: {
                        username: username,
                        pwd: pwd
                    },
                    success: function (res) {
                        if (res === 'fail') {
                            alert('用户名或密码错误，请重新输入')
                        } else {
                            localStorage.setItem('username', username);
                            localStorage.setItem('uid', res);
                            alert(
                                username + ',登陆成功！关注新新贷，走上人生巅峰！'
                            );
                            location.href = './index.html';
                        }

                    }
                })
            }
        )




        // 滑动验证
        $('#drag').drag();

    }
)