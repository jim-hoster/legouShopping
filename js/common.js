$(
    // 头部导航样式
    function () {
        $('.header .scan-ico').hover(
            function () {
                $(this).find('.scan').css('display', 'block')
            },
            function () {
                $(this).find('.scan').css('display', 'none')
            }
        )

    }
)