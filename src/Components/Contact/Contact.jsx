import React, { useState, useRef, useEffect } from 'react';
import './Contact.css'
import { useNavigate, useLocation} from "react-router-dom";
import axios from "axios";
import image16 from '../img/img-16.avif';
import image17 from '../img/img-17.jpg';
import image18 from '../img/img-18.avif';
import image19 from '../img/img-19.avif';
import image20 from '../img/img-20.jpg';
import image62 from '../img/img-62.jpg';
import image63 from '../img/user.png';

const Contact = () => {

    const navigateTo= useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [profilePictureUrl, setProfilePictureUrl] = useState(null); // New state for profile picture
    const location = useLocation();



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
        <header class="header9">
        <h2 class="h2h"><a href="" onClick={() => navigateTo('/home')}>TheIndianWedding</a></h2>
        <nav>
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
        
        <div className="header-actions">
            <div className="profile-picture-container" onClick={toggleDropdown} ref={dropdownRef}>
                    <img
                        src={profilePictureUrl ? profilePictureUrl : image63 } 
                        alt="Profile"
                        className="profile-picture1"
                        style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                {dropdownOpen && (
                    <div className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={()=>handleEditProfile(profilePictureUrl)}>Edit Profile</button>
                        <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
            </div>
    </header>

    <div class="parent-container70">

        <div class="container70">

                <h1>Get in Touch</h1>
                <p>Reach out to us for any inquiries, feedback, or assistance regarding our services. We are here to help.</p>

        </div>

    </div>

    <div class="parent-container71">
        <div class="container71">

        <div class="img-62">
            <figure>
                <img src={image62} alt="img-62"></img>
            </figure>
        </div>
        
        
        
        <div class="patch13">

        <div class="info52">
            <h2>Contact Us for Assistance and Inquiries</h2>
        </div>
        
        
        
        <div class="phone">
            <p>Phone</p>
            <h3>202-555-0188</h3>

            <div class="hr"></div>
        </div>
        
        
        
        <div class="email">
            <p>Email</p>
            <h3>contact@example.com</h3>

            <div class="hr1"></div>
        </div>
        
        
        
        <div class="address">
            <p>Address</p>
            <h3>2360 Hood Avenue, San Diego, CA, 92123</h3>

            <div class="hr2"></div>
        </div>

        <div class="social">
            <p class="info53">Follow Us</p>

            <div class="social-menu2">
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

<div class="parent-container72">

    <div class="form-container">
        <h1>Send Us a Message</h1>
        <p>Fill out the form below to reach our team. We will respond to your inquiry promptly.</p>
        <form>
            <div class="form-group">
                <input type="text" id="first-name" name="first-name" placeholder="First Name"></input>
                <input type="text" id="last-name" name="last-name" placeholder="Last Name"></input>
            </div>
            <div class="form-group">
                <input type="email" id="email" name="email" placeholder="Email Address"></input>
            </div>
            <div class="form-group">
                <input type="tel" id="phone" name="phone" placeholder="Phone"></input>
            </div>
            <div class="form-group">
                <textarea id="message" name="message" placeholder="Type Your Message..."></textarea>
            </div>
            <div class="button19">
                <a href="" target="_self" rel="noopener noreferrer" role="button">
                    <span>Submit</span>
                </a>
            </div>
    
        </form>
    </div>


    <div class="map">
        <embed title="Google Map for " src="https://maps.google.com/maps?q=Brainstorm%20Force&amp;z=12&amp;hl=en&amp;t=m&amp;output=embed&amp;iwloc=near" width="640" height="550" loading="lazy"></embed>
    </div>

</div>


 <div className="parent-container7">
  <div className="check1">
    <h2>Check Out Our Recent Work On Instagram</h2>
    </div>
    <div className="insta1">
      <a href="#" target="_self" rel="noopener noreferrer">
        Follow Us On Instagram
      </a>
    </div>
  <div className="container7">
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


    <div className="parent-container8">
    <div className="container8 text-center">
        <div className="find mb-4"> 
            <h2>Find Your Soulmate Today</h2>
        </div>
        <p className="info4">Join The IndianWedding today and begin your search for a compatible life partner in the Indian community.</p>
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

export default Contact