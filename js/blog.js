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

    $.get(findFilePath(nowPage), function(response, status, xhr){
        $("#markdownContent").html(marked(response));
    });
})


function findFilePath(nowPage) {
    var localUrl = './md/' + nowPage + '.md';
    // if(!isExistFile(localUrl)){
    //     localUrl = './md/java/' + nowPage + '.md';
    // }
    // if(!isExistFile(localUrl)){
    //     localUrl = './md/spring/' + nowPage + '.md';
    // }
    // if(!isExistFile(localUrl)){
    //     localUrl = './md/other/' + nowPage + '.md';
    // }

    return localUrl;
}

function isExistFile(filePath) {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    if (fso.FileExists(filePath)) {
        return true;
    }else{
        return false;
    }
}
