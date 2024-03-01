// https://hari-youtubeproject.netlify.app/

$(document).ready(function() {
    $(".searchbtn").click(function(e) {
        if (window.innerWidth <= 510) {
            $(".leftsection").css("display", "none");
            $(".rightsection").css("display", "none");
            $(".searchinput").css("display", "flex");
            $(".searchbtn").addClass("searchbtnmobile");
            $(".back-button").css("display", "inline-block");
        }
        
    });
    $(".searchinput").click(function (e) { 
        $(".searchinput").css("display", "flex");
        
    });
    $(".back-button").click(function (e) { 
                $(".leftsection").css("display", "flex");
                $(".rightsection").css("display", "flex");
                $(".searchinput").css("display", "none");
                $(".searchbtn").removeClass("searchbtnmobile");
                $(".back-button").css("display", "none");
        
    });
    function handleResize(){
        if (window.innerWidth >510) {
                    $(".leftsection").css("display", "flex");
                    $(".rightsection").css("display", "flex");
                    $(".searchinput").css("display", "flex");
                    $(".searchbtn").removeClass("searchbtnmobile");
                    $(".back-button").css("display", "none");

        }
        if (window.innerWidth <=510) {
            
            $(".searchinput").css("display", "none");
        
}
    }

    $(window).resize(handleResize);
   
    $(".hamburgermenu").click(function (e) { 
        $(".mobilemenu").css("width", "250");
       });

   $(".closebtn").click(function (e) { 
    $(".mobilemenu").css("width", "0");
   });


  });



