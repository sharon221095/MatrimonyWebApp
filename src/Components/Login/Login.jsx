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
          const response = await axios.post("http://13.126.188.208:5298/api/v1/users/Login", {
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
                  {...register('Email', { required: "Email required" })}
                />
                <p className="errors1">{errors.Email?.message}</p>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  {...register('Password', { required: "Password required" })}
                />
                <p className="errors1">{errors.Password?.message}</p>
                <button type="submit" className="login-button">
                  Login
                </button>
              </form>
  
              <NavLink to="/signup"><a>Not yet registered? Register Now</a></NavLink>
            </div>
          </div>
        </div>

    <div class="parent-container12">
        <div class="container12">

            <div class="img3">
                <img loading="lazy" decoding="async" srcset="" sizes="(max-width: 480px) 150px" src={image3} alt="img-3" class="" width="645" height="500" title="" role="img"></img>
            </div>
        
        
            <div class="about1">
                <h2>Our Story</h2>
                <p>The IndianWedding is committed to helping individuals within the Indian community find their soulmates. With a focus on compatibility and a deep understanding of cultural values, we strive to make the journey of finding love easier and more fulfilling.</p>
                <div class="hr"></div>
        
                <p class="info5">Follow Us</p>
                
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


      <div class="parent-container13">
        <div class="container13">
            <h2>Our Services</h2>
        </div>

        <div class="img-stack">
            <div class="img-stack1">
                <h3>Profiles</h3>
                {/* <a href="#"><span>Read More</span></a> */}
            </div>
            <div class="img-stack2">
                <h3>Matchmaking</h3>
                {/* <a href="#"><span>Read More</span></a> */}
            </div>
            <div class="img-stack3">
                <h3>Wedding Shopping</h3>
                {/* <a href="#"><span>Read More</span></a> */}
            </div>
            <div class="img-stack4">
                <h3>Events</h3>
                {/* <a href="#"><span>Read More</span></a> */}
            </div>
        </div> 
      </div>


      <div class="parent-container14">
        <div class="container14">
            <div>
                <h2>Find Your Perfect Match</h2>
            </div>
            <div>
                <p>Start your journey to a happy and fulfilled married life by joining The IndianWedding and finding your perfect match based on compatibility and shared values.</p>
                    {/* <a href="#" target="_self" rel="noopener noreferrer" onclick="return true;">
                        <span class="">Join Now</span>
                    </a> */}
            </div>
        </div>
      </div>


      <div class="parent-container15">

        <div class="work1">
            <h2>Our Work</h2>
        </div>
        
      <div class="container15">


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
    
        
        
        
        {/* <div class="portfolio1">
            <a  aria-label="" href="#" rel="follow noopener" target="_self" role="button">
                View Portfolio
            </a>
        </div> */}
         
      </div>
      </div>

        
      <div class="couples1">
        <div>
            <h2>Happy Couples</h2>
        </div>
      </div> 
      
       
      <div class="parent-container16">
      <div class="batch4">

            <div class="star" title="5/5">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
        
            <div class="info6">
                <div>
                    <p class="message4">We are grateful to The IndianWedding for bringing us together. We found true love and a partner for life!</p>
                </div>
                <div class="img13">
                    <img src={image13} alt="img-13"></img>
                </div>
                <p class="name4">Riya &amp; Arjun</p>
            </div>
      </div>
        
      <div class="batch5">
        
            <div class="star1" title="5/5">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
        
        
        
            <div class="info7">
                <div>
                    <p class="message5">The IndianWedding helped us find our soulmates. We couldn't be happier with our life partners!</p>
                </div>
                <div class="img14">
                        <img src={image14} alt="img-14"></img>
                </div>
                    <p class="name5">Smita &amp; Deepak</p>
            </div>
      </div> 
        
      <div class="batch6">
            <div class="star2" title="5/5">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
        
        
        
            <div class="info8">
                <div>
                    <p class="message6">Thanks to The IndianWedding, we found true love and are excited to start our journey together as a married couple.</p>
                </div>
                <div class="img15">
                        <img src={image15} alt="img-15"></img>
                </div>
                    <p class="name6">Pooja &amp; Rahul</p>
            </div>
    
      </div>
      </div> 

      <div class="parent-container17">
        <div class="check">
            <h2>Check Out Our Recent Work On Instagram</h2>
            <div class="insta">
                <a href="#" target="_self" rel="noopener noreferrer">Follow Us On Instagram</a>
            </div>
        </div>
        <div class="container17">
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


        <div class="parent-container18">
        <div class="container18">
        
                <div class="find">
                    <h2>Find Your Soulmate Today</h2>
                </div>
                <p class="info4">Join the 'TheIndianWedding' today and begin your search for a compatible life partner in the Indian community.</p>
                {/* <div class="button1">
                    <a href="#" target="_self" rel="noopener noreferrer" role="button">
                        <span>Join Now</span>
                    </a>
                </div> */}
        
        </div>
        </div>


      <div class="parent-container19">
      <div class="contact-container1">
        <div class="contact-item1">
            <h2>Phone</h2>
            <p>202-555-0188</p>
        </div>
        <div class="contact-item1">
            <h2>Follow Us</h2>
            <div class="social-icons1">
                <ul>
                    <li><a href="" target="blank"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="" target="blank"><i class="fab fa-instagram"></i></a></li>
                    <li><a href=""><i class="fab fa-youtube" target="blank"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="contact-item1">
            <h2>Email</h2>
            <p>contact@example.com</p>
        </div>
      </div>
      </div>
                      
                                

<div class="parent-container20">
	<div class="container20">
        <p>Copyright © 2024 theindianwedding</p>
    </div>			
</div>	



</div>
  )
}

export default Login