/*------------------------------------------------------------------
* Bootstrap Simple Admin Template
* Version: 3.0
* Author: Alexis Luna
* Website: https://github.com/alexis-luna/bootstrap-simple-admin-template
-------------------------------------------------------------------*/
(function() {
    'use strict';

    // Toggle sidebar on Menu button click
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $('#body').toggleClass('active');
    });

    // Auto-hide sidebar on window resize if window size is small
    // $(window).on('resize', function () {
    //     if ($(window).width() <= 768) {
    //         $('#sidebar, #body').addClass('active');
    //     }
    // });
})(); 


// (function() {
//     'use strict';

//     // Toggle sidebar on Menu button click
//     $('#sidebarCollapse').on('click', function() {
//         $('#sidebar').toggleClass('active');
//         $('#body').toggleClass('active');
//     });

//     // Initial state depending on device size
//     if ($(window).width() > 768) {
//         // Desktop mode → sidebar visible
//         $('#sidebar').removeClass('active');
//         $('#body').removeClass('active');
//     } else {
//         // Mobile mode → sidebar hidden
//         $('#sidebar').addClass('active');
//         $('#body').addClass('active');
//     }

// })();

