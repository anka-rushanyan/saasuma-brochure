jQuery(document).ready(function ($) {


    /** =============================================================== **/
    /** Tooltip **/
    /** =============================================================== **/    

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })


    /** =============================================================== **/
    /** Dont close dropdown on click when opened **/
    /** =============================================================== **/    

    $(document).on('click', '.dropdown-menu.dontcloseonclick', function (e) {
        e.stopPropagation();
    });


    $('a[href^="#"]').click(function(){
        var the_id = $(this).attr("href");
        $('html, body').animate({
            scrollTop:$(the_id).offset().top
        }, 'slow');
        return false;
    });


    $("#crossCloudSearchBtn").click(function() {
        $('html,body').animate({
                scrollTop: $("#mySearch").offset().top},
            'slow');
    });

    $("#softStackManagment").click(function() {
        $('html,body').animate({
                scrollTop: $("#mySoft").offset().top},
            'slow');
    });


});
