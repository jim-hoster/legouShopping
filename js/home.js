$(
    function () {
        //主轮播图
        $("#warnSlide").slidebox({
            boxh: 400, //盒子的高度
            w: 1200, //图片的宽度
            h: 400, //图片的高度
            isShow: true, //是否显示控制器
            isShowBtn: true, //是否显示左右按钮
            controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW: 20, //控制按钮宽度
            controlsH: 4, //控制按钮高度
            radius: 10 //控制按钮圆角度数
        });


        // 散户投标选项卡
        $('.main .list h2').click(
            function () {
                // 获取索引值
                let index = $(this).index()
                $(this).addClass('active').siblings('h2').removeClass('active')
                $('.main .list>ul').eq(index).addClass('show').siblings('ul').removeClass('show')
            }
        )

        // 新闻报道选项卡
        $('.main .news h2').click(
            function () {
                // 获取索引值
                let index = $(this).index()
                $(this).addClass('active').siblings('h2').removeClass('active')
                $('.main .news>ul').eq(index).addClass('show').siblings('ul').removeClass('show')
            }
        )
        // 
        // 月份选择调用
        $('.main .show select').click(
            function () {
                let money = parseInt($(this).closest('li').find('input[type="text"]').val());
                if (money > 100000) {
                    alert("您的最大投标额度为10万元");
                    $(this).closest('li').find('input[type="text"]').val('');
                    return false
                }
                let month = parseInt($(this).find('option:selected').val());
                let rates = parseFloat($(this).closest('li').find('.num').text())
                if (!money) return false
                let interest = (money * rates / 100 / 12 * month).toFixed(2);
                $(this).closest('li').find('.rest>span').html(interest)

            }
        )

    }
)