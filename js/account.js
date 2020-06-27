$(
    function () {
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:8848/getuserinfo.php',
            data: {
                "id": localStorage.getItem('uid')
            },
            dataType: "JSON",
            success: function (res) {
                // console.log(res);
                $('#nickname span').text(res.nickname)
                $('#username span').text(res.username)
                $('#lastTime span').text(res.lastlogintime)
                $('#totalmoney span').text(res.totalmoney)
                $('#usablemoney span').text(res.usablemoney)
                $('#blockedmoney span').text(res.blockedmoney)

                if (res === 'ok') {} else {}
            }

        })
        // 账户充值登录判断
     $('#rechargeBtn').click(
            function () {
                let username = localStorage.getItem('username');
                let uid = localStorage.getItem('uid');
                if (!(username && uid)) {
                    alert('您的账户未登录，请及时进行登录');
                    location.href = '/login.html'
                }else{
                    location.href='/recharge.html'
                }
            }) 

    })