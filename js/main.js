/**
 * Date: 12/7/2019
 * Time: 05:07 PM
 */
"use strict";
(function(){

    /**
     * events
     */

    var headerContainer = $('.head-content-wrapper');
    var footerContainer = $('.footer-content-wrapper');

    // footerContainer.load('footer.html');

    var navigationLink = $('.navigation').find('a');
    // console.log(navigationLink);
    var active = 0;

    navigationLink.click(function(ev) {
        var target = $(this).attr('data-target');
        var index = $(this).parent().index();
        var offset = Math.abs(index - active);
        // console.log(offset);
        $('html, body').animate({
            'scroll-top': $(target).offset().top
        }, 500 * offset
        );
        active = index;
    });

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        var user = {
            name    : $('#name').val(),
            lastName: $('#lastname').val(),
            email   : $('#email').val(),
            message : $('#message').val()
        };
        console.log(user);
    });

}());
