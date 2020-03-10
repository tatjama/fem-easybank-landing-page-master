function openMenu(){
    document.getElementById('nav-center').style.display = "inherit";
    document.querySelector('.hamburger').style.display = 'none';
    document.querySelector('.close').style.display = 'inherit';
    document.querySelector('.section-first').style.backgroundImage = 'linear-gradient( hsl(233, 26%, 24%), white)';
    document.querySelector('.section-first-img').style.zIndex = "-100";
    document.getElementById('section-first-div-img').style.backgroundImage = "url('./images/bg-intro-mobile-menu.svg')";
  }