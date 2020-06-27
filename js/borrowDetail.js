$(
    function () {
        // 动态加载借款背景图片
        borrowDetailBg()

        function borrowDetailBg() {
            let rechargeType = sessionStorage.getItem('rechargeType')
            switch (rechargeType) {
                case '1':
                    $('#borrowDetail>img').attr('src', '../images/bussniss_bg.png');
                    break;
                case '2':
                    $('#borrowDetail>img').attr('src', '../images/E-Business_bg.jpg');
                    break;
                case '3':
                    $('#borrowDetail>img').attr('src', '../images/car_bg.jpg');
                    break;
                default:
                    $('#borrowDetail>img').attr('src', '../images/bussniss_bg.png');
                    break;
            }
        }
        // 提交借款申请
        $('#confirmBtn').click(
            function () {
                let username = localStorage.getItem('username');
                if (!username) {
                    alert('您的账户未登录，请及时登录');
                    location.href = '../login.html'

                }

                $.ajax({
                    type: 'post',
                    url: 'http://127.0.0.1:8848/borrow.php',
                    data: {
                        acc: localStorage.getItem('username'),
                        borrowmoney: $('#borrowmoney').val(),
                        interest: $('#interest').val(),
                        borrowtime: $('#borrowtime  option:selected').val(),
                        repaytype: $('#repaytype input:checked').val(),
                        minbid: $('#minbid').val(),
                        bouns: $('#bouns').val(),
                        days: $('#days option:selected').val(),
                        bouns: $('#bouns').val(),
                        title: $('#title').val(),
                        info: $('#info').val(),
                    },
                    success: function (res) {
                        if (res === 'ok') {
                            alert('恭喜你，"' + username + '"借款已提交，等待审核');
                            location.href='/#'
                        } else {
                            alert('抱歉，借款失败，请稍后重试')
                        }
                    },

                })
            }
        )

        // 获取账号，并渲染到页面
        acc()

        function acc() {
            let username = localStorage.getItem('username');
            $('#acc').text(username)
        }

    }
)