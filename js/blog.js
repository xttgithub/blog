define([],function(){
    $('body').delegate('.linkTab','click',function(){
        var tag=$(this).attr("id");
        if($(this).attr("href")){
        	location.href=$(this).attr("href");
        }else{
	        location.href=tag+".html";
	    }
    })
    // var locationStr = location.pathname;
    // var nowPage = locationStr.substring(locationStr.lastIndexOf('/') + 1,locationStr.lastIndexOf('.html'));
    // if(nowPage){
    //     $("#pageList").find("#"+nowPage).addClass("active");
    // }else{
    //     $("#pageList").find("#blogTemplate").addClass("active");
    // }
    var getQueryUrlString=function(a) {
        var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)","i")
          , c = window.location.search.substr(1).match(b);
        return null  != c ? decodeURIComponent(c[2]) : null 
    };
    var nowPage=getQueryUrlString("tag");
    $("#pageList").find("#"+nowPage).addClass("active");
    $.get('./' + nowPage +'.md', function(response, status, xhr){
        $("#markdownContent").html(marked(response));
    });
})
