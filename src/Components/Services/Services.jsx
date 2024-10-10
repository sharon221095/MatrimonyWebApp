import React from 'react'
import './Services.css'
import { useNavigate, NavLink } from "react-router-dom";
import image16 from '../img/img-16.avif';
import image17 from '../img/img-17.jpg';
import image18 from '../img/img-18.avif';
import image19 from '../img/img-19.avif';
import image20 from '../img/img-20.jpg';
import image31 from '../img/img-31.jpg';
import image32 from '../img/img-32.jpg';
import image33 from '../img/img-33.avif';
import image34 from '../img/img-34.jpg';

const Services = () => {

    const navigateTo= useNavigate();
    
  return (
    <div className='body'>
        <header class="header5">
        <h2 class="h2d"><a href="" onClick={() => navigateTo('/home')}>TheIndianWedding</a></h2>
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
        <div class="button10">
            <a href="" onClick={() => navigateTo('/contact')}><span>Join Us</span></a>
        </div>
    </header>

    <div class="parent-container41">

        <div class="container41">

                <h1>Find Your Perfect Life Partner</h1>
                <p>Discover our range of services to help you find your soulmate within the Indian community and make your dream wedding a reality.</p>

        </div>

    </div>



    <div class="parent-container42">

        <div class="info25">
            <h2>Profiles</h2>
        </div>

        <div class="container42">
        
        
        
        <div class="container3a">

                <div class="img-31">
                    <figure>
                        <img src={image31} alt="img-31"></img>
                    </figure>
                </div>
        
        
        
                <div class="info26">
                    <h3>Profile Creation</h3>
                    <p>Create a detailed profile with your preferences, interests, and background to attract potential life partners and increase your chances of finding a compatible match.</p>
                </div>
        
        
                <div class="list1">
                    <ul>
                        <li><span>Personalized Profile Showcase</span></li>
                        <li><span>Highlight Your Cultural Roots</span></li>
                        <li><span>Enhanced Matchmaking Algorithm</span></li>
                    </ul>
                </div>

        </div>
        
        
        
        <div class="container3b">

            <div class="img-32">
                <figure>
                    <img src={image32} alt="img-32"></img>
                </figure>
            </div>
    
    
    
            <div class="info27">
                <h3>Matchmaking Services</h3>
                <p>Leverage our advanced matchmaking services and let our team of experts curate a personalized list of potential partners based on your preferences and criteria.</p>
            </div>
    
    
            <div class="list2">
                <ul>
                    <li><span>Exclusive Match Recommendations</span></li>
                    <li><span>Professional Expert Assistance</span></li>
                    <li><span>Privacy Protection</span></li>
                </ul>
            </div>

        </div>
        
        
        <div class="container3c">

            <div class="img-33">
                <figure>
                    <img src={image33} alt="img-33"></img>
                </figure>
            </div>
    
    
    
            <div class="info28">
                <h3>Communication Tools</h3>
                <p>Use our innovative communication tools, including chat and video call features, to connect with your potential life partner and strengthen your understanding before taking the next step.</p>
            </div>
    
    
            <div class="list3">
                <ul>
                    <li><span>Instant Messaging and Chat</span></li>
                    <li><span>Video Call and Audio Call</span></li>
                    <li><span>Safe and Secure Communication</span></li>
                </ul>
            </div>

        </div>


        <div class="container3d">

            <div class="img-34">
                <figure>
                    <img src={image34} alt="img-34"></img>
                </figure>
            </div>
    
    
    
            <div class="info29">
                <h3>Wedding Planning Resources</h3>
                <p>Access our collection of wedding planning resources, including ideas, tips, and inspiration, to make your Indian wedding a memorable celebration filled with cultural richness.</p>
            </div>
    
    
            <div class="list4">
                <ul>
                    <li><span>Inspiring Wedding Ideas</span></li>
                    <li><span>Cultural Traditions and Customs</span></li>
                    <li><span>Expert Wedding Advice</span></li>
                </ul>
            </div>

        </div>
        
        </div>
    </div>

    <div class="parent-container43">
        <div class="check">
            <h2>Check Out Our Recent Work On Instagram</h2>
            <div class="insta">
                <a href="" target="_self" rel="noopener noreferrer">Follow Us On Instagram</a>
            </div>
        </div>
        <div class="container43">
            <div class="img16">
                <figure>
                    <img src={image16}></img>
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

    
    <div class="parent-container44">
        <div class="container44">
        
                <div class="find">
                    <h2>Find Your Soulmate Today</h2>
                </div>
                <p class="info30">Join The IndianWedding today and begin your search for a compatible life partner in the Indian community.</p>
                <div class="button11">
                    <a href="" target="_self" rel="noopener noreferrer" role="button" onClick={() => navigateTo('/contact')}>
                        <span>Join Now</span>
                    </a>
                </div>
        
        </div>
    </div>


    <div class="parent-container45">
    <div class="contact-container4">
        <div class="contact-item4">
            <h2>Phone</h2>
            <p>202-555-0188</p>
        </div>
        <div class="contact-item4">
            <h2>Follow Us</h2>
            <div class="social-icons4">
                <ul>
                    <li><a href="" target="blank"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="" target="blank"><i class="fab fa-instagram"></i></a></li>
                    <li><a href=""><i class="fab fa-youtube" target="blank"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="contact-item4">
            <h2>Email</h2>
            <p>contact@example.com</p>
        </div>
    </div>
    </div>
    
    
    
        
<div class="parent-container46">

    <nav class="container46">

            <ul id="info31">
                <li><a href="" onClick={() => navigateTo('/home')}>Home</a></li>
                <li><a href="" onClick={() => navigateTo('/about')}>About Us</a></li>
                <li><a href="" onClick={() => navigateTo('/services')}>Services</a></li>
                <li><a href=""onClick={() => navigateTo('/portfolio')}>Portfolio</a></li>
                <li><a href="" onClick={() => navigateTo('/testimonials')}>Testimonials</a></li>
                <li><a href="" onClick={() => navigateTo('/blog')}>Blog</a></li>
                <li><a href="" onClick={() => navigateTo('/contact')}>Contact</a></li>
            </ul>

    </nav>

</div>			
                      
                                

<div class="parent-container47">
	<div class="container47">
        <p>Copyright © 2024 theindianwedding</p>
    </div>			
</div>
    </div>
  )
}

export default Services