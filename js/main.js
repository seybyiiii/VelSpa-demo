(function ($) {
    "use strict";

    window.addEventListener('load', function () {
            document.body.classList.add('fade-in');
        });

    // Spinner
    window.addEventListener('load', function () {
        setTimeout(function () {
            const spinner = document.getElementById('spinner');
            if (spinner) {
                spinner.classList.add('hide');
            }
        }, 1); // Adjust the timeout as needed
    });
    
    //Header and Footer Divider 
    class MyHeader extends HTMLElement {
        connectedCallback() {
            this.innerHTML =
                `
                    <!-- Spinner Start -->
                    <div id="spinner" class="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
                        <div class="spinner-grow celadon" role="status"></div>
                    </div>
                    <!-- Spinner End -->


                    <!-- Navbar start -->
                    <div class="container-fluid sticky-top px-0">
                        <div class="container-fluid topbar d-none d-lg-block">
                            <div class="container px-0">
                                <div class="row align-items-center">
                                    <div class="col-lg-10">
                                        <div class="details d-flex flex-wrap">
                                            <div class="">
                                                <a href="/VelSpa-demo/contact-html" class="me-4 text-light">
                                                    <i class="fas fa-map-marker-alt cream me-2"></i>Parang, Marikina City
                                                </a>
                                            </div>
                                            <a href="/VelSpa-demo/contact.html" class="me-4 text-light"><i class="fas fa-phone-alt cream  me-2"></i>(02) 8637-5847</a>
                                            <a href="/VelSpa-demo/contact.html" class="text-light"><i class="fas fa-envelope cream  me-2"></i>Velspatraditionalpinoyhilot@gmail.com</a>
                                        </div>

                                    </div>
                                    <div class="socmed col-lg-2">
                                        <div class="d-flex align-items-center justify-content-end">
                                            <a href="https://www.facebook.com/velspa01/" target="_blank" class="me-3 btn-square border rounded-circle cream "><i class="fab fa-facebook-f"></i></a>
                                            <a href="https://www.instagram.com/velspatraditionalpinoyhilot" target="_blank" class="me-3 btn-square border rounded-circle cream "><i class="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid bg-light align-items-center">
                            <div class="container px-0">
                                <nav class="navbar navbar-expand-xl navbar-light py-3">
                                    <div class="container-fluid p-0 align-items-center">
                                        <div class="col-5 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                                            <a href="/VelSpa-demo/index.html" >
                                                <img src="/VelSpa-demo/img/velspa-brown.png" class="img-fluid d-inline-block align-top" alt="vel spa logo">
                                            </a>
                                        </div>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon cafe-noir "></span>
                                        </button>
                                    
                                        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                                            <ul class="navbar-nav ms-auto fw-bold border-topmob">
                                                <li class="nav-item">
                                                <a class="nav-link" aria-current="page" href="/VelSpa-demo/index.html">Home</a>
                                                </li>
                                                <li class="nav-item">
                                                <a class="nav-link" href="/VelSpa-demo/about.html">About</a>
                                                </li>
                                                <li class="nav-item">
                                                <a class="nav-link" href="/VelSpa-demo/service.html">Services</a>
                                                </li>
                                                <li class="nav-item">
                                                <a class="nav-link" href="/VelSpa-demo/franchise.html">Franchise</a>
                                                </li>
                                                <li class="nav-item">
                                                <a class="nav-link" href="/VelSpa-demo/contact.html">Contact Us</a>
                                                </li>
                                                <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Locations
                                                </a>
                                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                        <li><a class="dropdown-item" href="/VelSpa-demo/location/parang-marikina.html">Parang Marikina</a></li>
                                                        <li><a class="dropdown-item" href="#">Branch</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <ul class="navbar-nav ms-auto d-lg-inline-flex">
                                                <a href="/VelSpa-demo/appointment.html" class="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-4 mx-4">Book Appointment</a>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                `
            ;
        }
    }
          
    customElements.define('my-header', MyHeader);

    class MyFooter extends HTMLElement {
        connectedCallback() {
            this.innerHTML =
                `
                    <div class="container-fluid footer py-5">
                        <div class="container py-5">
                            <div class="row g-5 align-content-stretch align-items-baseline">
                                <div class="col-md-12 col-lg-12 col-xl-4">
                                    <div class="footer-item">
                                        <div class="col-md-10 col-lg-10 col-xl-7 mb-4">
                                            <img class="img-fluid" src="/VelSpa-demo/img/logo/all-white-vel-spa-logo - Cropped.png">
                                        </div>
                                        <p class="text-white logo-seo">
                                            Vel Spa - Traditional Pinoy Hilot is your sanctuary for authentic Filipino 
                                            healing and relaxation. Our spa specializes in a traditional form 
                                            of healing massage that harmonizes the body, mind, and spirit.
                                        </p>
                                        <h4 class="text-white mt-4 monteserrat">We Accept</h4>
                                        <div class="card-area text-white footer-icon">
                                            <i class="fa-brands fa-cc-visa"></i>
                                            <i class="fa-solid fa-credit-card"></i>
                                            <i class="fa-brands fa-cc-mastercard"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6 col-xl-3">
                                    <div class="footer-item d-flex flex-column ps-4">
                                        <h4 class="mb-4 text-white monteserrat">Our Locations</h4>
                                        <a href=""><i class="fas fa-angle-right me-2"></i> Parang Marikina</a>
                                        <a href=""><i class="fas fa-angle-right me-2"></i> Marcos Highway</a>
                                        <a href=""><i class="fas fa-angle-right me-2"></i> Sta Lucia il-Centro</a>
                                        <a href=""><i class="fas fa-angle-right me-2"></i> Maybunga Pasig</a>
                                        <a href=""><i class="fas fa-angle-right me-2"></i> Cainta Junction</a>
                                        <a href=""><i class="fas fa-angle-right me-2"></i> Maia Alta Antipolo</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6 col-xl-3">
                                    <div class="footer-item d-flex flex-column ps-4">
                                        <h4 class="mb-4 text-white monteserrat">Main Address</h4>
                                        <div class="row">
                                            <div class="col-1">
                                                <i class="pin-icon fas fa-map-marker-alt footer-map-pin me-2"></i> 
                                            </div>
                                            <div class="col-10 col-md-10 col-lg-10">
                                                <p class="mb-0 lh-base">Blk 2 Lot 3, Chateau De Regina, Gen. B.G Molina Street, Parang, Marikina City</p>
                                            </div>
                                        </div> 
                                        <h4 class="my-4 text-white monteserrat">Contact Us</h4>
                                        <div class="row mb-2">
                                            <div class="col-1">
                                                <i class="email-icon fas fa-envelope footer-env me-2"></i>
                                            </div>
                                            <div class="col-10 col-md-10 col-lg-10">
                                                <p class="mb-0 text-break lh-base">Velspatraditionalpinoyhilot@gmail.com</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-1">
                                                <i class="footer-icon fas fa-phone me-2"></i>
                                            </div>
                                            <div class="col-10 col-md-10 col-lg-10">
                                                <p class="mb-0">(02) 8637-5847</p>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div class="col-md-5 col-lg-5 col-xl-2">
                                    <div class="footer-item d-flex flex-column ps-4">
                                        <h4 class="mb-4 text-white monteserrat">Follow Us</h4>
                                        <a href="https://www.facebook.com/velspa01" target="_blank"><i class="fas fa-angle-right me-2"></i> Facebook</a>
                                        <a href="https://www.instagram.com/velspatraditionalpinoyhilot" target="_blank"><i class="fas fa-angle-right me-2"></i> Instagram</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid copyright py-4">
                        <div class="container">
                            <div class="row g-4 align-items-center justify-content-between">
                                <div class="col-md-6 text-center text-md-start mb-md-0">
                                    <span class="text-light"><i class="fas fa-copyright text-light me-2"></i>2025 <a href="#" class="cc-highlight">Vel Spa</a>. All right reserved.</span>
                                </div>
                                <div class="col-md-4 text-center text-md-end text-white">
                                    Designed By <a class="border-bottom cc-highlight" href="#">RXC Design</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            ;
        }
    }
          
    customElements.define('my-footer', MyFooter);
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-200px');
        }
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.back-to-top').addClass('show');
    } else {
        $('.back-to-top').removeClass('show');
    }
});

$('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500, 'easeInOutExpo');
    return false;
});


    // Location-carousel
    $(".location-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            dotsEach: 1
        },
        576: {
            items: 2,
            dotsEach: 1
        },
        768: {
            items: 2,
            dotsEach: 1
        },
        992: {
            items: 3,
            dotsEach: 1
        },
        1200: {
            items: 4,
            dotsEach: 1
        }
    },
    dotsEach: 1
});

    // Testimonial-carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });

    //NavBar
   $(document).ready(function () {
    // Get just the filename (e.g., "about.html" or "branch.html")
        var currentPage = window.location.pathname.split("/").pop();

        if (currentPage === "") {
            currentPage = "index.html";
        }

        $('.navbar-nav .nav-link').each(function () {
            // Get only the filename part of the href (ignores folder paths)
            var linkPage = $(this).attr('href').split("/").pop();

            if (linkPage === currentPage) {
                $('.navbar-nav .nav-link').removeClass('active');
                $(this).addClass('active');
            }
        });
    });

    // Opening Hours
    const openingHours = {
        1: {
            Location: "Parang Marikina",
            Weekdays: "1:00 am – 11:00 pm",
            Saturday: "1:00 am – 11:00 pm",
            Sunday: "1:00 am – 11:00 pm",
        },
        2: {
            Location: "Marcos Highway",
            Weekdays: "1:00 am – 11:00 pm",
            Saturday: "1:00 am – 11:00 pm",
            Sunday: "1:00 am – 11:00 pm",
        },
        3: {
            Location: "Sta Lucia iL-centro",
            Weekdays: "10:00 am – 12:00 mn",
            Saturday: "10:00 am – 12:00 mn",
            Sunday: "10:00 am – 12:00 mn",
        },
        4: {
            Location: "Maybunga Pasig",
            Weekdays: "2:00 pm – 2:00 am",
            Saturday: "2:00 pm – 2:00 am",
            Sunday: "2:00 pm – 2:00 am",
        },
        5: {
            Location: "Cainta Junction",
            Weekdays: "2:00 pm – 2:00 am",
            Saturday: "2:00 pm – 2:00 am",
            Sunday: "2:00 pm – 2:00 am",
        },
        6: {
            Location: "Maia Alta Antipolo",
            Weekdays: "2:00 pm – 2:00 am",
            Saturday: "2:00 pm – 2:00 am",
            Sunday: "2:00 pm – 2:00 am",
        }
    };

    document.getElementById("branchSelect").addEventListener("change", function () {
        const branch = this.value;
        const hourElements = document.querySelectorAll(".open-hour");

        hourElements.forEach(el => {
            const day = el.getAttribute("data-day");
            el.textContent = openingHours[branch][day];
        });
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });

    this.querySelector('input').focus()

})(jQuery);

