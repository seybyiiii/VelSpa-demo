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
                                            <img class="img-fluid" src="/img/logo/vel-spa-logo-cropped.png">
                                        </div>
                                        <p class="cafe-noir logo-seo">
                                            Vel Spa - Traditional Pinoy Hilot is your sanctuary for authentic Filipino 
                                            healing and relaxation. Our spa specializes in a traditional form 
                                            of healing massage that harmonizes the body, mind, and spirit.
                                        </p>
                                        <h4 class="fw-600 cafe-noir mt-4 monteserrat">We Accept</h4>
                                        <div class="card-area cafe-noir footer-icon">
                                            <svg class="gcash" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="" height="" viewBox="0,0,256,256">
                                                <g fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(2.56,2.56)"><path d="M82.189,26.498c-0.547,0 -1.089,0.13 -1.59,0.386c-1.718,0.879 -2.401,2.992 -1.522,4.71c2.935,5.738 4.423,11.931 4.423,18.406c0,6.477 -1.487,12.669 -4.422,18.406c-0.427,0.833 -0.503,1.781 -0.216,2.67c0.288,0.89 0.904,1.614 1.736,2.04c0.5,0.256 1.036,0.385 1.592,0.385c1.322,0 2.518,-0.73 3.118,-1.907c3.446,-6.731 5.192,-13.996 5.192,-21.594c0,-7.595 -1.746,-14.86 -5.19,-21.594c-0.426,-0.833 -1.15,-1.449 -2.041,-1.737c-0.354,-0.114 -0.718,-0.171 -1.08,-0.171z"></path><path d="M43,85c-19.299,0 -35,-15.701 -35,-35c0,-19.299 15.701,-35 35,-35c7.843,0 15.262,2.543 21.454,7.355c1.744,1.355 2.06,3.869 0.704,5.613c-1.354,1.744 -3.868,2.061 -5.612,0.705c-4.775,-3.712 -10.497,-5.673 -16.546,-5.673c-14.888,0 -27,12.112 -27,27c0,14.888 12.112,27 27,27c6.049,0 11.771,-1.961 16.546,-5.672c1.745,-1.357 4.258,-1.04 5.612,0.704c1.355,1.745 1.041,4.257 -0.704,5.613c-6.192,4.812 -13.61,7.355 -21.454,7.355z"></path><path d="M71.142,33.498c-0.501,0 -1.001,0.109 -1.47,0.326c-1.751,0.811 -2.517,2.896 -1.706,4.647c1.681,3.633 2.534,7.512 2.534,11.529c0,4.017 -0.853,7.896 -2.534,11.53c-0.811,1.751 -0.045,3.836 1.706,4.647c0.466,0.215 0.959,0.324 1.467,0.324c1.36,0 2.608,-0.797 3.179,-2.031c2.112,-4.562 3.182,-9.43 3.182,-14.47c0,-5.04 -1.07,-9.908 -3.183,-14.47c-0.392,-0.849 -1.091,-1.493 -1.968,-1.815c-0.393,-0.146 -0.801,-0.217 -1.207,-0.217z"></path><path d="M43,29.5c-11.304,0 -20.5,9.196 -20.5,20.5c0,11.304 9.196,20.5 20.5,20.5c11.304,0 20.5,-9.196 20.5,-20.5c0,-1.93 -1.57,-3.5 -3.5,-3.5h-12c-1.93,0 -3.5,1.57 -3.5,3.5c0,1.93 1.57,3.5 3.5,3.5h8.058l-0.212,0.654c-1.812,5.59 -6.974,9.346 -12.846,9.346c-7.444,0 -13.5,-6.056 -13.5,-13.5c0,-7.444 6.056,-13.5 13.5,-13.5c2.86,0 5.604,0.899 7.938,2.601c0.756,0.551 1.681,0.774 2.603,0.631c0.924,-0.144 1.736,-0.64 2.287,-1.395c1.138,-1.56 0.795,-3.753 -0.765,-4.891c-3.539,-2.582 -7.709,-3.946 -12.063,-3.946z"></path><path d="M82.19,74.001c-0.637,0 -1.249,-0.148 -1.819,-0.44c-0.95,-0.486 -1.655,-1.314 -1.984,-2.331c-0.328,-1.018 -0.241,-2.102 0.246,-3.052c2.897,-5.664 4.367,-11.78 4.367,-18.178c0,-6.395 -1.47,-12.511 -4.368,-18.179c-1.004,-1.963 -0.224,-4.378 1.74,-5.383c0.95,-0.484 2.044,-0.571 3.051,-0.245c1.017,0.328 1.846,1.033 2.332,1.985c3.48,6.805 5.245,14.147 5.245,21.822c0,7.679 -1.765,15.021 -5.246,21.822c-0.687,1.344 -2.052,2.179 -3.564,2.179zM82.189,26.998c-0.474,0 -0.933,0.111 -1.362,0.331c-1.473,0.753 -2.058,2.564 -1.305,4.037c2.971,5.81 4.478,12.079 4.478,18.634c0,6.558 -1.506,12.827 -4.477,18.633c-0.366,0.713 -0.432,1.526 -0.186,2.29c0.247,0.762 0.775,1.383 1.488,1.748c0.429,0.219 0.888,0.331 1.364,0.331c1.134,0 2.158,-0.626 2.673,-1.634c3.409,-6.661 5.138,-13.849 5.138,-21.368c0,-7.516 -1.728,-14.704 -5.136,-21.366c-0.365,-0.713 -0.986,-1.242 -1.749,-1.489c-0.302,-0.098 -0.612,-0.147 -0.926,-0.147z"></path><path d="M43,86c-19.851,0 -36,-16.149 -36,-36c0,-19.851 16.149,-36 36,-36c8.067,0 15.698,2.616 22.067,7.565c1.055,0.819 1.728,2 1.894,3.326c0.166,1.326 -0.193,2.636 -1.013,3.69c-0.819,1.054 -2,1.727 -3.325,1.893c-1.327,0.167 -2.636,-0.194 -3.691,-1.013c-4.598,-3.572 -10.107,-5.461 -15.932,-5.461c-14.337,0 -26,11.664 -26,26c0,14.336 11.663,26 26,26c5.825,0 11.334,-1.889 15.933,-5.462c1.055,-0.819 2.366,-1.181 3.69,-1.014c1.325,0.167 2.506,0.839 3.325,1.894c0.819,1.055 1.179,2.365 1.013,3.69c-0.166,1.325 -0.839,2.506 -1.894,3.326c-6.369,4.95 -14,7.566 -22.067,7.566zM43,16c-18.748,0 -34,15.252 -34,34c0,18.748 15.252,34 34,34c7.619,0 14.825,-2.471 20.841,-7.146c0.633,-0.492 1.036,-1.2 1.136,-1.995c0.1,-0.795 -0.116,-1.582 -0.608,-2.214c-0.491,-0.633 -1.199,-1.037 -1.994,-1.136c-0.793,-0.1 -1.582,0.116 -2.214,0.608c-4.954,3.849 -10.888,5.883 -17.161,5.883c-15.439,0 -28,-12.561 -28,-28c0,-15.439 12.561,-28 28,-28c6.273,0 12.207,2.034 17.159,5.883c0.634,0.492 1.421,0.708 2.214,0.607c0.796,-0.1 1.504,-0.503 1.995,-1.136c0.492,-0.633 0.708,-1.419 0.608,-2.214c-0.1,-0.795 -0.503,-1.504 -1.136,-1.996c-6.015,-4.673 -13.222,-7.144 -20.84,-7.144z"></path><path d="M71.139,67.001c-0.58,0 -1.144,-0.125 -1.676,-0.37c-2.002,-0.927 -2.877,-3.31 -1.951,-5.311c1.651,-3.567 2.488,-7.376 2.488,-11.32c0,-3.944 -0.837,-7.753 -2.488,-11.32c-0.926,-2.001 -0.051,-4.384 1.95,-5.311c0.965,-0.447 2.063,-0.491 3.061,-0.125c1.003,0.369 1.802,1.105 2.249,2.075c2.142,4.628 3.228,9.567 3.228,14.681c0,5.114 -1.086,10.053 -3.229,14.68c-0.652,1.41 -2.078,2.321 -3.632,2.321zM71.142,33.998c-0.435,0 -0.858,0.094 -1.26,0.279c-1.501,0.695 -2.157,2.482 -1.462,3.983c1.712,3.699 2.58,7.65 2.58,11.74c0,4.09 -0.868,8.041 -2.58,11.74c-0.695,1.501 -0.039,3.288 1.462,3.983c1.472,0.678 3.312,-0.012 3.981,-1.463c2.081,-4.494 3.137,-9.292 3.137,-14.26c0,-4.968 -1.056,-9.766 -3.137,-14.26c-0.335,-0.727 -0.935,-1.28 -1.687,-1.556c-0.334,-0.124 -0.683,-0.186 -1.034,-0.186z"></path><path d="M43,71c-11.579,0 -21,-9.42 -21,-21c0,-11.58 9.421,-21 21,-21c4.46,0 8.733,1.397 12.357,4.042c0.862,0.629 1.428,1.557 1.593,2.614c0.165,1.057 -0.09,2.114 -0.719,2.976c-0.63,0.864 -1.559,1.43 -2.614,1.595c-1.059,0.165 -2.112,-0.092 -2.975,-0.721c-2.246,-1.64 -4.889,-2.506 -7.642,-2.506c-7.168,0 -13,5.832 -13,13c0,7.168 5.832,13 13,13c5.654,0 10.626,-3.617 12.37,-9h-7.37c-2.206,0 -4,-1.794 -4,-4c0,-2.206 1.794,-4 4,-4h12c2.206,0 4,1.794 4,4c0,11.58 -9.421,21 -21,21zM43,30c-11.028,0 -20,8.972 -20,20c0,11.028 8.972,20 20,20c11.028,0 20,-8.972 20,-20c0,-1.654 -1.346,-3 -3,-3h-12c-1.654,0 -3,1.346 -3,3c0,1.654 1.346,3 3,3h7.37c0.319,0 0.622,0.154 0.81,0.413c0.188,0.259 0.24,0.594 0.142,0.897c-1.88,5.795 -7.233,9.69 -13.322,9.69c-7.72,0 -14,-6.28 -14,-14c0,-7.72 6.28,-14 14,-14c2.967,0 5.813,0.933 8.232,2.697c0.646,0.472 1.439,0.667 2.23,0.541c0.792,-0.124 1.488,-0.548 1.96,-1.195c0.976,-1.337 0.682,-3.218 -0.655,-4.193c-3.451,-2.519 -7.52,-3.85 -11.767,-3.85z"></path><path d="M43,60c-0.487,0 -1.004,-0.044 -1.579,-0.136c-0.272,-0.043 -0.458,-0.3 -0.415,-0.572c0.044,-0.273 0.293,-0.463 0.573,-0.415c0.522,0.082 0.986,0.123 1.421,0.123c0.793,0 1.589,-0.108 2.367,-0.322c0.271,-0.072 0.541,0.083 0.615,0.35c0.073,0.266 -0.084,0.542 -0.35,0.614c-0.864,0.238 -1.75,0.358 -2.632,0.358z"></path><path d="M38.5,58.867c-0.08,0 -0.162,-0.019 -0.237,-0.06c-3.246,-1.749 -5.263,-5.124 -5.263,-8.807c0,-5.514 4.486,-10 10,-10c2.083,0 4.085,0.642 5.79,1.856c0.225,0.16 0.277,0.472 0.117,0.697c-0.16,0.226 -0.473,0.278 -0.697,0.117c-1.534,-1.092 -3.336,-1.67 -5.21,-1.67c-4.963,0 -9,4.038 -9,9c0,3.314 1.815,6.352 4.737,7.927c0.243,0.131 0.334,0.434 0.203,0.677c-0.09,0.168 -0.262,0.263 -0.44,0.263z"></path><path d="M47.5,58.858c-0.177,0 -0.349,-0.095 -0.439,-0.262c-0.132,-0.243 -0.042,-0.546 0.201,-0.678c0.44,-0.239 0.86,-0.513 1.248,-0.814c0.215,-0.17 0.53,-0.131 0.701,0.088c0.17,0.218 0.13,0.532 -0.088,0.702c-0.431,0.334 -0.896,0.638 -1.385,0.903c-0.076,0.042 -0.157,0.061 -0.238,0.061z"></path></g></g>
                                            </svg>
                                            <i class="fa-brands fa-cc-visa"></i>
                                            <i class="fa-solid fa-credit-card"></i>
                                            <i class="fa-brands fa-cc-mastercard"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6 col-xl-3">
                                    <div class="footer-item d-flex flex-column ps-4">
                                        <h4 class="mb-4 cafe-noir monteserrat fw-600 ">Our Locations</h4>
                                        <a href="/VelSpa-demo/location/parang-marikina.html"><i class="fas fa-angle-right me-2"></i> Parang Marikina</a>
                                        <a href=""><i class="fas fa-angle-right me-2"></i> Marcos Highway</a>
                                        <a href=""><i class="fas fa-angle-right me-2"></i> Sta Lucia il-Centro</a>
                                        <a href=""><i class="fas fa-angle-right me-2"></i> Maybunga Pasig</a>
                                        <a href=""><i class="fas fa-angle-right me-2"></i> Cainta Junction</a>
                                        <a href=""><i class="fas fa-angle-right me-2"></i> Maia Alta Antipolo</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6 col-xl-3">
                                    <div class="footer-item d-flex flex-column ps-4">
                                        <h4 class="mb-4 cafe-noir monteserrat fw-600 ">Main Address</h4>
                                        <div class="row">
                                            <div class="col-1">
                                                <i class="pin-icon fas fa-map-marker-alt footer-map-pin me-2"></i> 
                                            </div>
                                            <div class="col-10 col-md-10 col-lg-10">
                                                <p class="mb-0 lh-base">Blk 2 Lot 3, Chateau De Regina, Gen. B.G Molina Street, Parang, Marikina City</p>
                                            </div>
                                        </div> 
                                        <h4 class="my-4 cafe-noir monteserrat fw-600 ">Contact Us</h4>
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
                                        <h4 class="mb-4 cafe-noir monteserrat fw-600 ">Follow Us</h4>
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
                                    Designed By <a class="cc-highlight" href="#">RXC Design</a>
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

// Appointment
    document.addEventListener("DOMContentLoaded", function () {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById("appointmentDate").value = today;
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
        "Parang Marikina": {
            Location: "Parang Marikina",
            Weekdays: "1:00 am – 11:00 pm",
            Saturday: "1:00 am – 11:00 pm",
            Sunday: "1:00 am – 11:00 pm",
        },
        "Marcos Highway": {
            Location: "Marcos Highway",
            Weekdays: "1:00 am – 11:00 pm",
            Saturday: "1:00 am – 11:00 pm",
            Sunday: "1:00 am – 11:00 pm",
        },
        "Sta Lucia iL-centro": {
            Location: "Sta Lucia iL-centro",
            Weekdays: "10:00 am – 12:00 mn",
            Saturday: "10:00 am – 12:00 mn",
            Sunday: "10:00 am – 12:00 mn",
        },
        "Maybunga Pasig": {
            Location: "Maybunga Pasig",
            Weekdays: "2:00 pm – 2:00 am",
            Saturday: "2:00 pm – 2:00 am",
            Sunday: "2:00 pm – 2:00 am",
        },
        "Cainta Junction": {
            Location: "Cainta Junction",
            Weekdays: "2:00 pm – 2:00 am",
            Saturday: "2:00 pm – 2:00 am",
            Sunday: "2:00 pm – 2:00 am",
        },
        "Maia Alta Antipolo": {
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

