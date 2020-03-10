function closeMenu(){
    document.getElementById('nav-center').style.display = "none";
    document.querySelector('.hamburger').style.display = 'inherit';
    document.querySelector('.close').style.display = 'none';
    document.querySelector('.section-first').style.backgroundImage = 'inherit';
    document.querySelector('.section-first-img').style.zIndex = "inherit";
    document.getElementById('section-first-div-img').style.backgroundImage = "url('./images/bg-intro-mobile.svg')";
  }