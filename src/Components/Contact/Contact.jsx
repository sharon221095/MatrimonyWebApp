import React, { useEffect, useState } from 'react'
import { useNavigate, NavLink } from "react-router-dom";
import emailjs from '@emailjs/browser';


import './Contact.css'
import image16 from '../img/img-16.avif';
import image17 from '../img/img-17.jpg';
import image18 from '../img/img-18.avif';
import image19 from '../img/img-19.avif';
import image20 from '../img/img-20.jpg';
import image62 from '../img/img-62.jpg';
import MapComponent from '../Map/Map';

const Contact = () => {

    const navigateTo = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.init("NOhjCeVRRloMXTyKp"); // Initialize EmailJS with your public key

        emailjs.send("service_qd1vk69", "template_k23t2np", {
            to_name: 'Mrs. Cecily',
            from_name: formData.email, // Match the placeholder in your template
            message: formData.message,
        })
            .then((response) => {
                alert('Email sent successfully!');
                console.log("Email sent:", response);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: '',
                });
            })
            .catch((error) => {
                alert('Failed to send email. Please try again later.');
                console.error('Failed...', error);
            });
    };

    return (

        <div className='body'>
            <header class="header9">
                <h2 class="h2h"><a href="" onClick={() => navigateTo('/home')}>TheIndianWedding</a></h2>
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
                <div class="button18">
                    <a href="" onClick={() => navigateTo('/contact')}><span>Join Us</span></a>
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

            <div class="hr3"></div>

            <div className="parent-container72">
                <div className="form-and-map-container">
                    <div className="form-container">
                        <h1>Send Us a Message</h1>
                        <p>Fill out the form below to reach our team. We will respond to your inquiry promptly.</p>
                        <form onSubmit={sendEmail}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="first-name"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    id="last-name"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Type Your Message..."
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div class="button19">
                                <a href="" target="_self" rel="noopener noreferrer" role="button">
                                    <span>Submit</span>
                                </a>
                            </div>
                        </form>
                    </div>

                    <MapComponent />
                </div>
            </div>



            <div class="parent-container73">
                <div class="check">
                    <h2>Check Out Our Recent Work On Instagram</h2>
                    <div class="insta">
                        <a href="" target="_self" rel="noopener noreferrer">Follow Us On Instagram</a>
                    </div>
                </div>
                <div class="container73">
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


            <div class="parent-container74">
                <div class="container74">

                    <div class="find">
                        <h2>Find Your Soulmate Today</h2>
                    </div>
                    <p class="info54">Join The IndianWedding today and begin your search for a compatible life partner in the Indian community.</p>
                    <div class="button20">
                        <a href="" target="_self" rel="noopener noreferrer" role="button" onClick={() => navigateTo('/contact')}>
                            <span>Join Now</span>
                        </a>
                    </div>

                </div>
            </div>


            <div class="parent-container75">
                <div class="contact-container8">
                    <div class="contact-item8">
                        <h2>Phone</h2>
                        <p>202-555-0188</p>
                    </div>
                    <div class="contact-item8">
                        <h2>Follow Us</h2>
                        <div class="social-icons8">
                            <ul>
                                <li><a href="" target="blank"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="" target="blank"><i class="fab fa-instagram"></i></a></li>
                                <li><a href=""><i class="fab fa-youtube" target="blank"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="contact-item8">
                        <h2>Email</h2>
                        <p>contact@example.com</p>
                    </div>
                </div>
            </div>




            <div class="parent-container76">

                <nav class="container76">

                    <ul id="info55">
                        <li><a href="" onClick={() => navigateTo('/home')}>Home</a></li>
                        <li><a href="" onClick={() => navigateTo('/about')}>About Us</a></li>
                        <li><a href="" onClick={() => navigateTo('/services')}>Services</a></li>
                        <li><a href="" onClick={() => navigateTo('/portfolio')}>Portfolio</a></li>
                        <li><a href="" onClick={() => navigateTo('/testimonials')}>Testimonials</a></li>
                        <li><a href="" onClick={() => navigateTo('/blog')}>Blog</a></li>
                        <li><a href="" onClick={() => navigateTo('/contact')}>Contact</a></li>
                    </ul>

                </nav>

            </div>



            <div class="parent-container77">
                <div class="container77">
                    <p>Copyright © 2024 theindianwedding</p>
                </div>
            </div>
        </div>
    )
}

export default Contact