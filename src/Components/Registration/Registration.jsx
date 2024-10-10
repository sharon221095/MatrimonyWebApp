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
            await axios.post("http://13.126.188.208:5298/api/v1/users/Registration", {
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
            <header className="header">
                <h2 className="h2"><a href="#">TheIndianWedding</a></h2>
                <div className="button">
                    <a href="#" onClick={() => navigateTo('/login')}><span>Login In</span></a>
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
                                {...register('Religion', { required: true })}
                            />
                            <p className="errors">{errors.Religion && "Religion is required"}</p>

                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
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

    <div class="parent-container2">
        <div class="container2">

            <div class="img3">
                <img loading="lazy" decoding="async" srcset="" sizes="(max-width: 480px) 150px" src={image3} alt="img-3" class="" width="645" height="500" title="" role="img"></img>
            </div>
        
        
            <div class="about">
                <h2>Our Story</h2>
                <p>The IndianWedding is committed to helping individuals within the Indian community find their soulmates. With a focus on compatibility and a deep understanding of cultural values, we strive to make the journey of finding love easier and more fulfilling.</p>
                <div class="hr"></div>
              
                <p class="info">Follow Us</p>
                
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


      <div class="parent-container3">
        <div class="container3">
            <h2>Our Services</h2>
        </div>

        <div class="img-stack">
            <div class="img-stack1">
                <h3>Profiles</h3>
                
            </div>
            <div class="img-stack2">
                <h3>Matchmaking</h3>
               
            </div>
            <div class="img-stack3">
                <h3>Wedding Shopping</h3>
                
            </div>
            <div class="img-stack4">
                <h3>Events</h3>
                
            </div>
        </div> 
      </div>


      <div class="parent-container4">
        <div class="container4">
            <div>
                <h2>Find Your Perfect Match</h2>
            </div>
            <div>
                <p>Start your journey to a happy and fulfilled married life by joining The IndianWedding and finding your perfect match based on compatibility and shared values.</p>
            </div>
        </div>
      </div>


      <div class="parent-container5">

        <div class="work">
            <h2>Our Work</h2>
        </div>
        
      <div class="container5">


        <div class="img10">
            <figure>
            <img src={image10} alt="img-10"></img>
            <figcaption>Destination Weddings</figcaption>
            </figure>
        </div>
        
        <div class="img11">
            <figure>
                <img src={image11} alt="img-11"></img>
                    <figcaption>Engagements</figcaption>
            </figure>
        </div>
        
        <div class="img12">
            <figure>
                <img src={image12} alt="img-12"></img>
                    <figcaption>Love Stories</figcaption>
            </figure>
        </div>
        
        <div class="img9">
            <figure>
                <img src={image9} alt="img-9"></img>
                    <figcaption>Lifestyle</figcaption>
            </figure>
        </div>
        
        
        
        <div class="img8">
            <figure>
               <img src={image8} alt="img-8"></img>
                <figcaption>Celebrations</figcaption>
            </figure>
        </div>
    
         
      </div>
      </div>

        
      <div class="couples">
        <div>
            <h2>Happy Couples</h2>
        </div>
      </div> 
      
       
      <div class="parent-container6">
      <div class="batch1">

            <div class="star" title="5/5">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
        
            <div class="info1">
                <div>
                    <p class="message">We are grateful to The IndianWedding for bringing us together. We found true love and a partner for life!</p>
                </div>
                <div class="img13">
                    <img src={image13} alt="img-13"></img>
                </div>
                <p class="name">Riya &amp; Arjun</p>
            </div>
      </div>
        
      <div class="batch2">
        
            <div class="star1" title="5/5">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
        
        
        
            <div class="info2">
                <div>
                    <p class="message2">The IndianWedding helped us find our soulmates. We couldn't be happier with our life partners!</p>
                </div>
                <div class="img14">
                        <img src={image14} alt="img-14"></img>
                </div>
                    <p class="name1">Smita &amp; Deepak</p>
            </div>
      </div> 
        
      <div class="batch3">
            <div class="star2" title="5/5">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
        
        
        
            <div class="info3">
                <div>
                    <p class="message3">Thanks to The IndianWedding, we found true love and are excited to start our journey together as a married couple.</p>
                </div>
                <div class="img15">
                        <img src={image15} alt="img-15"></img>
                </div>
                    <p class="name2">Pooja &amp; Rahul</p>
            </div>
    
      </div>
      </div> 

      <div class="parent-container7">
        <div class="check">
            <h2>Check Out Our Recent Work On Instagram</h2>
            <div class="insta">
                <a href="#" target="_self" rel="noopener noreferrer">Follow Us On Instagram</a>
            </div>
        </div>
        <div class="container7">
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


        <div class="parent-container8">
        <div class="container8">
        
                <div class="find">
                    <h2>Find Your Soulmate Today</h2>
                </div>
                <p class="info4">Join The IndianWedding today and begin your search for a compatible life partner in the Indian community.</p>
        
        </div>
        </div>


      <div class="parent-container9">
      <div class="contact-container">
        <div class="contact-item">
            <h2>Phone</h2>
            <p>202-555-0188</p>
        </div>
        <div class="contact-item">
            <h2>Follow Us</h2>
            <div class="social-icons">
                <ul>
                    <li><a href="#" target="blank"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#" target="blank"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-youtube" target="blank"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="contact-item">
            <h2>Email</h2>
            <p>contact@example.com</p>
        </div>
      </div>
      </div>
                      
                                

<div class="parent-container10">
	<div class="container10">
        <p>Copyright © 2024 theindianwedding</p>
    </div>			
</div>	



</div>
    
    
  );
};
export default Registration