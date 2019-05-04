define(["zepto"],function($){
	if(nowPage){
	    $("#listPage").find("#"+nowPage).addClass("active");
	}else{
		$("#listPage").find("#prototype").addClass("active");
	}
    $('body').delegate('.linkTab','click',function(){
        var tag=$(this).attr("id");
        if($(this).attr("href")){
        	location.href=$(this).attr("href");
        }else{
	        location.href=tag+".html";
	    }
    })
})