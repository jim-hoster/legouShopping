$(
    function () {
        //   导航栏动态局部加载页面函数
        window.onhashchange = loadPages;
        loadPages();

        function loadPages() {
            let hash = location.hash;
            switch (hash) {
                case "":
                    $('#main').load('../pages/home.html');
                    break;
                case "#home":
                    $('#main').load('../pages/home.html');
                    break;
                case "#collection":
                    $('#main').load('../pages/collection.html');
                    break;
                case "#collectionDetail":
                    $('#main').load('../pages/collectionDetail.html');
                    break;
                case "#borrow":
                    $('#main').load('../pages/borrow.html');
                    break;
                case "#borrowDetail":
                    $('#main').load('../pages/borrowDetail.html');
                    break;
                case "#show":
                    $('#main').load('../pages/show.html');
                    break;
                case "#welfare":
                    $('#main').load('../pages/welfare.html');
                    break;
                    // 加载个人中心
                case "#personal":
                    loadSubNavPages("#personal/account");
                    break;
                    // 加载个人中心/个人信息
                case "#personal/account":
                    loadSubNavPages(hash);
                    break;
                case "#personal/update":
                    loadSubNavPages(hash);
                    break;
                default:
                    $('#main').load('../pages/404.html');
                    break;

            }
            changeActiveNav(hash)

        }

        // 用户提醒登录
        isLogin()

        function isLogin() {
            let username = localStorage.getItem('username');
            let uid = localStorage.getItem('uid');
            let num = 5;
            if (!(username && uid)) {
                // 5秒后自己提醒用户进行登录，并且跳转到登录页面
                setTimeout(function () {
                    alert('您的账户未登录,请及时进行登录');
                    setInterval(function () {
                        if (num === 0) {
                            location.href = '/login.html'
                        } else {
                            $('#warn').html(`您的账户将在${num}秒钟后自动登录<a>立即登录</a>`);
                            num--
                        }
                    }, 1000)

                }, 10000)
            }
        }
        // 显示二维码
        $('.header .scan-ico').hover(
            function () {
                $(this).find('.scan').css('display', 'block')
            },
            function () {
                $(this).find('.scan').css('display', 'none')
            }
        )


        // 客户端下载
        $('.footer .contact .scan-ico').hover(
            function () {
                $(this).prev('.scan').css('display', 'block')
            },
            function () {
                $(this).prev('.scan').css('display', 'none')

            }
        )


        // 动态添加个人中心二级导航页面，
        // 技术原理：父级页面没有加载时，先加载父级页面，再次加载所属下面的页面，
        // 父亲级别加载时，直接给所属下面加载页面，判定条件时通过节点的长度

        function loadSubNavPages(hash) {
            hash = hash.substr(1);
            if ($('#personalRight').length) {
                $('#personalRight').load('../pages/' + hash + '.html');
                loadPersonalActive(hash)
            } else {
                $('#main').load('../pages/personal.html', function () {
                    $('#personalRight').load('../pages/' + hash + '.html');
                    loadPersonalActive(hash)
                })

            }
        }


        // 动态更换登录和注册
        loginChange();

        function loginChange() {
            let username = localStorage.getItem('username');
            let uid = localStorage.getItem('uid');
            if (username && uid) {
                $('#login').html('<a href="#personal/account">' + username + '</a>');
                $('#sign').html('<a href="#" id="loginOut" class="sign">退出</a>');
            } else {
                $('#login').html('<a href="./login.html">登录</a>');
                $('#sign').html('<a href="./sign.html" class="sign">注册</a>');
            }
        }

        // 退出登录
        $('#sign').on('click', '#loginOut', function () {
            if (confirm('确定要退出您的账号吗？')) {
                // 清空保存的本地存储对象
                localStorage.removeItem('username');
                localStorage.removeItem('uid');
                // 将页面直接为默认状态
                $('#login').html('<a href="./login.html">登录</a>');
                $('#sign').html('<a href="./sign.html" class="sign">注册</a>');

            }


        })

        // 动态添加导航样式
        function changeActiveNav(hash) {
            if (hash === '') hash = '#home';
            if (hash.includes('#personal')) hash = "#personal";
            if (hash.includes('#collection')) hash = "#collection";
            if (hash.includes('#borrow')) hash = "#borrow";
            $('.nav ul li').removeClass('active');
            $(".nav a[href='" + hash + "']").parent('li').addClass('active');

        }
        // 添加个人中心导航激活样式
        function loadPersonalActive(hash) {
            // 此处必须打印查看hash值的变化
            console.log(hash);
            $('#personalLeft ul li').removeClass('active');
            $('#personalLeft ul li a[href="#' + hash + '"]').parent('li').addClass('active')
        }



    })