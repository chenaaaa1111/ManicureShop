 var docEl = document.documentElement;
 document.body.style.display = "none";
 var recalc = function () {
   var clientWidth = docEl.clientWidth;
   if (!clientWidth) {
     document.body.style.display = "";
     return;
   }
   docEl.style.fontSize = 60 * (clientWidth / 750) + 'px';
   document.body.style.display = "";
 };
 document.addEventListener('DOMContentLoaded', recalc, false);
 window.addEventListener('resize', recalc, false);