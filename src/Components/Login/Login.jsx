import React, {useState} from 'react';
import './Login.css';
import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form';
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


const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit,  formState: { errors } } = useForm();
    
    const handleLogin = async (data) => {
        try {
          const response = await axios.post("https://nrimarriage.in/api/v1/users/Login", {
            email: data.Email,
            password: data.Password,
          });
      
          console.log('API Response:', response); // Log the full response
      
          if (response.status === 200 && response.data.token) {
            console.log('Token:', response.data.token); // Log the token
            localStorage.setItem('authToken', response.data.token);





            alert("Login Successful");
            navigate("/home");
          } else {
            alert("Login Failed");
          }
        } catch (err) {
          console.error("Login error:", err); // Log the error
          if (err.response && err.response.data && err.response.data.message) {
            alert(`Login failed: ${err.response.data.message}`);
          } else {
            alert("An error occurred during login. Please try again.");
          }
        }
      };
  
    return (
      <div className="body">
        <header className="header1">
          <h2 className="h2a"><a href="#">TheIndianWedding</a></h2>
          <div className="button4">
            <a href="#" onClick={() => navigate('/signup')}><span>Register Now</span></a>
          </div>
        </header>
  
        <div className="parent-container11">
          <div className="container11">
            <div>
              <h1>Connect with Your Perfect Match</h1>
            </div>
            <p>Find your life partner through our comprehensive profiles, matchmaking services, and tools.</p>
          </div>
  
          <div className="container2a">
            <div className="form1">
              <form onSubmit={handleSubmit(handleLogin)}>
                <h1>Login</h1>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="email" 
                  {...register('Email', { required: "Email required" })}
                />
                <p className="errors1">{errors.Email?.message}</p>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  {...register('Password', { required: "Password required" })}
                />
                <p className="errors1">{errors.Password?.message}</p>
                <button type="submit" className="login-button">
                  Login
                </button>
              </form>
  
              <NavLink to="/signup">Not yet registered? Register Now</NavLink>
            </div>
          </div>
        </div>

    <div className="parent-container12">
        <div className="container12">

            <div className="img3">
                <img loading="lazy" decoding="async"  sizes="(max-width: 480px) 150px" srcSet={image3} alt="img-3" className="" width="645" height="500" title="" role="img"></img>
            </div>
        
        
            <div className="about1">
                <h2>Our Story</h2>
                <p>The IndianWedding is committed to helping individuals within the Indian community find their soulmates. With a focus on compatibility and a deep understanding of cultural values, we strive to make the journey of finding love easier and more fulfilling.</p>
                <div className="hr"></div>
        
                <p className="info5">Follow Us</p>
                
                    <div className="social-menu">
                        <ul>
                            <li><a href="" target="blank"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="" target="blank"><i className="fab fa-instagram"></i></a></li>
                            <li><a href=""><i className="fab fa-youtube" target="blank"></i></a></li>
                        </ul>
                    </div>
            </div>
        </div>
      </div>


      <div className="parent-container13">
        <div className="container13">
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


      <div className="parent-container14">
        <div className="container14">
            <div>
                <h2>Find Your Perfect Match</h2>
            </div>
            <div>
                <p>Start your journey to a happy and fulfilled married life by joining The IndianWedding and finding your perfect match based on compatibility and shared values.</p>
                  
            </div>
        </div>
      </div>


      <div className="parent-container15">

        <div className="work1">
            <h2>Our Work</h2>
        </div>
        
      <div className="container15">


        <div className="img10">
            <figure>
            <img srcSet={image10} alt="img-10"></img>
            <figcaption>Destination Weddings</figcaption>
            </figure>
        </div>
        
        <div className="img11">
            <figure>
                <img srcSet={image11} alt="img-11"></img>
                    <figcaption>Engagements</figcaption>
            </figure>
        </div>
        
        <div className="img12">
            <figure>
                <img srcSet={image12} alt="img-12"></img>
                    <figcaption>Love Stories</figcaption>
            </figure>
        </div>
        
        <div className="img9">
            <figure>
                <img srcSet={image9} alt="img-9"></img>
                    <figcaption>Lifestyle</figcaption>
            </figure>
        </div>
        
        
        
        <div className="img8">
            <figure>
               <img srcSet={image8} alt="img-8"></img>
                <figcaption>Celebrations</figcaption>
            </figure>
        </div>
    
        
         
      </div>
      </div>

        
      <div className="couples1">
        <div>
            <h2>Happy Couples</h2>
        </div>
      </div> 
      
       
      <div className="parent-container16">
      <div className="batch4">

            <div className="star" title="5/5">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
        
            <div className="info6">
                <div>
                    <p className="message4">We are grateful to The IndianWedding for bringing us together. We found true love and a partner for life!</p>
                </div>
                <div className="img13">
                    <img srcSet={image13} alt="img-13"></img>
                </div>
                <p className="name4">Riya &amp; Arjun</p>
            </div>
      </div>
        
      <div className="batch5">
        
            <div className="star1" title="5/5">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
        
        
        
            <div className="info7">
                <div>
                    <p className="message5">The IndianWedding helped us find our soulmates. We couldn't be happier with our life partners!</p>
                </div>
                <div className="img14">
                        <img srcSet={image14} alt="img-14"></img>
                </div>
                    <p className="name5">Smita &amp; Deepak</p>
            </div>
      </div> 
        
      <div className="batch6">
            <div className="star2" title="5/5">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
        
        
        
            <div className="info8">
                <div>
                    <p className="message6">Thanks to The IndianWedding, we found true love and are excited to start our journey together as a married couple.</p>
                </div>
                <div className="img15">
                        <img srcSet={image15} alt="img-15"></img>
                </div>
                    <p className="name6">Pooja &amp; Rahul</p>
            </div>
    
      </div>
      </div> 

      <div className="parent-container17">
        <div className="check">
            <h2>Check Out Our Recent Work On Instagram</h2>
            <div className="insta">
                <a href="#" target="_self" rel="noopener noreferrer">Follow Us On Instagram</a>
            </div>
        </div>
        <div className="container17">
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


        <div className="parent-container18">
        <div className="container18">
        
                <div className="find">
                    <h2>Find Your Soulmate Today</h2>
                </div>
                <p className="info4">Join the 'TheIndianWedding' today and begin your search for a compatible life partner in the Indian community.</p>
               
        
        </div>
        </div>


      <div className="parent-container19">
      <div className="contact-container1">
        <div className="contact-item1">
            <h2>Phone</h2>
            <p>202-555-0188</p>
        </div>
        <div className="contact-item1">
            <h2>Follow Us</h2>
            <div className="social-icons1">
                <ul>
                    <li><a href="" target="blank"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="" target="blank"><i className="fab fa-instagram"></i></a></li>
                    <li><a href=""><i className="fab fa-youtube" target="blank"></i></a></li>
                </ul>
            </div>
        </div>
        <div className="contact-item1">
            <h2>Email</h2>
            <p>contact@example.com</p>
        </div>
      </div>
      </div>
                      
                                

<div className="parent-container20">
	<div className="container20">
        <p>Copyright © 2024 theindianwedding</p>
    </div>			
</div>	



</div>
  )
}

export default Login