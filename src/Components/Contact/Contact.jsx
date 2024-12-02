import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import './Contact.css'
import image16 from '../img/img-16.avif';
import image17 from '../img/img-17.jpg';
import image18 from '../img/img-18.avif';
import image19 from '../img/img-19.avif';
import image20 from '../img/img-20.jpg';
import image62 from '../img/img-62.jpg';
import MapComponent from '../Map/Map';
import Header from '../Header/Header'

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
            <Header />
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
                            <h1>Contact Us for Assistance and Inquiries</h1>
                        </div>



                        <div class="phone">
                            <h3>Phone</h3>
                            <p>+44 07737024736</p>

                            <div class="hr9"></div>
                        </div>



                        <div class="email">
                            <h3>Email</h3>
                            <p>paulfortuneltd@gmail.com</p>

                            <div class="hr10"></div>
                        </div>



                        <div class="address">
                            <h3>Address</h3>
                            <p>1121/A, 5th G Block, Further Extension, BDA Layout, Anjanapura, Bangalore 560108.</p>

                            <div class="hr11"></div>
                        </div>

                        <div class="social">
                            <h3 class="info53">Follow Us</h3>

                            <div className="social-menu10">
                                <ul>
                                    <li><a href="https://www.facebook.com/profile.php?id=61570002380672" target="_blank"><i className="fab fa-facebook"></i></a></li>
                                    <li><a href="https://www.instagram.com/nrimatch/profilecard/?igsh=c3NsdmJxdzZ0bGUx" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className='parent-container72'>
                <div class="form-container">
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


            <div className="parent-container702">
                <div className="check19">
                    <h2>Check Out Our Recent Work On Instagram</h2>
                </div>
                <div className="insta-contact">
                    <a href="https://www.instagram.com/nrimatch/profilecard/?igsh=c3NsdmJxdzZ0bGUx" target="blank" rel="noopener noreferrer">
                        Follow Us On Instagram
                    </a>
                </div>
                <div className="container702">
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


            <div className="parent-container803">
                <div className="container803 text-center">
                    <div className="find-contact mb-4">
                        <h2>Find Your Soulmate Today</h2>
                    </div>
                    <p className="info-contact">Join NRImatch today and begin your search for a compatible life partner in the Indian community.</p>
                </div>
            </div>


            <div class="parent-container519">
                <div class="contact-container519">
                    <div class="contact-item519">
                        <h2>Phone</h2>
                        <p>+44 07737024736</p>
                    </div>
                    <div class="contact-item519">
                        <h2>Follow Us</h2>
                        <div class="social-icons519">
                            <ul>
                                <li><a href="https://www.facebook.com/profile.php?id=61570002380672" target="blank"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/nrimatch/profilecard/?igsh=c3NsdmJxdzZ0bGUx" target="blank"><i class="fab fa-instagram"></i></a></li>
                                <li><a href=""><i class="fab fa-youtube" target="blank"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="contact-item519">
                        <h2>Email</h2>
                        <p>paulfortuneltd@gmail.com</p>
                    </div>
                </div>
            </div>




            <div class="parent-container553">

                <nav class="container553">

                    <ul id="info-contact">
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



            <div class="parent-container563">
                <div class="container563">
                    <p>Copyright © 2024 NRImatch</p>
                </div>
            </div>
        </div>
    )
}

export default Contact