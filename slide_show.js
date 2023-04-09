window.onload = function(){
    var videos = [
      document.getElementById("myVideo1"),
      document.getElementById("myVideo2"),
      document.getElementById("myVideo3")
    ];
    
    var index = 0;
    
    function switchVideo() {
      videos[index].style.display = "none";
      index++;
      if (index >= videos.length) {
          index = 0;
      }
      videos[index].style.display = "block";
      setTimeout(switchVideo, 5000);
    }
    
    for (var i = 1; i < videos.length; i++) {
      videos[i].style.display = "none";
    }
    
    setTimeout(switchVideo, 5000); 
  }
  


// đăng xuất

 window.onload = function(){
  var buttons = document.querySelector("#logout");
    buttons.addEventListener("click", function logout(){
      var ele = document.getElementsByClassName("hide");
      ele.style.display = "block"
      
    }) 
 
  };

