// https://hari-youtubeproject.netlify.app/

$(document).ready(function() {
    $(".searchbtn").click(function(e) {
        if (window.innerWidth <= 510) {
            $(".leftsection").css("display", "none");
            $(".rightsection").css("display", "none");
            $(".searchinput").css("display", "flex");
            $(".searchbtn").addClass("searchbtnmobile");
            $(".back-button").css("display", "inline-block");
            alert("search button");
        }
        
    });
    $(".searchinput").click(function (e) { 
        if (window.innerWidth <= 510) {
        $(".searchinput").css("display", "flex");
        $(".searchinput").css("flex", "1");
        $(".leftsection").css("display", "none");
        $(".rightsection").css("display", "none");
        $(".rightsection").css("z-index", "500");
        $(".searchinput").css("width", "100px");
        alert("search input");
        }

        
    });
    $(".back-button").click(function (e) { 
                $(".leftsection").css("display", "flex");
                $(".rightsection").css("display", "flex");
                $(".searchinput").css("display", "none");
                $(".searchbtn").removeClass("searchbtnmobile");
                $(".back-button").css("display", "none");
                alert("back button");
        
    });
    function handleResize(){
        if (window.innerWidth >510) {
                    $(".leftsection").css("display", "flex");
                    $(".rightsection").css("display", "flex");
                    $(".searchinput").css("display", "flex");
                    $(".searchbtn").removeClass("searchbtnmobile");
                    $(".back-button").css("display", "none");
                    alert("resized");

        }
        if (window.innerWidth <=510 && $(".leftsection").css("display")==="flex" ) {
            
            $(".searchinput").css("display", "none");
            alert("resized");
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



