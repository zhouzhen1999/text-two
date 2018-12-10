require(["./js/main.js"], function() {
    require(["jquery"], function($) {
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
    })
})