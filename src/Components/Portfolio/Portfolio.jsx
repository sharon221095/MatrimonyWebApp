import React from 'react'
import './Portfolio.css'
import { useNavigate, NavLink } from "react-router-dom";
import image16 from '../img/img-16.avif';
import image17 from '../img/img-17.jpg';
import image18 from '../img/img-18.avif';
import image19 from '../img/img-19.avif';
import image20 from '../img/img-20.jpg';
import image35 from '../img/img-35.jpg';
import image36 from '../img/img-36.jpg';
import image37 from '../img/img-37.jpg';
import image38 from '../img/img-38.jpg';
import image39 from '../img/img-39.avif';
import image40 from '../img/img-40.jpg';
import image41 from '../img/img-41.jpg';
import image42 from '../img/img-42.jpg';
import image43 from '../img/img-43.jpg';
import image44 from '../img/img-44.avif';
import image45 from '../img/img-45.jpg';
import image46 from '../img/img-46.jpg';
import image47 from '../img/img-47.jpg';
import image48 from '../img/img-48.avif';
import image49 from '../img/img-49.avif';
import image50 from '../img/img-50.jpg';
import image51 from '../img/img-51.jpg';
import image52 from '../img/img-52.jpg';
import image53 from '../img/img-53.jpg';

const Portfolio = () => {

    const navigateTo= useNavigate();

  return (
    <div className='body'>
        <header class="header6">
        <h2 class="h2e"><a href="/HomePage/Home.html">TheIndianWedding</a></h2>
        <nav>
            <ul>
                <li><a href="#" onClick={() => navigateTo('/home')}>Home</a></li>
                <li><a href="#" onClick={() => navigateTo('/about')}>About Us</a></li>
                <li><a href="#" onClick={() => navigateTo('/services')}>Services</a></li>
                <li><a href="#"onClick={() => navigateTo('/portfolio')}>Portfolio</a></li>
                <li><a href="#" onClick={() => navigateTo('/testimonials')}>Testimonials</a></li>
                <li><a href="#" onClick={() => navigateTo('/blog')}>Blog</a></li>
                <li><a href="#" onClick={() => navigateTo('/contact')}>Contact</a></li>
            </ul>
        </nav>
        <div class="button12">
            <a href="#"><span>Join Us</span></a>
        </div>
    </header>

    <div class="parent-container48">

        <div class="container48">

                <h1>Love Stories in Pictures</h1>
                <p>Explore the magical journey of couples who found their perfect match through The IndianWedding. Browse through our collection of wedding photos and get inspired for your own special day.</p>

        </div>

    </div>


    <div class="parent-container49">
        <div class="container49">

            <div class="info32">
                <h2>Profiles</h2>
            </div>
        
        
        
        <div class="patch3">

            <div class="img-35">
                <figure>
                    <img src={image35} alt="img-35"></img>
                </figure>
            </div>
        
        
        
            <div class="img-36">
                <figure>
                    <img src={image36} alt="img-36"></img>
                </figure>
            </div>

        </div>
        
        
        
        <div class="patch4">

            <div class="img-37">
                <figure>
                    <img src={image37} alt="img-37"></img>
                </figure>
            </div>
        
        
        
            <div class="img-38">
                <figure>
                    <img src={image38} alt="img-38"></img>
                </figure>
            </div>
        
        
            <div class="img-39">
                <figure>
                    <img src={image39} alt="img-39"></img>
                </figure>
            </div>
        
        </div>
        
        
        <div class="star4" title="5/5">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
        
            <div class="info33">
                <div>
                    <p class="message4">We cannot thank TheIndianWedding enough for bringing us together. We are grateful for this platform that made our dreams come true.</p>
                </div>
                <div class="img-40">
                    <img src={image40} alt="img-40"></img>
                </div>
                <p class="name4">Riya &amp; Mohan</p>
            </div>

        </div>
    </div>


    <div class="parent-container50">

            <div class="info34">
             <h2>Matchmaking</h2>
            </div>

        <div class="container50"> 
        
        <div class="patch5">

            <div class="img-41">
                <figure>
                    <img src={image41} alt="img-41"></img>
                </figure>
            </div>
        
        
        
            <div class="img-42">
                <figure>
                    <img src={image42} alt="img-42"></img>
                </figure>
            </div>


            <div class="img-43">
                <figure>
                    <img src={image43} alt="img-43"></img>
                </figure>
            </div>

        </div>
        
        
        
        <div class="patch6">

            <div class="img-44">
                <figure>
                    <img src={image44} alt="img-44"></img>
                </figure>
            </div>
        
        
        
            <div class="img-45">
                <figure>
                    <img src={image45} alt="img-45"></img>
                </figure>
            </div>
        
        
            <div class="img-46">
                <figure>
                    <img src={image46} alt="img-46"></img>
                </figure>
            </div>
        
        </div>
        
        
        <div class="star5" title="5/5">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
        
            <div class="info35">
                <div>
                    <p class="message5">TheIndianWedding introduced us to our soulmates. We are forever indebted to this amazing service. Thank you!</p>
                </div>
                <div class="img-47">
                    <img src={image47} alt="img-47"></img>
                </div>
                <p class="name5">Pooja &amp; Ravi</p>
            </div>

        </div>
    </div>


    <div class="parent-container51">
        <div class="container51">

            <div class="info36">
                <h2>Tools</h2>
            </div>
        
        
        
        <div class="patch7">

            <div class="img-48">
                <figure>
                    <img src={image48} alt="img-48"></img>
                </figure>
            </div>
        
        
        
            <div class="img-49">
                <figure>
                    <img src={image49} alt="img-49"></img>
                </figure>
            </div>


            <div class="img-50">
                <figure>
                    <img src={image50} alt="img-50"></img>
                </figure>
            </div>


        </div>
        
        
        
        <div class="patch8">

            <div class="img-51">
                <figure>
                    <img src={image51} alt="img-51"></img>
                </figure>
            </div>
        
        
        
            <div class="img-52">
                <figure>
                    <img src={image52} alt="img-52"></img>
                </figure>
            </div>
        
        
        </div>
        
        
        <div class="star6" title="5/5">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
        
            <div class="info37">
                <div>
                    <p class="message6">Thanks to TheIndianWedding, we found love in the most unexpected way. We are forever grateful for this platform.</p>
                </div>
                <div class="img-53">
                    <img src={image53} alt="img-53"></img>
                </div>
                <p class="name6">Neha &amp; Arjun</p>
            </div>

        </div>
    </div>


    <div class="parent-container52">
        <div class="check">
            <h2>Check Out Our Recent Work On Instagram</h2>
            <div class="insta">
                <a href="#" target="_self" rel="noopener noreferrer">Follow Us On Instagram</a>
            </div>
        </div>
        <div class="container52">
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

    
    <div class="parent-container53">
        <div class="container53">
        
                <div class="find">
                    <h2>Find Your Soulmate Today</h2>
                </div>
                <p class="info38">Join The IndianWedding today and begin your search for a compatible life partner in the Indian community.</p>
                <div class="button13">
                    <a href="#" target="_self" rel="noopener noreferrer" role="button">
                        <span>Join Now</span>
                    </a>
                </div>
        
        </div>
    </div>


    <div class="parent-container54">
    <div class="contact-container5">
        <div class="contact-item5">
            <h2>Phone</h2>
            <p>202-555-0188</p>
        </div>
        <div class="contact-item5">
            <h2>Follow Us</h2>
            <div class="social-icons5">
                <ul>
                    <li><a href="" target="blank"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="" target="blank"><i class="fab fa-instagram"></i></a></li>
                    <li><a href=""><i class="fab fa-youtube" target="blank"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="contact-item5">
            <h2>Email</h2>
            <p>contact@example.com</p>
        </div>
    </div>
    </div>
    
    
    
        
<div class="parent-container55">

    <nav class="container55">

            <ul id="info39">
                <li><a href="#" onClick={() => navigateTo('/home')}>Home</a></li>
                <li><a href="#" onClick={() => navigateTo('/about')}>About Us</a></li>
                <li><a href="#" onClick={() => navigateTo('/services')}>Services</a></li>
                <li><a href="#"onClick={() => navigateTo('/portfolio')}>Portfolio</a></li>
                <li><a href="#" onClick={() => navigateTo('/testimonials')}>Testimonials</a></li>
                <li><a href="#" onClick={() => navigateTo('/blog')}>Blog</a></li>
                <li><a href="#" onClick={() => navigateTo('/contact')}>Contact</a></li>
            </ul>

    </nav>

</div>			
                      
                                

<div class="parent-container56">
	<div class="container56">
        <p>Copyright © 2024 theindianwedding</p>
    </div>			
</div>

        

    </div>
  )
}

export default Portfolio