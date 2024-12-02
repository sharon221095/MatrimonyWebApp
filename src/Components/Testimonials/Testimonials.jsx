import React, { useState, useRef } from 'react';
import './Testimonials.css'
import { useNavigate, useLocation } from "react-router-dom";
import image16 from '../img/img-16.avif';
import image17 from '../img/img-17.jpg';
import image18 from '../img/img-18.avif';
import image19 from '../img/img-19.avif';
import image20 from '../img/img-20.jpg';
import image54 from '../img/img-54.jpg';
import image55 from '../img/img-55.avif';
import image56 from '../img/img-56.jpg';
import image57 from '../img/img-57.avif';
import image59 from '../img/img-59.jpg';
import image60 from '../img/img-60.jpg';

import Header from '../Header/Header';

const Testimonials = () => {

    const navigateTo = useNavigate();

    return (
        <div className='body'>
            <Header />
            <div class="parent-container57">
                <div class="container57">
                    <h1>Happily Ever Afters</h1>
                    <p>Read what our happy couples have to say about their experience with the 'NRImatch'. Their stories will make you believe in the power of true love.</p>
                </div>
            </div>

            <div class="parent-container58">
                <div class="container58">

                    <div class="patch9">

                        <div class="img-54">
                            <figure>
                                <img src={image54} alt="img-54"></img>
                            </figure>
                        </div>

                        <div class="info40">
                            <div class="symbol5">
                                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z"></path>
                                </svg>
                            </div>
                            <h2>Riya &amp; Arjun</h2>
                            <p>We are grateful to the 'NRImatch' for bringing us together. We found true love and a partner for life!</p>
                        </div>

                    </div>


                    <div class="patch10">

                        <div class="img-55">
                            <figure>
                                <img src={image55} alt="img-55"></img>
                            </figure>
                        </div>



                        <div class="info41">
                            <div class="symbol6">
                                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z"></path>
                                </svg>
                            </div>
                            <h2>Smita &amp; Deepak</h2>
                            <p>The 'NRImatch' helped us find our soulmates. We couldn’t be happier with our life partners!</p>
                        </div>

                    </div>


                    <div class="patch11">

                        <div class="batch10">

                            <div class="star7" title="5/5">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>

                            <div class="info42">
                                <div>
                                    <p class="message7">We are grateful to the 'NRImatch' for bringing us together. We found true love and a partner for life!</p>
                                </div>
                                <div class="img-56">
                                    <img src={image56} alt="img-56"></img>
                                </div>
                                <p class="name7">Tina &amp; Aravid</p>
                            </div>
                        </div>

                        <div class="batch11">

                            <div class="star8" title="5/5">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>



                            <div class="info43">
                                <div>
                                    <p class="message8">The 'NRImatch' helped us find our soulmates. We couldn't be happier with our life partners!</p>
                                </div>
                                <div class="img-57">
                                    <img src={image57} alt="img-57"></img>
                                </div>
                                <p class="name8">Kajol &amp; Aswin</p>
                            </div>
                        </div>




                    </div>

                    <div class="patch12">

                        <div class="batch13">

                            <div class="star10" title="5/5">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>



                            <div class="info45">
                                <div>
                                    <p class="message10">Thanks to NRImatch, we found love in the most unexpected way. We are forever grateful for this platform.</p>
                                </div>
                                <div class="img-59">
                                    <img src={image59} alt="img-59"></img>
                                </div>
                                <p class="name10">Neha &amp; Arjun</p>
                            </div>

                        </div>

                        <div class="batch14">

                            <div class="star11" title="5/5">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>



                            <div class="info46">
                                <div>
                                    <p class="message11">We had almost given up hope until we came across the 'NRImatch'. It truly works wonders. Highly recommended!</p>
                                </div>
                                <div class="img-60">
                                    <img src={image60} alt="img-60"></img>
                                </div>
                                <p class="name11">Sneha &amp; Rajesh</p>
                            </div>

                        </div>

                    </div>



                </div>
            </div>


            <div className="parent-container700">
                <div className="check17">
                    <h2>Check Out Our Recent Work On Instagram</h2>
                </div>
                <div className="insta-testimonials">
                    <a href="https://www.instagram.com/nrimatch/" rel="noopener noreferrer">
                        Follow Us On Instagram
                    </a>
                </div>
                <div className="container700">
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <div className="image16">
                                <figure>
                                    <img srcSet={image16} alt="img-16" />
                                </figure>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="image17">
                                <figure>
                                    <img srcSet={image17} alt="img-17" />
                                </figure>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="image18">
                                <figure>
                                    <img srcSet={image18} alt="img-18" />
                                </figure>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="image19">
                                <figure>
                                    <img srcSet={image19} alt="img-19" />
                                </figure>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="image20">
                                <figure>
                                    <img srcSet={image20} alt="img-20" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="parent-container801">
                <div className="container801 text-center">
                    <div className="find-testimonials mb-4">
                        <h2>Find Your Soulmate Today</h2>
                    </div>
                    <p className="info-testimonials">Join NRImatch today and begin your search for a compatible life partner in the Indian community.</p>
                </div>
            </div>


            <div class="parent-container504">
                <div class="contact-container504">
                    <div class="contact-item504">
                        <h2>Phone</h2>
                        <p>+447737024736</p>
                    </div>
                    <div class="contact-item504">
                        <h2>Follow Us</h2>
                        <div class="social-icons504">
                            <ul>
                                <li><a href="https://www.facebook.com/profile.php?id=61570002380672" target="blank"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/nrimatch/" ><i class="fab fa-instagram"></i></a></li>
                                <li><a href=""><i class="fab fa-youtube" target="blank"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="contact-item504">
                        <h2>Email</h2>
                        <p>paulfortuneltd@gmail.com</p>
                    </div>
                </div>
            </div>




            <div class="parent-container551">

                <nav class="container551">

                    <ul id="info-testimonials">
                        <li><a href="#" onClick={() => navigateTo('/home')}>Home</a></li>
                        <li><a href="#" onClick={() => navigateTo('/about')}>About Us</a></li>
                        <li><a href="#" onClick={() => navigateTo('/services')}>Services</a></li>
                        <li><a href="#" onClick={() => navigateTo('/portfolio')}>Portfolio</a></li>
                        <li><a href="#" onClick={() => navigateTo('/testimonials')}>Testimonials</a></li>
                        <li><a href="#" onClick={() => navigateTo('/blog')}>Blog</a></li>
                        <li><a href="#" onClick={() => navigateTo('/contact')}>Contact</a></li>
                    </ul>

                </nav>

            </div>



            <div class="parent-container561">
                <div class="container561">
                    <p>Copyright © 2024 NRImatch</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials