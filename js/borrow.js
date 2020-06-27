$(
    function () {
        // 获取自定义的data值，并且放进会话存储中，目的是其他页面调用
        $('.applicationBtn').click(
            function () {
                let num = $(this).data('num');
                sessionStorage.setItem('rechargeType', num);
                location.href = '#borrowDetail'
            }
        )
    }
)