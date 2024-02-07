function change_route(route, script, scripttag) {
  window.scrollTo({top: 0, behavior: 'smooth'});
  $("#content").animate({'opacity': '0'}, 200);
  setTimeout(function(){
    fetch(route)
    .then(data => {
      return data.text();
    })
    .then(data => {
      document.getElementById("content").innerHTML = "";
      document.getElementById("hidden-content").innerHTML = data;
      document.getElementById("content").innerHTML = $(".page-content").html();
      document.getElementById("hidden-content").innerHTML = "";
      return data;
    })
    .then(a => {
      $("#content").animate({'opacity': '1'}, 200);
      if(got_script.includes(scripttag)) {} else { $.getScript(script); }
    })
  },200);
}

 // WHATSAPP ICOON

 $(document).ready(function() {
   $('.whatsapp-button').hover(
     function() { // Mouse enter of touch
       $(this).stop().animate({ width: 'auto' }, 300); // Breidt uit om de tekst te tonen
       $('span', this).css({ opacity: '1', transform: 'translateX(0px)' });
     },
     function() { // Mouse leave
       if (!$(this).is(':active')) {
         $(this).stop().animate({ width: '35px' }, 300); // Krimp naar de breedte van alleen het icoon
         $('span', this).css({ opacity: '0', transform: 'translateX(20px)' });
       }
     }
   );
 });
