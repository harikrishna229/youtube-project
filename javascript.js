// // Assuming you have a parent element to append the cloned structure
// var parentElement = document.getElementById("parentElementId");

// // Your HTML structure

// var ary=["https://i.ytimg.com/vi/DZo6mVmrGmM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCq2couAsbT9U7BF9ehvfaOrYo2Tw","https://i.ytimg.com/vi/nZmO8B9rRik/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCQ69im9vM8HRb7cJYCTE8Tbyqm-w","https://i.ytimg.com/vi/OuhWoRzIrto/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLD3Ady959kOCF2o5fvAO50fkExVmA","https://i.ytimg.com/vi/es4x5R-rV9s/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDE3HP-LWUfwXnV_EbJG3WbK6Tv8w","https://i.ytimg.com/vi/Xqlg0FLvWq8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFGEnUHUvuqt0vHjNEeRtnlLozyQ","https://i.ytimg.com/vi/8LBfs2yQ654/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCk90BFEc2LMBBZlJhKz_3n-RHssw","https://i.ytimg.com/vi/ifViKYZkPdg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPvnwIwiY1Wl-xYdCWqrhEBgeiMw","https://i.ytimg.com/vi/ifViKYZkPdg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPvnwIwiY1Wl-xYdCWqrhEBgeiMw","https://i.ytimg.com/vi/nls7AradbRw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAysE68nsfXun0FMlo8HDEjw0szcw"];

// var additionalCopies = 10;

// for (var i = 0; i < additionalCopies; i++) {
//     // Iterate over the existing array and create additional copies
//     ary = ary.concat(ary.slice());
// }




// // Number of iterations
// var iterations = 250;

// for (var i = 0; i < iterations; i++) {
//     // Create a new div element
//     var newElement = document.createElement("div");
//     var htmlStructure = `
// <div class="container1">
// <div>
//     <img class="thumbnail" src=${ary[i]}>
// </div>
// <div>
//     <div class="horzlay1">
//         <img class="channelogo" src="https://yt3.ggpht.com/omDV4RX5BjOw_R3J8L-qwETRq4qqy_uN5DTo58Trg1HW6TM2ejPGuVjtRjh2BrlGpeRLgaPAtA=s68-c-k-c0x00ffffff-no-rj">
//     </div>
//     <div class="horzlay2" >
//         <div><p class="title">Speak English Like a PRO in 45 Days🔥| Master Communication Skills | Ishan Sharma</p></div>
//         <div><p class="author">Ishan Sharma</p></div>
//         <div><p class="stats">364K views 3 months ago</p></div>
//     </div>

// </div>

// </div>
// `;

//     // Set the innerHTML of the new element to your HTML structure
//     newElement.innerHTML = htmlStructure;
//     newElement.style.display = 'inline-block';

//     // Append the new element to the parent element
//     parentElement.append(newElement);
// }
function toggleSections() {
    var middleSection = document.getElementsByClassName("middlesection")[0];
    var leftSection = document.querySelector('.leftsection');
    var rightSection = document.querySelector('.rightsection');
    var searchInput = document.querySelector('.searchinput');
    var searchBtn = document.querySelector('.searchbtn');
var searchicon =document.querySelector('.searchicon');
    

    if (window.innerWidth <= 510) {
        if (leftSection.style.display==="none") {
            middleSection.style.display = "flex"
            leftSection.style.display = "flex";
            searchInput.style.display = "none";
            rightSection.style.display = "flex";
            searchBtn.style.cssText = "background-color:white;height:28px;border: none; width:30px;";
            
        }
        else{
            middleSection.style.display = "flex";
            leftSection.style.display = "none";
            rightSection.style.display = "none";
            searchInput.style.display = "flex";
            searchBtn.style.cssText = "background-color:rgb(240, 240, 240);height:28px;border: 1px solid rgb(198, 192, 192); width:40px;";
            searchicon.style.cssText="margin-top: 3px";

        }
       
        

    }
}

