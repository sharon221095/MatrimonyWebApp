import React, { useState, useRef, useEffect } from 'react';
import './Portfolio.css'
import { useNavigate, useLocation} from "react-router-dom";
import axios from "axios";
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
import image63 from '../img/user.png';

const Portfolio = () => {

    const navigateTo= useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [profilePictureUrl, setProfilePictureUrl] = useState(null); // New state for profile picture
    const location = useLocation();
    const [navVisible, setNavVisible] = useState(false);



     /* =========================
       Profile Picture Handling
    ========================= */

    const fetchProfilePicture = async () => {
        try {
            const response = await axios.get('https://nrimarriage.in/api/v1/users/GetProfileImage', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
                },
                responseType: 'arraybuffer',
            });
    
            // Convert binary data to base64 string
            const base64Image = btoa(
                new Uint8Array(response.data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
            );
    
            // Construct a data URL for the image
            const imageUrl = `data:image/png;base64,${base64Image}`;
            setProfilePictureUrl(imageUrl);
        } catch (error) {
            // Check if error response exists and is a 404 error
            if (error.response && error.response.status === 404) {
                console.log('No profile picture found, setting to default image.');
                setProfilePictureUrl(image63); // Set image63 as the default image
            } else {
                console.error('Error fetching profile picture:', error);
            }
        }
    };
    
    /* =======================
       Lifecycle Effects
    ======================= */

    useEffect(() => {
        fetchProfilePicture(); // Fetch profile picture on component mount
    }, []);

    const handleEditProfile = (data) => {
        // Navigate to the profile edit page with data
        navigateTo('/profile', { state: { data } });
    };

    const handleLogout = () => {
        // Clear auth token and navigate to login page
        localStorage.removeItem('authToken');
        navigateTo('/login');
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleNav = () => {
        setNavVisible(!navVisible); // Toggle the nav visibility
      };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

  return (
    <div className='body'>
        <header class="header6">
        <h1 className="website-title5 col-12 col-md-auto text-left text-md-left">
            <a href="#">NRImatch</a>
            </h1>

        <nav className={navVisible ? 'visible' : 'hidden'}>
                <ul>
                    <li>
                        <a
                            href="/home"
                            onClick={() => navigateTo('/home')}
                            className={location.pathname === '/home' ? 'active' : ''}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            onClick={() => navigateTo('/about')}
                            className={location.pathname === '/about' ? 'active' : ''}
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="/services"
                            onClick={() => navigateTo('/services')}
                            className={location.pathname === '/services' ? 'active' : ''}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="/portfolio"
                            onClick={() => navigateTo('/portfolio')}
                            className={location.pathname === '/portfolio' ? 'active' : ''}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a
                            href="/testimonials"
                            onClick={() => navigateTo('/testimonials')}
                            className={location.pathname === '/testimonials' ? 'active' : ''}
                        >
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a
                            href="/blog"
                            onClick={() => navigateTo('/blog')}
                            className={location.pathname === '/blog' ? 'active' : ''}
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            onClick={() => navigateTo('/contact')}
                            className={location.pathname === '/contact' ? 'active' : ''}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        
       
        
            <div className="profile-picture-container4" onClick={toggleDropdown} ref={dropdownRef}>
                    <img
                        src={profilePictureUrl ? profilePictureUrl : image63 } 
                        alt="Profile"
                        className="profile-picture4"
                    />
                {dropdownOpen && (
                    <div className="dropdown-menu4 show" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item4" onClick={()=>handleEditProfile(profilePictureUrl)}>Edit Profile</button>
                        <button className="dropdown-item4" onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
            
             {/* Toggle Button for Mobile */}
         <button className="nav-toggle4" onClick={toggleNav} aria-label="Toggle Navigation">
          ☰
        </button>


    </header>

    <div class="parent-container48">

        <div class="container48">

                <h1>Love Stories in Pictures</h1>
                <p>Explore the magical journey of couples who found their perfect match through NRImatch. Browse through our collection of wedding photos and get inspired for your own special day.</p>

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
                    <p class="message4">We cannot thank NRImatch enough for bringing us together. We are grateful for this platform that made our dreams come true.</p>
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
                    <p class="message5">NRImatch introduced us to our soulmates. We are forever indebted to this amazing service. Thank you!</p>
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
                    <p class="message6">Thanks to NRImatch, we found love in the most unexpected way. We are forever grateful for this platform.</p>
                </div>
                <div class="img-53">
                    <img src={image53} alt="img-53"></img>
                </div>
                <p class="name6">Neha &amp; Arjun</p>
            </div>

        </div>
    </div>


    <div className="parent-container790">
  <div className="check16">
    <h2>Check Out Our Recent Work On Instagram</h2>
    </div>
    <div className="insta-portfolio">
      <a href="https://www.instagram.com/nrimatch/profilecard/?igsh=c3NsdmJxdzZ0bGUx" target="blank" rel="noopener noreferrer">
        Follow Us On Instagram
      </a>
    </div>
  <div className="container790">
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


    <div className="parent-container800">
    <div className="container800 text-center">
        <div className="find-portfolio mb-4"> 
            <h2>Find Your Soulmate Today</h2>
        </div>
        <p className="info-portfolio">Join NRImatch today and begin your search for a compatible life partner in the Indian community.</p>
    </div>
    </div>


    <div class="parent-container570">
    <div class="contact-container570">
        <div class="contact-item570">
            <h2>Phone</h2>
            <p>+44 07737024736</p>
        </div>
        <div class="contact-item570">
            <h2>Follow Us</h2>
            <div class="social-icons570">
                <ul>
                    <li><a href="https://www.facebook.com/profile.php?id=61570002380672" target="blank"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/nrimatch/profilecard/?igsh=c3NsdmJxdzZ0bGUx" target="blank"><i class="fab fa-instagram"></i></a></li>
                    <li><a href=""><i class="fab fa-youtube" target="blank"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="contact-item570">
            <h2>Email</h2>
            <p>paulfortuneltd@gmail.com</p>
        </div>
    </div>
    </div>
    
    
    
        
<div class="parent-container559">

    <nav class="container559">

            <ul id="info-portfolio">
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
                      
                                

<div class="parent-container569">
	<div class="container569">
        <p>Copyright © 2024 NRImatch</p>
    </div>			
</div> 

        

    </div>
  )
}

export default Portfolio