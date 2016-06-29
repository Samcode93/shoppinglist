$("form").on("submit",function(event){
        event.preventDefault(); 
        var userData = $(".user-data").val();
        $("ul").append("<li>" + userData + "</li>");
})



$("ul").on("click", "li", function(){
    
    $(this).remove();
})
