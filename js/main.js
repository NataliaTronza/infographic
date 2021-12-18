window.onload = function(){
  
  document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.nav__list-holder').classList.toggle('nav__list-holder--visible');
    // document.querySelector('.bg-mob').classList.toggle('bg-mob--active');
  };
  
  // document.querySelector('.menu-item-has-children').onclick = function(){
  //   document.querySelector('.sub-menu').classList.toggle('sub-menu--active');
  //   document.querySelector('.menu-item-has-children').classList.toggle('menu-item-has-children--active');
  
  // };
  
  }
  
  