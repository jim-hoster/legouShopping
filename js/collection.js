$(
    function () {
        let page = 2;
        let row = 2;

        // 调用一次函数
        setHtml()

        function setHtml() {
            $.ajax({
                type: 'get',
                url: 'http://127.0.0.1:8848/getborrow.php',
                data: {
                    page: page,
                    row: row
                },
                dataType: "JSON",
                success: function (res) {

                    var total = res.total; //总条数

                    var totalPage = Math.ceil(total / row); //总页数
                    //分页插件
                    $('#page').pagenation({
                        nowPage: page, //当前页
                        pageNum: totalPage, //总页数
                        callback: function (p) {
                            // console.log(p)
                            // p当前页码
                            page = p;
                            setHtml()
                        }
                    });

                    let list = res.list;
                    let resHtml = '';
                    /*  for (let i = 0; i < list.length; i++) {
                         resHtml += '<li>'
                         resHtml += '<span>' + list[i].userid + '</span>'
                         resHtml += '<span>' + list[i].title + '</span>'
                         resHtml += '<span>' + (Number(list[i].interest).toFixed(2) + "%") + '</span>'
                         resHtml += '<span>' + (list[i].borrowmoney * 1).toFixed(2) + '</span>'
                         resHtml += '<span>' + (list[i].repaytype == 0 ? "按月分期" : "按月到期") + '</span>'
                         resHtml += '<span>' + ((list[i].ownmoney) / (list[i].borrowmoney) * 100).toFixed(2) + '</span>'
                         resHtml += '<span>' + '<a data-borrow=' + list[i].id + ' class="borrow_check" href="#collectionDetail">查看</a>' + '</span>'
                         resHtml += '</li>'

                     } */
                    list.forEach(
                        function (val) {
                            resHtml += `<li><span>${val.userid}</span><span>${val.title}</span><span>${(Number(val.interest).toFixed(2)) + "%"}</span><span>${(val.borrowmoney * 1).toFixed(2)}</span><span>${val.repaytype == 0 ? "按月分期" : "按月到期"}</span><span>${((val.ownmoney) / (val.borrowmoney) * 100).toFixed(2)}</span><span><a data-borrowid='${val.id}' class="borrow_check" href="#collectionDetail">查看</a></span></li>`
                        }
                    )
                    $('.detail').html(resHtml)
                },

            })
        }

        // 查看详情做点击事件
        $('.detail').on('click', '.borrow_check', function () {
            sessionStorage.setItem("borrowid", $(this).data('borrowid'));
        })
    }
)