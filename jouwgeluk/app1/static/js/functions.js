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
