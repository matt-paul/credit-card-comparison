  $(document).on("click", "div.card-header", function() {
    $('div.card-body').hide();
    $(this).next("div").toggle();
  });


