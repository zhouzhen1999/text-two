require(["./js/main.js"], function() {
    require(["jquery", "bscroll"], function($, bscroll) {
        $.ajax({
            url: "/api/datas",
            type: "post",
            dataType: "json",
            success: function(res) {
                let str = "";
                if (res.code == 1) {
                    res.listdata.forEach((i) => {
                        str += `<dl>
                                <dt>
                                <img src="./images/${i.img}" alt="">
                                </dt>
                                <dd>
                                   ${i.content}
                                </dd>
                            </dl>`;
                    })
                    $(".conntainer").append(str)
                }
            }
        })

        $(".list span").on("click", function() {
            $(this).addClass("color").siblings().removeClass("color");
            let html = "";

        })
        var scroll = new bscroll(".wrapper", {
            probeType: 1
        })
        scroll.on("scroll", function(position) {
            if (position.y > 30) {
                $(".top").css({
                    "top": "1.2rem"
                })

                setTimeout(() => {
                    $(".top").hide();
                    $(".main").show()
                }, 1000)
                setTimeout(() => {
                    $(".main").hide()
                }, 2000)
            } else if (position.y < this.maxScrollY - 30) {
                $(".bottom").css({
                    "bottom": ".5rem"
                })
                setTimeout(() => {
                    $(".bottom").hide()
                }, 1000)
                setTimeout(() => {
                    $(".bottom").show()
                }, 2000)

                scroll.refresh();
                text()
            }
        })

        function text() {
            let html = "";
            html += `<dl>
                        <dt>
                        <img src="./images/pic${Math.floor(Math.random()*4+1)}.png" alt="">
                    </dt>
                        <dd>
                            非航空股份的合格的房价高如果对方
                        </dd>
                    </dl>`;
            $(".conntainer").append(html)
        }
    })
})