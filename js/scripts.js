$(document).ready(function(){

    $('.mobile_nav .open').on('click', function (){

        if($(this).text() == 'Open Menu'){
            $('ul.mobile').show();
            $(this).text('Close Menu');
        } else {
            $('ul.mobile').hide();
            $(this).text('Open Menu');
        }
        
    });
});