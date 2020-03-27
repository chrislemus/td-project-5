$('.chocolat-parent').Chocolat();

$('.chocolat-parent a[title*="lake"] ').css('border', '5px solid red');

// $('.search-bar').on('keyup', function () {
//     console.log($('.chocolat-parent a').attr('title'))
// });

$('.search-bar').on('keyup', function () {
    let value = $(this).val().toLowerCase();
    let imgTitle = $('.chocolat-parent a').attr('title');
    $(imgTitle).filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});

