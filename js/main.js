$('.chocolat-parent').Chocolat({
    enableZoom: false,
});

//event starts when user types in search input
$('.search-bar').on('keyup', function () {
    //variable'value' stores user input in real-time, while converting
    //to lowercase to avoid capitalization issues 
    let value = $(this).val().toLowerCase();
    //filter targets anchor elements and runs the function
    $('.chocolat-parent a').filter(function() {
        //attr targets title attribute in previuos selected element
        //toggle displays elements that match condition.
        $(this).toggle($(this).attr('title').toLowerCase().indexOf(value) > -1);
    });
});


