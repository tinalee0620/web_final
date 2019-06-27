$(document).ready(function(){
    TweenMax.to(".card2", 0, {
    
    x: 1000,
 
  ease: Linear.easeNone
 });
 
 TweenMax.to(".card3", 0, {
    
     x: 1000,
  
   ease: Linear.easeNone
  });
  TweenMax.to(".card4", 0, {
    
     x: 1000,
  
   ease: Linear.easeNone
  });
  TweenMax.to(".card5", 0, {
    
    x: 1000,
 
  ease: Linear.easeNone
 });
 TweenMax.to(".card6", 0, {
    
    x: 1000,
 
  ease: Linear.easeNone
 });
 TweenMax.to(".card7", 0, {
    
    x: 1000,
 
  ease: Linear.easeNone
 });
 TweenMax.to(".card8", 0, {
    
    x: 1000,
 
  ease: Linear.easeNone
 });
  TweenMax.to(".progress-bar", 0, {
    
     width:125,
  
   ease: Linear.easeNone
  });
 });
  $('.card1 .btn-next').click(function(event) {
     turnNext(1);
 });
 $('.card2 .btn-next').click(function(event) {
     turnNext(2);
 });
 $('.card3 .btn-next').click(function(event) {
     turnNext(3);
 });
 $('.card4 .btn-next').click(function(event) {
    turnNext(4);
});
$('.card5 .btn-next').click(function(event) {
    turnNext(5);
});
$('.card6 .btn-next').click(function(event) {
    turnNext(6);
});
$('.card7 .btn-next').click(function(event) {
    turnNext(7);
});
$('.card8 .btn-prev').click(function(event) {
    turnPrev(8);
});
$('.card7 .btn-prev').click(function(event) {
    turnPrev(7);
});
$('.card6 .btn-prev').click(function(event) {
    turnPrev(6);
});
$('.card5 .btn-prev').click(function(event) {
    turnPrev(5);
});
 
 $('.card4 .btn-prev').click(function(event) {
     turnPrev(4);
 });
 $('.card3 .btn-prev').click(function(event) {
     turnPrev(3);
 });
 $('.card2 .btn-prev').click(function(event) {
     turnPrev(2);
 });
 
 function turnNext(n){
     TweenMax.to(".progress-bar",0, {
         width: (1000/8)*(n+1)
     });
     TweenMax.to(".card"+n,0.5, {
         x: -1000
     });
     TweenMax.to(".card"+(n+1),0.5, {
         x: 0
     });
 }
 function turnPrev(n){
     TweenMax.to(".progress-bar",0, {
         width: (1000/8)*(n-1)
     });
     TweenMax.to(".card"+n,0.5,{
        x: 1000
     });
     TweenMax.to(".card"+(n-1),0.5,{
         x: 0
     });
 
 }