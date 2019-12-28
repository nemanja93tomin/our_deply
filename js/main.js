/**
 * Date: 12/7/2019
 * Time: 05:07 PM
 */
"use strict";
(function(){

    /**
     * events
     */

    let navigationLink = $('.navigation').find('a');
    let footerLink  = $('.footer-menu').find('a');

    // Main manu with scroll effect
    navigationLink.click(function() {
        // Take data-target atribut from the clicked link
        let target = $(this).attr('data-target');
        // Variable index contain index of parent of the clicked link
        let index = $(this).parent().index();
        // Animate scroll effect for a period of 500ms multiplied with current index plus 1
        $('html, body').animate({
            scrollTop: $(target).offset().top
        },500 * (index+1));
    });

    //Same scroll effect on footer menu
    footerLink.click(function() {
        let target = $(this).attr('data-target');
        let index = $(this).parent().index();
        $('html, body').animate({
            scrollTop: $(target).offset().top
        },500 * (index+1));
    });

    //Create on method for submit button in contact form
    $('#contact-form').on('submit', function(event) {
        //the default action of the event will not be triggered. In this case will not refresh page, before the function is executed
        event.preventDefault();
        //Create object with the same fields as in form, take thair value and places in appropriate properties
        let user = {
            name    : $('#name').val(),
            lastName: $('#lastname').val(),
            email   : $('#email').val(),
            message : $('#message').val()
        };
        console.log(user);
    });

}());
