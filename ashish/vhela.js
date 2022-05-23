$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".nav").css("background-color" , "white");
          $(".nav").css("color","black");
        }
        
  
        else{
            $(".nav").css("background-color" , "transparent");  
            $(".nav").css("color" , "white");  	
        }
    })
  })

function myFunction(x){
    x.classList.toggle("change");
}
  