import React, { useState, useRef, useEffect } from 'react';
import './About.css'
import { useNavigate, useLocation } from "react-router-dom";
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
import image63 from '../img/user.png';

const About = () => {


    const navigateTo = useNavigate();
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
            <header class="header4">
                <h2 class="h2c"><a href="" onClick={() => navigateTo('/home')}>TheIndianWedding</a></h2>
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
                            src={profilePictureUrl ? profilePictureUrl : image63}
                            alt="Profile"
                            className="profile-picture1"
                            style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                        />
                        {dropdownOpen && (
                            <div className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
                                <button className="dropdown-item" onClick={() => handleEditProfile(profilePictureUrl)}>Edit Profile</button>
                                <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                            </div>
                        )}
                    </div>
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



                        <div class="count">
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
                        <li><a href="#" onClick={() => navigateTo('/portfolio')}>Portfolio</a></li>
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

export default About