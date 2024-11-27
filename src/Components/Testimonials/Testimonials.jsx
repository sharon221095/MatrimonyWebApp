import React, { useState, useRef, useEffect } from 'react';
import './Testimonials.css'
import { useNavigate, useLocation} from "react-router-dom";
import axios from "axios";
import image16 from '../img/img-16.avif';
import image17 from '../img/img-17.jpg';
import image18 from '../img/img-18.avif';
import image19 from '../img/img-19.avif';
import image20 from '../img/img-20.jpg';
import image54 from '../img/img-54.jpg';
import image55 from '../img/img-55.avif';
import image56 from '../img/img-56.jpg';
import image57 from '../img/img-57.avif';
import image58 from '../img/img-58.avif';
import image59 from '../img/img-59.jpg';
import image60 from '../img/img-60.jpg';
import image61 from '../img/img-61.jpg';
import image63 from '../img/user.png';


const Testimonials = () => {

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

        <header class="header7">
        <h1 className="website-title6 col-12 col-md-auto text-left text-md-left">
            <a href="#">NRImarriage</a>
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
        
        
        
            <div className="profile-picture-container5" onClick={toggleDropdown} ref={dropdownRef}>
                    <img
                        src={profilePictureUrl ? profilePictureUrl : image63 } 
                        alt="Profile"
                        className="profile-picture5"
                       
                    />
                {dropdownOpen && (
                    <div className="dropdown-menu5 show" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item5" onClick={()=>handleEditProfile(profilePictureUrl)}>Edit Profile</button>
                        <button className="dropdown-item5" onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>


            {/* Toggle Button for Mobile */}
         <button className="nav-toggle5" onClick={toggleNav} aria-label="Toggle Navigation">
          ☰
        </button>

            
    </header>

    <div class="parent-container57">

        <div class="container57">

                <h1>Happily Ever Afters</h1>
                <p>Read what our happy couples have to say about their experience with the 'NRImarriage'. Their stories will make you believe in the power of true love.</p>

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
                    <p>We are grateful to the 'NRImarriage' for bringing us together. We found true love and a partner for life!</p>
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
                    <p>The 'NRImarriage' helped us find our soulmates. We couldn’t be happier with our life partners!</p>
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
                        <p class="message7">We are grateful to the 'NRImarriage' for bringing us together. We found true love and a partner for life!</p>
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
                        <p class="message8">The 'NRImarriage' helped us find our soulmates. We couldn't be happier with our life partners!</p>
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
                        <p class="message10">Thanks to NRImarriage, we found love in the most unexpected way. We are forever grateful for this platform.</p>
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
                        <p class="message11">We had almost given up hope until we came across the 'NRImarriage'. It truly works wonders. Highly recommended!</p>
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
      <a href="#" target="_self" rel="noopener noreferrer">
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
        <p className="info-testimonials">Join NRImarriage today and begin your search for a compatible life partner in the Indian community.</p>
    </div>
    </div>


    <div class="parent-container504">
    <div class="contact-container504">
        <div class="contact-item504">
            <h2>Phone</h2>
            <p>202-555-0188</p>
        </div>
        <div class="contact-item504">
            <h2>Follow Us</h2>
            <div class="social-icons504">
                <ul>
                    <li><a href="" target="blank"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="" target="blank"><i class="fab fa-instagram"></i></a></li>
                    <li><a href=""><i class="fab fa-youtube" target="blank"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="contact-item504">
            <h2>Email</h2>
            <p>contact@example.com</p>
        </div>
    </div>
    </div>
    
    
    
        
<div class="parent-container551">

    <nav class="container551">

            <ul id="info-testimonials">
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
                      
                                

<div class="parent-container561">
	<div class="container561">
        <p>Copyright © 2024 NRImarriage</p>
    </div>			
</div> 
    </div>
  )
}

export default Testimonials