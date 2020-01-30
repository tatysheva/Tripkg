$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000
    });
  });

//   const { readFileSync } = require('fs')

// const posthtml = require('posthtml')
// const include = require('include')

// const html = readFileSync('index.html')

// posthtml([ include({ encoding: 'utf8' }) ])
//     .process(html)
//     .then((result) => console.log(result.html))

//     window.onscroll = function() {myFunction()};

// // Get the header
// var header = document.getElementById("myHeader");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }