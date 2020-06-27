$(
    function () {
        $.ajax({
            type: 'GET',
            url: "http://127.0.0.1:8848/getborrowinfo.php",
            data: {
                borrowid: sessionStorage.getItem('borrowid')
            },
            dataType: 'JSON',
            success: function (res) {
                /*     console.log(res); */
                // 对返回对象进行遍历
                for (var key in res) {
                    $('#' + key).text(res[key])
                }
            }
        })

        // 对投资做点击事件
        $('#confirmBorrow').click(
            function () {
                if (!(localStorage.getItem('username'))) {
                    alert('您的账户未登录，请先登录账户');
                    location.href = '/login.html'
                }
                var chargemoney = $("#chargemoney").val();
                if (!chargemoney) return false;

                $.ajax({
                    type: 'POST',
                    url: ' http://127.0.0.1:8848/invest.php',
                    data: {
                        id: localStorage.getItem("uid"),
                        borrowid: sessionStorage.getItem('borrowid'),
                        chargemoney: chargemoney
                    },
                    success: function (res) {
                        /*      console.log(res); */
                        if (res === '10001') {
                            alert('您的投资金额不足，请及时充值'),
                                location.href = '../recharge.html'
                        } else if (res == 'ok') {
                            alert('恭喜您，'+localStorage.getItem('username')+'，您的投资将很快得到审核');
                            location.href='/#'

                        } else if (res == '10002') {
                            alert('您的投资失败，请稍后重试')

                        }
                    }

                })
            }
        )
    }
)