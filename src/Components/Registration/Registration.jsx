import React, { useState } from 'react';
import './Registration.css';
import { useForm } from 'react-hook-form';
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import image3 from '../img/img-3.jpg';
import image4 from '../img/img-4.jpg';
import image5 from '../img/img-5.jpg';
import image6 from '../img/img-6.avif';
import image7 from '../img/img-7.avif';
import image8 from '../img/img-8.avif';
import image9 from '../img/img-9.avif';
import image10 from '../img/img-10.jpg';
import image11 from '../img/img-11.avif';
import image12 from '../img/img-12.avif';
import image13 from '../img/img-13.jpg';
import image14 from '../img/img-14.jpg';
import image15 from '../img/img-15.jpg';
import image16 from '../img/img-16.avif';
import image17 from '../img/img-17.jpg';
import image18 from '../img/img-18.avif';
import image19 from '../img/img-19.avif';
import image20 from '../img/img-20.jpg';




const Registration = () => {
    const navigateTo = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegistration = async (data) => {
        try {
            await axios.post("https://nrimarriage.in/api/v1/users/Registration", {
                FirstName: data.FirstName,
                LastName: data.LastName,
                Email: data.Email,
                Gender: data.Gender,
                DateOfBirth: data.DateOfBirth,
                PhoneNumber: data.PhoneNumber,
                Country: data.Country,
                Religion: data.Religion,
                Password: data.Password,
            });
            alert("Registered Successfully");
            navigateTo("/login");
        } catch (err) {
            alert(err.response?.data || "An error occurred during registration.");
        }
    }

    return (
        <div className='body'>
            <header className="header container-fluid">
                <div className="row align-items-center justify-content-between">
                    {/* <!-- Logo --> */}
                    <h1 className="website-title col-12 col-md-auto text-center text-md-left">
                        <a href="#">NRImatch</a>
                    </h1>


                    {/* <!-- Login Button --> */}
                    <div className="button col-12 col-md-auto text-center">
                        <a href="#" onClick={() => navigateTo('/login')}><span>Login</span></a>
                    </div>
                </div>
            </header>



            <div className="parent-container">
                <div className="containera">
                    <div>
                        <h1>Connect with Your Perfect Match</h1>
                    </div>
                    <p>Find your life partner through our comprehensive profiles, matchmaking services, and tools.</p>
                </div>

                <div className="container1a">
                    <div className="form">
                        <form onSubmit={handleSubmit(handleRegistration)}>
                            <h1>Create your account</h1>
                            <input
                                type="text"
                                name="fname"
                                id="fname"
                                placeholder="First Name"
                                {...register('FirstName', { required: true })}
                            />
                            <p className="errors">{errors.FirstName && "First Name is required"}</p>

                            <input
                                type="text"
                                name="lname"
                                id="lname"
                                placeholder="Last Name"
                                {...register('LastName', { required: true })}
                            />
                            <p className="errors">{errors.LastName && "Last Name is required"}</p>

                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                {...register('Email', { required: true })}
                            />
                            <p className="errors">{errors.Email && "Email is required"}</p>

                            {/* Gender Select */}
                            <select
                                name="gender"
                                id="gender"
                                {...register('Gender', { required: true })}
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            <p className="errors">{errors.Gender && "Gender is required"}</p>

                            <input
                                type="date"
                                name="dateofbirth"
                                id="dateofbirth"
                                placeholder="Date of Birth"
                                {...register('DateOfBirth', { required: true })}
                            />
                            <p className="errors">{errors.DateOfBirth && "Date of Birth is required"}</p>

                            <input
                                type="number"
                                name="number"
                                id="number"
                                placeholder="Phone Number"
                                {...register('PhoneNumber', { required: true })}
                            />
                            <p className="errors">{errors.PhoneNumber && "Phone Number is required"}</p>

                            {/* Country Select */}
                            <select
                                name="country"
                                id="country"
                                {...register('Country', { required: true })}
                            >
                                <option value="">Select Country</option>
                                <option value="USA">USA</option>
                                <option value="India">India</option>
                                <option value="UK">UK</option>
                                <option value="Canada">Canada</option>
                                <option value="Australia">Australia</option>
                            </select>
                            <p className="errors">{errors.Country && "Country is required"}</p>

                            {/* Religion Select */}
                            <select
                                name="religion"
                                id="religion"
                                {...register('Religion', { required: true })}
                            >
                                <option value="">Select Religion</option>
                                <option value="Christianity">Christianity</option>
                                <option value="Islam">Islam</option>
                                <option value="Hinduism">Hinduism</option>
                                <option value="Buddhism">Buddhism</option>
                                <option value="Other">Other</option>
                            </select>
                            <p className="errors">{errors.Religion && "Religion is required"}</p>

                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                autoComplete="current-password"
                                {...register('Password', { required: true })}
                            />
                            <p className="errors">{errors.Password && "Password is required"}</p>

                            <button type="submit" className="button1">
                                Register
                            </button>
                        </form>

                        <NavLink to="/login">Already registered? Login</NavLink>
                    </div>
                </div>
            </div>

            <div className="parent-container2">
                <div className="container2">
                    <div className="img3">
                        <img
                            loading="lazy"
                            decoding="async"
                            srcSet=""
                            sizes="(max-width: 480px) 150px"
                            src={image3}
                            alt="Our Story Image"
                            width="645"
                            height="500"
                            title="Our Story"
                            className="image-hover-focus"
                        />
                    </div>


                    <div className="about">
                        <h2>Our Story</h2>
                        <p>NRImatch is committed to helping individuals within the Indian community find their soulmates. With a focus on compatibility and a deep understanding of cultural values, we strive to make the journey of finding love easier and more fulfilling.</p>
                        <div className="hr"></div>
                        <p className="info">Follow Us</p>

                        <div className="social-menu1">
                            <ul>
                                <li><a href="https://www.facebook.com/profile.php?id=61570002380672" target="_blank"><i className="fab fa-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/nrimatch/" ><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container-fluid parent-container3 p-0">
                <div className="container3 text-center">
                    <h2>Our Services</h2>
                </div>

                <div className="img-stack d-flex justify-content-center">
                    <div className="img-stack-item">
                        <img src={image4} alt="Profiles" className="img-fluid" />
                        <h3>Profiles</h3>
                    </div>
                    <div className="img-stack-item">
                        <img src={image5} alt="Matchmaking" className="img-fluid" />
                        <h3>Matchmaking</h3>
                    </div>
                    <div className="img-stack-item">
                        <img src={image6} alt="Wedding Shopping" className="img-fluid" />
                        <h3>Wedding Shopping</h3>
                    </div>
                    <div className="img-stack-item">
                        <img src={image7} alt="Events" className="img-fluid" />
                        <h3>Events</h3>
                    </div>
                </div>
            </div>





            <div className="container-fluid">
                <div className="parent-container4 mx-4"> {/* Bootstrap mx-4 for side margins */}
                    <div className="container container4">
                        <div>
                            <h2>Find Your Perfect Match</h2>
                        </div>
                        <div>
                            <p>Start your journey to a happy and fulfilled married life by joining NRImatch and finding your perfect match based on compatibility and shared values.</p>
                        </div>
                    </div>
                </div>
            </div>





            <div className="parent-container5">
                <div className="work">
                    <h2>Our Work</h2>
                </div>

                <div className="container5 d-flex justify-content-center">
                    <div className="img10">
                        <figure>
                            <img srcSet={image10} alt="img-10" />
                            <figcaption>Destination Weddings</figcaption>
                        </figure>
                    </div>

                    <div className="img11">
                        <figure>
                            <img srcSet={image11} alt="img-11" />
                            <figcaption>Engagements</figcaption>
                        </figure>
                    </div>

                    <div className="img12">
                        <figure>
                            <img srcSet={image12} alt="img-12" />
                            <figcaption>Love Stories</figcaption>
                        </figure>
                    </div>

                    <div className="img8">
                        <figure>
                            <img srcSet={image8} alt="img-8" />
                            <figcaption>Celebrations</figcaption>
                        </figure>
                    </div>

                    <div className="img9">
                        <figure>
                            <img srcSet={image9} alt="img-9" />
                            <figcaption>Lifestyle</figcaption>
                        </figure>
                    </div>
                </div>
            </div>





            <div className="parent-container6">
                <div className="couples">
                    <h2>Happy Couples</h2>
                </div>

                <div className="batch1">
                    <div className="star" title="5/5">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>

                    <div className="info1">
                        <div>
                            <p className="message">We are grateful to NRImatch for bringing us together. We found true love and a partner for life!</p>
                        </div>
                        <div className="img13">
                            <img srcSet={image13} alt="img-13"></img>
                        </div>
                        <p className="name">Riya &amp; Arjun</p>
                    </div>
                </div>

                <div className="batch2">
                    <div className="star1" title="5/5">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>

                    <div className="info2">
                        <div>
                            <p className="message2"> NRImatch helped us find our soulmates. We couldn't be happier with our life partners!</p>
                        </div>
                        <div className="img14">
                            <img srcSet={image14} alt="img-14"></img>
                        </div>
                        <p className="name1">Smita &amp; Deepak</p>
                    </div>
                </div>

                <div className="batch3">
                    <div className="star2" title="5/5">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>

                    <div className="info3">
                        <div>
                            <p className="message3">Thanks to NRImatch, we found true love and are excited to start our journey together as a married couple.</p>
                        </div>
                        <div className="img15">
                            <img srcSet={image15} alt="img-15"></img>
                        </div>
                        <p className="name2">Pooja &amp; Rahul</p>
                    </div>
                </div>
            </div>



            <div className="parent-container711">
                <div className="check11">
                    <h2>Check Out Our Recent Work On Instagram</h2>
                </div>
                <div className="insta-reg">
                    <a href="https://www.instagram.com/nrimatch/" target="_self" rel="noopener noreferrer">
                        Follow Us On Instagram
                    </a>
                </div>
                <div className="container711">
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


            <div className="parent-container81">
                <div className="container81 text-center">
                    <div className="find1 mb-4">
                        <h2>Find Your Soulmate Today</h2>
                    </div>
                    <p className="info-reg">Join NRImatch today and begin your search for a compatible life partner in the Indian community.</p>
                </div>
            </div>


            <div class="parent-container9">
                <div class="contact-container1">
                    <div class="contact-item1">
                        <h2>Phone</h2>
                        <p>+447737024736</p>
                    </div>
                    <div class="contact-item1">
                        <h2>Follow Us</h2>
                        <div class="social-icons1">
                            <ul>
                                <li><a href="" target="blank"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/nrimatch/"><i class="fab fa-instagram"></i></a></li>
                                <li><a href=""><i class="fab fa-youtube" target="blank"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="contact-item1">
                        <h2>Email</h2>
                        <p>paulfortuneltd@gmail.com</p>
                    </div>
                </div>
            </div>




            {/* <div class="parent-container10">

    <nav class="container10">

            <ul id="info5">
                <li><a href="#" onClick={() => navigateTo('/home')}>Home</a></li>
                <li><a href="#" onClick={() => navigateTo('/about')}>About Us</a></li>
                <li><a href="#" onClick={() => navigateTo('/services')}>Services</a></li>
                <li><a href="#"onClick={() => navigateTo('/portfolio')}>Portfolio</a></li>
                <li><a href="#" onClick={() => navigateTo('/testimonials')}>Testimonials</a></li>
                <li><a href="#" onClick={() => navigateTo('/blog')}>Blog</a></li>
                <li><a href="#" onClick={() => navigateTo('/contact')}>Contact</a></li>
            </ul>

    </nav>

</div>			 */}



            <div class="parent-container11">
                <div class="container11">
                    <p>Copyright © 2024 NRImatch</p>
                </div>
            </div>
        </div>


    );
};
export default Registration