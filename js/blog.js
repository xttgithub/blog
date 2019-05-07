$(document).ready(function(){
    $('body').delegate('.linkTab','click',function(){
        var tag = $(this).attr("id");
        if($(this).attr("href")){
            location.href = $(this).attr("href");
        }else{
            location.href = "index.html?tag=" + tag;
        }
    })
    // var locationStr = location.pathname;
    // var nowPage = locationStr.substring(locationStr.lastIndexOf('/') + 1,locationStr.lastIndexOf('.html'));
    // if(nowPage){
    //     $("#pageList").find("#" + nowPage).addClass("active");
    // }else{
    //     $("#pageList").find("#defaultPage").addClass("active");
    // }
    var getQueryUrlString = function(a) {
        var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)","i")
          , c = window.location.search.substr(1).match(b);
        return null  != c ? decodeURIComponent(c[2]) : null 
    };
    var nowPage = getQueryUrlString("tag") || "index";
    $("#pageList").find("#" + nowPage).addClass("active");
    
    //定义markdown文件夹数组
    var arr = ["./md/","./md/java/","./md/spring/","./md/other/"];
    for (var i = 0; i < arr.length; i++) {
        var filePath = arr[i] + nowPage + '.md';
        $.get(filePath, function(response, status, xhr){
            if(status == 200){
                $("#markdownContent").html(marked(response));
            }
        });
    }
    
})

