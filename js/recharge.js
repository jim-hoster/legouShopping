$(
    function () {
        // 银行卡选项卡
        $('#rechargeMethod>p>span').click(
            function () {
                let index = $(this).index();
                $('#rechargeMethod>p>span').removeClass('active');
                $(this).addClass('active');
                $('#rechargeMethod>ul').removeClass('show');
                $('#rechargeMethod>ul').eq(index).addClass('show');
            }
        )
        // 确认提交发送ajax
        $('#confirmBtn').click(
            function () {
                let chargemoney = parseInt($('#chargemoney input').val()).toFixed(2);
                if (!chargemoney) {
                    return false
                };

                $.ajax({
                    type: 'post',
                    url: 'http://127.0.0.1:8848/charge.php ',
                    data: {
                        id: localStorage.getItem('uid'),
                        bankcode: $('#bankList option:selected').val(),
                        chargemoney: chargemoney
                    },
                    success: function (res) {
                        if (res === 'ok') {
                            alert('恭喜你,' + localStorage.getItem('username') + '成功充值' + chargemoney + '元');
                            location.href = '/#personal/account'

                        } else {
                            alert('充值失败，请稍后再试！')

                        }

                    }
                })

            }
        )
    }
)