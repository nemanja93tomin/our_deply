/**
 * Date: 12/7/2019
 * Time: 05:07 PM
 */
"use strict";
(function(){

    /**
     * events
     */

    let headerContainer = $('.head-content-wrapper');
    let footerContainer = $('.footer-content-wrapper');

    // footerContainer.load('footer.html');

    let navigationLink = $('.navigation').find('a');
    let footerLink  = $('.footer-menu').find('a');
    // console.log(navigationLink);
    // console.log(footerLink);
    let active = 0;

    navigationLink.click(function(ev) {
        let target = $(this).attr('data-target');
        let index = $(this).parent().index();
        let offset = Math.abs(index - active);
        // console.log(offset);
        $('html, body').animate({
            'scroll-top': $(target).offset().top
        }, 500 * offset
        );
        active = index;
    });

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        let user = {
            name    : $('#name').val(),
            lastName: $('#lastname').val(),
            email   : $('#email').val(),
            message : $('#message').val()
        };
        console.log(user);
    });

}());
