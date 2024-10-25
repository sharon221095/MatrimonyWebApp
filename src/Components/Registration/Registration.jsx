import React, {useState} from 'react';
import  './Registration.css';
import { useForm } from 'react-hook-form';
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import image3 from '../img/img-3.jpg';
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
            <h2 className="h2 col-auto"><a href="#">TheIndianWedding</a></h2>
        <div className="button col-auto">
            <a href="#" onClick={() => navigateTo('/login')}><span>Login In</span></a>
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

                            <input
                                type="text"
                                name="gender"
                                id="gender"
                                placeholder="Gender"
                                {...register('Gender', { required: true })}
                            />
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

                            <input
                                type="text"
                                name="country"
                                id="country"
                                placeholder="Country"
                                {...register('Country', { required: true })}
                            />
                            <p className="errors">{errors.Country && "Country is required"}</p>

                            <input
                                type="text"
                                name="religion"
                                id="religion"
                                placeholder="Religion"
                                autoComplete="off"
                                {...register('Religion', { required: true })}
                            />
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
            <img loading="lazy" decoding="async" srcSet="" sizes="(max-width: 480px) 150px" src={image3} alt="img-3" className="" width="645" height="500" title="" role="img" />
        </div>
    
        <div className="about">
            <h2>Our Story</h2>
            <p>The IndianWedding is committed to helping individuals within the Indian community find their soulmates. With a focus on compatibility and a deep understanding of cultural values, we strive to make the journey of finding love easier and more fulfilling.</p>
            <div className="hr"></div>
            <p className="info">Follow Us</p>
            
            <div className="social-menu">
                <ul>
                    <li><a href="" target="blank"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="" target="blank"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="" target="blank"><i className="fab fa-youtube"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>



      <div className="parent-container3">
        <div className="container3">
            <h2>Our Services</h2>
        </div>

        <div className="img-stack">
            <div className="img-stack1">
                <h3>Profiles</h3>
                
            </div>
            <div className="img-stack2">
                <h3>Matchmaking</h3>
               
            </div>
            <div className="img-stack3">
                <h3>Wedding Shopping</h3>
                
            </div>
            <div className="img-stack4">
                <h3>Events</h3>
                
            </div>
        </div> 
      </div>


      <div className="parent-container4">
        <div className="container4">
            <div>
                <h2>Find Your Perfect Match</h2>
            </div>
            <div>
                <p>Start your journey to a happy and fulfilled married life by joining The IndianWedding and finding your perfect match based on compatibility and shared values.</p>
            </div>
        </div>
      </div>


      <div className="parent-container5">
    <div className="work">
        <h2>Our Work</h2>
    </div>
    
    <div className="container5">
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
        
        <div className="img9">
            <figure>
                <img srcSet={image9} alt="img-9" />
                <figcaption>Lifestyle</figcaption>
            </figure>
        </div>
        
        <div className="img8">
            <figure>
                <img srcSet={image8} alt="img-8" />
                <figcaption>Celebrations</figcaption>
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
                <p className="message">We are grateful to The IndianWedding for bringing us together. We found true love and a partner for life!</p>
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
                <p className="message2">The IndianWedding helped us find our soulmates. We couldn't be happier with our life partners!</p>
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
                <p className="message3">Thanks to The IndianWedding, we found true love and are excited to start our journey together as a married couple.</p>
            </div>
            <div className="img15">
                <img srcSet={image15} alt="img-15"></img>
            </div>
            <p className="name2">Pooja &amp; Rahul</p>
        </div>
    </div>
</div>


      <div className="parent-container7">
        <div className="check">
            <h2>Check Out Our Recent Work On Instagram</h2>
            <div className="insta">
                <a href="#" target="_self" rel="noopener noreferrer">Follow Us On Instagram</a>
            </div>
        </div>
        <div className="container7">
            <div className="img16">
                <figure>
                    <img srcSet={image16} alt="img-16"></img>
                </figure>
            </div>
            <div className="img17">
                <figure>
                    <img srcSet={image17} alt="img-17"></img>
                </figure>
            </div>
            <div className="img18">
                <figure>
                    <img srcSet={image18} alt="img-18"></img>
                </figure>
            </div>
            <div className="img19">
                <figure>
                    <img srcSet={image19} alt="img-19"></img>
                </figure>
            </div>
            <div className="img20">
                <figure>
                    <img srcSet={image20} alt="img-20"></img>
                </figure>
            </div>
          </div>
        </div>


        <div className="parent-container8">
        <div className="container8">
        
                <div className="find">
                    <h2>Find Your Soulmate Today</h2>
                </div>
                <p className="info4">Join The IndianWedding today and begin your search for a compatible life partner in the Indian community.</p>
        
        </div>
        </div>


      <div className="parent-container9">
      <div className="contact-container">
        <div className="contact-item">
            <h2>Phone</h2>
            <p>202-555-0188</p>
        </div>
        <div className="contact-item">
            <h2>Follow Us</h2>
            <div className="social-icons">
                <ul>
                    <li><a href="#" target="blank"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="#" target="blank"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-youtube" target="blank"></i></a></li>
                </ul>
            </div>
        </div>
        <div className="contact-item">
            <h2>Email</h2>
            <p>contact@example.com</p>
        </div>
      </div>
      </div>
                      
                                

<div className="parent-container10">
	<div className="container10">
        <p>Copyright © 2024 theindianwedding</p>
    </div>			
</div>	



</div>
    
    
  );
};
export default Registration