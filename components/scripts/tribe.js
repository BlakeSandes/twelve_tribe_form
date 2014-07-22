
$(".tribeList").hide();

$(".tribediv").on("click", ".tribeorb", function() {
  $(this).closest("div").next("ol").slideToggle();
});