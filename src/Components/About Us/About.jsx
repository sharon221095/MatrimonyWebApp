import React from 'react'
import './About.css'
import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from "axios";
import image16 from '../img/img-16.avif';
import image17 from '../img/img-17.jpg';
import image18 from '../img/img-18.avif';
import image19 from '../img/img-19.avif';
import image20 from '../img/img-20.jpg';
import image21 from '../img/img-21.jpg';
import image22 from '../img/img-22.avif';
import image23 from '../img/img-23.jpg';
import image24 from '../img/img-24.jpg';
import image25 from '../img/img-25.jpg';
import image26 from '../img/img-26.jpg';
import image27 from '../img/img-27.jpg';
import image28 from '../img/img-28.jpg';
import image29 from '../img/img-29.jpg';
import image30 from '../img/img-30.jpg';

const About = () => {


    const navigateTo = useNavigate();

    return (
        <><div className='body'>
            <header class="header4">
                <h2 class="h2c"><a href="" onClick={() => navigateTo('/home')}>TheIndianWedding</a></h2>
                <nav>
                    <ul>
                        <li><a href="" onClick={() => navigateTo('/home')}>Home</a></li>
                        <li><a href="" onClick={() => navigateTo('/about')}>About Us</a></li>
                        <li><a href="" onClick={() => navigateTo('/services')}>Services</a></li>
                        <li><a href="" onClick={() => navigateTo('/portfolio')}>Portfolio</a></li>
                        <li><a href="" onClick={() => navigateTo('/testimonials')}>Testimonials</a></li>
                        <li><a href="" onClick={() => navigateTo('/blog')}>Blog</a></li>
                        <li><a href="" onClick={() => navigateTo('/contact')}>Contact</a></li>
                    </ul>
                </nav>
                <div class="button8">
                    <a href="" onClick={() => navigateTo('/contact')}><span>Join Now</span></a>
                </div>
            </header>


            <div class="parent-container32">

                <div class="container32">

                    <h1>Connecting Souls for a Lifetime</h1>
                    <p>Discover your perfect life partner within the vibrant Indian community through TheIndianWedding’s comprehensive matrimonial platform.</p>

                </div>

            </div>



            <div class="parent-container33">

                <div class="info15">
                    <h2>Welcome to The IndianWedding</h2>
                </div>


                <div class="container33">


                    <div class="set1">

                        <div class="img-21">
                            <figure>
                                <img src={image21} alt="img-21"></img>
                            </figure>
                        </div>


                        <div class="info16">
                            <h3>With years of experience in the industry, The IndianWedding is a trusted platform that connects individuals seeking marriage partners within the Indian community.</h3>
                        </div>




                        <div class="experience">
                            <div class="value1">
                                <span class="number1" data-duration="1.5" data-to-value="5" data-from-value="0" data-delimiter=",">5</span>
                                <span class="symbol1">+</span>
                            </div>
                            <div class="def1">Experience</div>
                        </div>



                        <div class="customers">
                            <div class="value2">
                                <span class="number2" data-duration="1.5" data-to-value="100" data-from-value="0" data-delimiter=",">100</span>
                                <span class="symbol2">+</span>
                            </div>
                            <div class="def2">Customers</div>
                        </div>



                        <div class="events">
                            <div class="value3">
                                <span class="number3" data-duration="1.5" data-to-value="80" data-from-value="0" data-delimiter=",">80</span>
                                <span class="symbol3">+</span>
                            </div>
                            <div class="def3">Events</div>
                        </div>



                        <div class="members">
                            <div class="value4">
                                <span class="number4" data-duration="1.5" data-to-value="10" data-from-value="0" data-delimiter=",">10</span>
                                <span class="symbol4">+</span>
                            </div>
                            <div class="def4">Members</div>
                        </div>

                    </div>



                    <div class="set2">

                        <div class="img-22">
                            <figure>
                                <img src={image22} alt="img-22"></img>
                            </figure>
                        </div>



                        <div class="">
                            <p class="info17">Our platform has successfully helped countless users find compatible matches, leading to lifetime partnerships and happy marriages.</p>
                            <p class="info18">We provide a range of tools and features, including detailed profiles and personalized matchmaking services, to enhance the user experience and increase the chances of finding the right life partner.</p>
                        </div>



                        <div class="info19">
                            <p>Follow Us</p>

                            <div class="social-menu">
                                <ul>
                                    <li><a href="" target="blank"><i class="fab fa-facebook"></i></a></li>
                                    <li><a href="" target="blank"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href=""><i class="fab fa-youtube" target="blank"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <div class="parent-container34">

                <div class="container34">

                    <div class="patch1">
                        <div class="info20">
                            <h2>Our Mission</h2>
                            <p>Empowering individuals to find love and companionship</p>
                        </div>
                        <p class="para1">At The IndianWedding, our mission is to provide a reliable and user-friendly platform that empowers individuals to find their perfect life partner within the Indian community. We are committed to leveraging technology and innovation to simplify and enhance the process of matchmaking, ensuring positive and lasting connections.</p>
                    </div>



                    <div class="img-23">
                        <figure>
                            <img src={image23} alt="img-23"></img>
                        </figure>
                    </div>



                    <div class="img-24">
                        <figure>
                            <img src={image24} alt="img-24"></img>
                        </figure>
                    </div>


                    <div class="patch2">
                        <div class="info21">
                            <h2>Our Vision</h2>
                            <p>Creating a world where love knows no boundaries</p>
                        </div>
                        <p class="para2">Our vision is to create a world where love transcends boundaries and individuals have the freedom to choose their life partner based on genuine compatibility and shared values. We aim to be the premier matrimonial platform for the Indian community, providing a safe, inclusive, and efficient space for individuals to embark on their lifelong journey of love and partnership.</p>
                    </div>

                </div>
            </div>



            <div class="parent-container35">
                <div class="container35">
                    <div class="info22">
                        <h2>Unveiling Our Process</h2>
                        <p>Working with The IndianWedding behind the scenes is a seamless and personalized experience. Our dedicated team of professionals ensures meticulous attention to detail, delivering exceptional customer service and support throughout the matchmaking journey. From profile creation to finalizing matches, we are there every step of the way.</p>
                    </div>
                    <div class="row1">
                        <div class="img-25">
                            <figure>
                                <img src={image25} alt="img-25"></img>
                            </figure>
                        </div>
                        <div class="img-26">
                            <figure>
                                <img src={image26} alt="img-26"></img>
                            </figure>
                        </div>
                        <div class="img-27">
                            <figure>
                                <img src={image27} alt="img-27"></img>
                            </figure>
                        </div>
                    </div>
                    <div class="row2">
                        <div class="img-28">
                            <figure>
                                <img src={image28} alt="img-28"></img>
                            </figure>
                        </div>
                        <div class="img-29">
                            <figure>
                                <img src={image29} alt="img-29"></img>
                            </figure>
                        </div>
                        <div class="img-30">
                            <figure>
                                <img src={image30} alt="img-30"></img>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>



            <div class="parent-container36">
                <div class="check">
                    <h2>Check Out Our Recent Work On Instagram</h2>
                    <div class="insta">
                        <a href="" target="_self" rel="noopener noreferrer">Follow Us On Instagram</a>
                    </div>
                </div>
                <div class="container36">
                    <div class="img16">
                        <figure>
                            <img src={image16} alt="img-16"></img>
                        </figure>
                    </div>
                    <div class="img17">
                        <figure>
                            <img src={image17} alt="img-17"></img>
                        </figure>
                    </div>
                    <div class="img18">
                        <figure>
                            <img src={image18} alt="img-18"></img>
                        </figure>
                    </div>
                    <div class="img19">
                        <figure>
                            <img src={image19} alt="img-19"></img>
                        </figure>
                    </div>
                    <div class="img20">
                        <figure>
                            <img src={image20} alt="img-20"></img>
                        </figure>
                    </div>
                </div>
            </div>


            <div class="parent-container37">
                <div class="container37">

                    <div class="find">
                        <h2>Find Your Soulmate Today</h2>
                    </div>
                    <p class="info23">Join The IndianWedding today and begin your search for a compatible life partner in the Indian community.</p>
                    <div class="button9">
                        <a href="" target="_self" rel="noopener noreferrer" role="button" onClick={() => navigateTo('/contact')}>
                            <span>Join Now</span>
                        </a>
                    </div>

                </div>
            </div>


            <div class="parent-container38">
                <div class="contact-container3">
                    <div class="contact-item3">
                        <h2>Phone</h2>
                        <p>202-555-0188</p>
                    </div>
                    <div class="contact-item3">
                        <h2>Follow Us</h2>
                        <div class="social-icons3">
                            <ul>
                                <li><a href="" target="blank"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="" target="blank"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="" target="blank"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href=""><i class="fab fa-youtube" target="blank"></i></a></li>
                                <li><a href=""><i class="fab fa-twitter" target="blank"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="contact-item3">
                        <h2>Email us at:</h2>
                        <p> <a href="mailto:contact@example.com">contact@example.com</a></p>
                    </div>
                </div>
            </div><div class="parent-container39">

                <nav class="container39">

                    <ul id="info24">
                        <li><a href="" onClick={() => navigateTo('/home')}>Home</a></li>
                        <li><a href="" onClick={() => navigateTo('/about')}>About Us</a></li>
                        <li><a href="" onClick={() => navigateTo('/services')}>Services</a></li>
                        <li><a href="" onClick={() => navigateTo('/portfolio')}>Portfolio</a></li>
                        <li><a href="" onClick={() => navigateTo('/testimonials')}>Testimonials</a></li>
                        <li><a href="" onClick={() => navigateTo('/blog')}>Blog</a></li>
                        <li><a href="" onClick={() => navigateTo('/contact')}>Contact</a></li>
                    </ul>

                </nav>

            </div><div class="parent-container40">
                <div class="container40">
                    <p>Copyright © 2024 theindianwedding</p>
                </div>
            </div>
        </div >
        </>
    )
}

export default About