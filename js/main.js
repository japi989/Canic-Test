$('.tab').on('click', function () {
    $('.tab').removeClass('active-tab');
    $(this).addClass('active-tab');
});

$('.tab').on('click', function () {
    $('.tab').removeClass('active-tab');
    $(this).addClass('active-tab');
    var tab = $(this).attr('id');
    for (i = 1; i < 4; i++) {
        tab1 = $('#1' + i);
        if (i != tab) {
            $(tab1).css("display", "none");
        }
        else {
            $(tab1).css("display", "flex");
        }
    }
});
