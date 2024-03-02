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
    // $(".searchinput").click(function (e) { 
    //     if (window.innerWidth <= 510) {
    //     $(".searchinput").css("display", "flex");
    //     $(".searchinput").css("flex", "1");
    //     $(".leftsection").css("display", "none");
    //     $(".rightsection").css("display", "none");
    //     $(".rightsection").css("z-index", "500");
    //     $(".searchinput").css("width", "100px");
       
    //     }

        
    // });
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
        if (window.innerWidth <=510 && $(".leftsection").css("display")==="flex" ) {
            
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
   var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme","COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme","hari","amulya",
  ];
   $( ".searchinput" ).autocomplete({
    source: availableTags
  });

  
   








  });
//   var videos=document.querySelector("section");
//   fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=UUE750MuIvjaYeD5aGUjJcCQ&key=AIzaSyCFwuqhXldhb4KN8iSdZLMUyZgP_KZi8hM")
//   .then(res=> res.json())
//   .then(data=>{
//      //videos.innerHTML=data.items[0].snippet.title
//      data.items.forEach(element => {
//         videos.innerHTML +=`
//         <a href="https://www.youtube.com/watch?v=${element.snippet.resourceId.videoId}" class="yt-videos" >
//             <img src="${element.snippet.thumbnails.maxres.url}" />
//             <h2>${element.snippet.title}</h2>
//         </a>`
//      });
//        console.log(data);

//   })

var videos=document.querySelector(".videogrid");
fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=UUE750MuIvjaYeD5aGUjJcCQ&key=AIzaSyCFwuqhXldhb4KN8iSdZLMUyZgP_KZi8hM")
.then(res=> res.json())
.then(data=>{

    
   //videos.innerHTML=data.items[0].snippet.title
//    data.items.forEach(element => {
//       videos.innerHTML +=`
//       <a href="https://www.youtube.com/watch?v=${element.snippet.resourceId.videoId}" class="yt-videos" >
//           <img src="${element.snippet.thumbnails.maxres.url}" />
//           <h2>${element.snippet.title}</h2>
//       </a>`
//    });
    data.items.forEach(element => {
     videos.innerHTML+=`<div class="container1">
                                <div>
                                
                                </div>
                                <div>
                                <a href="https://www.youtube.com/watch?v=${element.snippet.resourceId.videoId}" class="yt-videos" ><img class="thumbnail" src="${element.snippet.thumbnails.maxres.url}"></a>
                                </div>
                                <div class="videoinfo">
                                    <div class="horzlay1">
                                        <img class="channelogo" src="images/video images/channel-1.jpg">
                                    </div>
                                    <div class="horzlay2" >
                                        <div><p class="title">${element.snippet.title}</p></div>
                                        <div><p class="author">Ishan Sharma</p></div>
                                        <div><p class="stats">364K views 3 months ago</p></div>
                                    </div>
                                
                                </div>
                                
                            </div>`

     });

})



