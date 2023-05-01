<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SEG10 User Dashboard</title>
  <!-- g user auth -->
  <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" />
  <link rel="stylesheet" href="css/home.css">
  <link rel="stylesheet" href="css/dashboard.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,600&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,200;1,200;1,300&family=Gentium+Plus:ital,wght@0,400;0,700;1,400&family=Kdam+Thmor+Pro&family=Nuosu+SIL&family=Oxygen:wght@300;400;700&family=Poppins:ital,wght@0,100;0,200;0,400;0,500;1,100;1,200;1,300;1,400&family=Roboto+Mono:ital,wght@0,400;0,600;1,300;1,400;1,500&family=Roboto:ital,wght@0,400;0,500;1,300;1,400&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  <link rel="icon" href="img/icon.png">

</head>

<body>
  <div class="topnav" id="myTopnav">
    <a href="index.html" class="activate" style="  font-style: 32px">SEG10 </a>
    <a class="mnp" href="editor">Editor</a>
    <div class="userlogin">
      <!--  -->

    </div>
    <a href="categories.html" class="mnp">Categories</a>

    <div class="dropdown">
      <button class="dropbtn mnp">
        More
      </button>
      <div class="dropdown-content">
       

        <a href="about-us.html">About us</a>
        <a href="docs.html">Docs</a>

        <!-- <a class="" href="support">Support us</a> -->
      </div>
    </div>
    <a href="javascript:void(0);" style="font-size:15px; background-color: #0C090A; color:#ffffff" class="icon" onclick="myFunction()">&#9776;</a>
  </div>
  <script>
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  </script>
  <div class="login">
    <div id="loginbtn">

    </div>
  </div>
  <!-- dashboard html -->
  <h1 class="headings">Your blogs</h1>

  <div class="blog-section">
    <!-- <div class="blog-card">
        <img src="img/header.png" class="blog-image" alt="">
        <h1 class="blog-title">Lorem ipsum dolor sit amet consectetur.</h1>
        <p class="blog-overview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt fugiat quos porro repellat harum. Adipisci tempora corporis rem cum.</p>
        <a href="/" class="btn dark">read</a>
        <a href="/" class="btn dark">edit</a>
        <a href="/" class="btn dark delete">delete</a>
    </div> -->
  </div>



  <div onclick="topFunction()" id="myBtn" title="Go to top"> <span class="material-symbols-outlined">
      arrow_upward
    </span></div>
  <script>
    var mybutton = document.getElementById("myBtn");


    window.onscroll = function() {
      scrollFunction()
    };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }


    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  </script>


  <script src="https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.9.1/firebase-firestore.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.9.1/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js"></script>
  <script src="js/firebase.js"></script>

  <script src="js/dashboard.js"></script>
  <script src="js/nav.js"></script>



</body>

</html>
