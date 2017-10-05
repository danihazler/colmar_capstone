$("a.mobile").on("click", function(){
  $(this).next(".course").fadeToggle(500).toggleClass("visible");
});
