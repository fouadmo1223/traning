$("#btn").click(function () {
  let res = $("#per").val();
  $(".parent div").animate(
    { width: res + "%" },
    {
      duration: 1000,
      complete: function () {
        // $(".res").text(res); runs after animation complets
      },
      step: function (res) {
        $(".res").text(Math.ceil(res));
      },
    }
  );
});

$(".parent").click(function () {
  $(this)
    .delay(5000)
    .slideUp(1000, function () {
      $(this).slideDown();
    });
});


$(".res").click(function () {
  $(this).animate({ fontSize: "+=10px" },2000);
});
