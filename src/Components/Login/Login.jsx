import React, {useState} from 'react';
import './Login.css';
import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form';
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


const Login = () => {
    const navigateTo = useNavigate();
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

            navigateTo("/home"); // Redirect to the home page
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
        <header className="header1 container-fluid">
        <div className="row align-items-center justify-content-between">
        <h1 className="website-title1 col-12 col-md-auto text-center text-md-left">
            <a href="#">NRImatch</a>
        </h1>
          <div className="button4 col-12 col-md-auto text-center">
            <a href="#" onClick={() => navigateTo('/signup')}><span>Register Now</span></a>
          </div>
          </div>
        </header>
  
        <div className="parent-container12">
          <div className="container12">
            <div>
              <h1>Connect with Your Perfect Match</h1>
            </div>
            <p>Find your life partner through our comprehensive profiles, matchmaking services, and tools.</p>
          </div>
  
          <div className="container12a">
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

        <div className="parent-container13">
    <div className="container13">
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


        <div className="about1">
            <h2>Our Story</h2>
            <p>NRImatch is committed to helping individuals within the Indian community find their soulmates. With a focus on compatibility and a deep understanding of cultural values, we strive to make the journey of finding love easier and more fulfilling.</p>
            <div className="hr1"></div>
            <p className="info6">Follow Us</p>
            
            <div className="social-menu2">
                <ul>
                    <li><a href="#" target="_blank"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-youtube"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>




<div className="container-fluid parent-container14 p-0">
    <div className="container14 text-center">
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
    <div className="parent-container15 mx-4"> {/* Bootstrap mx-4 for side margins */}
        <div className="container container15">
            <div>
                <h2>Find Your Perfect Match</h2>
            </div>
            <div>
                <p>Start your journey to a happy and fulfilled married life by joining NRImatch and finding your perfect match based on compatibility and shared values.</p>
            </div>
        </div>
    </div>
</div>





<div className="parent-container16">
    <div className="work">
        <h2>Our Work</h2>
    </div>

    <div className="container16 d-flex justify-content-center">
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





<div className="parent-container17">
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
                <p className="message2">NRImatch helped us find our soulmates. We couldn't be happier with our life partners!</p>
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



<div className="parent-container18">
  <div className="check12">
    <h2>Check Out Our Recent Work On Instagram</h2>
    </div>
    <div className="insta-log">
      <a href="#" target="_self" rel="noopener noreferrer">
        Follow Us On Instagram
      </a>
    </div>
  <div className="container18">
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


    <div className="parent-container19">
    <div className="container19 text-center">
        <div className="find2 mb-4"> 
            <h2>Find Your Soulmate Today</h2>
        </div>
        <p className="info-log">Join NRImatch today and begin your search for a compatible life partner in the Indian community.</p>
    </div>
    </div>


    <div class="parent-container20">
    <div class="contact-container20">
        <div class="contact-item20">
            <h2>Phone</h2>
            <p>202-555-0188</p>
        </div>
        <div class="contact-item20">
            <h2>Follow Us</h2>
            <div class="social-icons2">
                <ul>
                    <li><a href="" target="blank"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="" target="blank"><i class="fab fa-instagram"></i></a></li>
                    <li><a href=""><i class="fab fa-youtube" target="blank"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="contact-item20">
            <h2>Email</h2>
            <p>contact@example.com</p>
        </div>
    </div>
    </div>
    
    
    
        
{/* <div class="parent-container21">

    <nav class="container21">

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

</div>			 */}
                      
                                

<div class="parent-container22">
	<div class="container22">
        <p>Copyright © 2024 NRImatch</p>
    </div>			
</div> 



</div>
  )
}

export default Login