define([],function(){
	if(nowPage){
	    $("#pageList").find("#"+nowPage).addClass("active");
	}else{
		$("#pageList").find("#blogTemplate").addClass("active");
	}
    $('body').delegate('.linkTab','click',function(){
        var tag=$(this).attr("id");
        if($(this).attr("href")){
        	location.href=$(this).attr("href");
        }else{
	        location.href=tag+".html";
	    }
    })
    var pageName = locationStr.substring(locationStr.lastIndexOf('/') + 1,locationStr.lastIndexOf('.html'));
    $.get('./' + pageName +'.md', function(response, status, xhr){
        $("#markdownContent").html(marked(response));
    });
})
