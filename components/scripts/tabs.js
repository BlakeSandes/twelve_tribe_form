

////////////When tab clicked////////////

$('nav').on("click", ".tabs", function() {
  var self = $(this);
  if(self.hasClass("logintab")) {
    self.closest("nav").next().find(".gender").addClass("hiddenField");
    self.closest("nav").next().find(".tribes").addClass("hiddenField");
    self.closest("nav").next().find(".login").removeClass("hiddenField");
  } else if (self.hasClass("gendertab")) {
    self.closest("nav").next().find(".login").addClass("hiddenField");
    self.closest("nav").next().find(".tribes").addClass("hiddenField");
    self.closest("nav").next().find(".gender").removeClass("hiddenField"); 
  } else if (self.hasClass("tribetab")) {
    self.closest("nav").next().find(".login").addClass("hiddenField");
    self.closest("nav").next().find(".gender").addClass("hiddenField");
    self.closest("nav").next().find(".tribes").removeClass("hiddenField");  
  }
});