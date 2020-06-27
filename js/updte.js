$(
    function () {
        $('#submitBtn').click(
            function () {
                let nVal = $('#nickname input').val();
                let eVal = $('#email input').val();
                let pVal = $('#phone input').val();
                let uid = localStorage.getItem('uid');
                let username = localStorage.getItem('username');
                $.ajax({
                    type: "post",
                    url: "http://127.0.0.1:8848/updateuser.php",
                    data: {
                        id: uid,
                        nickname: nVal,
                        email: eVal,
                        phone: pVal
                    },
                    success: function (res) {
                        if (res === 'ok') {
                            alert('恭喜你,' + username + ',新新贷账号已完成跟新');
                            location.href = '#personal/account'
                        } else {
                            alert('您的账号更新失败，请稍后重试')

                        }

                    },
                })


            }
        )
    }
)