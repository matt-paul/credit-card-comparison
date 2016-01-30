  $(document).on("click", "div.card-header", function() {
    $('.card-body').hide();
    $(this).next("div").toggle();
  });


