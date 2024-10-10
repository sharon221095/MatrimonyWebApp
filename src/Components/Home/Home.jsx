import React, { useState,  useEffect, useRef } from 'react';
import './Home.css'
import { useForm } from 'react-hook-form';
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import image1 from '../img/img-1.webp';
import image2 from '../img/img-2.jpg';
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
import image63 from '../img/user.png';

const Home = () => {
    const navigateTo = useNavigate();
    const [profile, setProfile] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [error, setError] = useState('');
    const [searchCriteria, setSearchCriteria] = useState({
        minAge: '',
        maxAge: '',
        minHeight: '',
        maxHeight: '',
        caste:'',
        preferredPartnerReligion: '',
        gender: '',
        maritalStatus:'',
        preferredpartnerLocation:'',
        minSalary:'',
        maxSalary:'',
        motherTongue:'',
        occupation:'',
        education: ''
    });
    const [searchResults, setSearchResults] = useState([]);
    const dropdownRef = useRef(null);


    const handleViewProfile = (id) => {
        // Navigate to the profile page using the user ID
        navigateTo(`/profile/${id}`); // Adjust the route as needed
    };

   
    // Fetch profile data
    const fetchProfile = async () => {
        try {
            const response = await axios.get('http://13.126.188.208:5298/api/v1/users/Profile', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
                },
            });
            setProfile(response.data);
        } catch (error) {
            console.error('Error fetching profile:', error);
            if (error.response && error.response.status === 401) {
                navigateTo('/login');
            }
        }
    };

    useEffect(() => {
        fetchProfile();
    }, [navigateTo]);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigateTo('/login');
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleEditProfile = () => {
        navigateTo('/profile');
    };


    const handleSearchChange = (e) => {
        setSearchCriteria({
            ...searchCriteria,
            [e.target.name]: e.target.value,
        });
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://13.126.188.208:5298/api/v1/Users/SearchProfiles',
                searchCriteria,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
                    },
                }
            );
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

     // Close dropdown if clicked outside
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
            <header className="header3">
                <h2 className="h2b"><a href="">TheIndianWedding</a></h2>
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

                <div className="header-actions">
                   <div className="profile-picture-container" onClick={() => setDropdownOpen(!dropdownOpen)} ref={dropdownRef}>
                    {profile && profile.ProfilePictureUrl ? (
                    <img src={profile.ProfilePictureUrl} alt="Profile" className="profile-picture1" />
                    ) : (
                    <img src={image63} alt="Profile" className="profile-picture1" />
                    )}
                    {dropdownOpen && (
                    <div className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={handleEditProfile}>Edit Profile</button>
                        <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                    </div>
                    )}
                  </div>
                </div>
            </header>


             
             <form onSubmit={handleSearchSubmit} className="search-form">
                <h2>Search Profiles</h2>
                <div className="search-fields">
                {error && <div className="alert alert-danger">{error}</div>}
                    <div className="search-field">
                        <label>Min Age:</label>
                        <input
                            type="number"
                            name="minAge"
                            value={searchCriteria.minAge}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Max Age:</label>
                        <input
                            type="number"
                            name="maxAge"
                            value={searchCriteria.maxAge}
                            onChange={handleSearchChange}
                        />
                    </div>
                     <div className="search-field">
                        <label>Min Height:</label>
                        <input
                            type="number"
                            name="minHeight"
                            value={searchCriteria.minHeight}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Max Height:</label>
                        <input
                            type="number"
                            name="maxHeight"
                            value={searchCriteria.maxHeight}
                            onChange={handleSearchChange}
                        />
                    </div> 
                     <div className="search-field">
                        <label>Caste:</label>
                        <input
                            type="text"
                            name="caste"
                            value={searchCriteria.caste}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Religion:</label>
                        <input
                            type="text"
                            name="preferredPartnerReligion"
                            value={searchCriteria.preferredPartnerReligion}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Gender:</label>
                        <input
                            type="text"
                            name="gender"
                            value={searchCriteria.gender}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Marital Status:</label>
                        <input
                            type="text"
                            name="maritalStatus"
                            value={searchCriteria.maritalStatus}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Preferred Partner Location:</label>
                        <input
                            type="text"
                            name="preferredPartnerLocation"
                            value={searchCriteria.preferredPartnerLocation}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Min Salary:</label>
                        <input
                            type="number"
                            name="minSalary"
                            value={searchCriteria.minSalary}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Max Salary:</label>
                        <input
                            type="number"
                            name="maxSalary"
                            value={searchCriteria.maxSalary}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Mother Tongue:</label>
                        <input
                            type="text"
                            name="motherTongue"
                            value={searchCriteria.motherTongue}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Occupation:</label>
                        <input
                            type="text"
                            name="occupation"
                            value={searchCriteria.occupation}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Education:</label>
                        <input
                            type="text"
                            name="education"
                            value={searchCriteria.education}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                <button type="submit">Search</button>
            </form>

            <div className="search-results">
    {searchResults.length > 0 ? (
        <div className="row justify-content-center">
            {searchResults.map((result) => (
                <div key={result.id} className="profile-card col-2 mb-4"> {/* Use col-2 for 5 cards in a row */}
                    <div className="card">
                        <img
                            src={result.profilePictureUrl || image63}
                            alt={`${result.firstName} ${result.lastName} Profile`}
                            className="profile-card-img" // Updated class
                        />
                        <div className="card-body text-center"> {/* Center text */}
                            <h5 className="card-title">{result.firstName} {result.lastName}</h5>
                            <p className="card-text">Age: {result.age}</p>
                            <p className="card-text">Height: {result.height} cm</p>
                            <p className="card-text">Religion: {result.religion}</p>
                            <p className="card-text">Gender: {result.gender}</p>
                            <button 
                                className="btn-custom" // Use the custom button class
                                onClick={() => handleViewProfile(result.id)}
                            >
                            View Profile
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    ) : (
        <p className="text-center">No profiles found.</p>
    )}
</div>




    
    <div class="parent-container21">
        <div class="container21">
            <div>
                <h1>Connect with Your Perfect Match</h1>
            </div>
            <p>Find your life partner through our comprehensive profiles, matchmaking services, and tools.</p>
            <div>
                <a href="" onClick={() => navigateTo('/contact')}><span>Join Now</span></a>
            </div>
        </div>
        <div class="image-section">
            <img src={image1} alt="img-1" class="image-1"></img>
            <img src={image2} alt="img-2" class="image-2"></img>
        </div>
    </div>


    <div class="parent-container22">
        <div class="container22">

            <div class="img3">
                <img loading="lazy" decoding="async" srcset="" sizes="(max-width: 480px) 150px" src={image3} alt="img-3" class="" width="645" height="500" title="" role="img"></img>
            </div>
        
        
            <div class="about2">
                <h2>Our Story</h2>
                <p>The <b>'TheIndianWedding'</b> is committed to helping individuals within the Indian community find their soulmates. With a focus on compatibility and a deep understanding of cultural values, we strive to make the journey of finding love easier and more fulfilling.</p>
                <div class="hr"></div>
                <div class="button6">
                    <a href="" onClick={() => navigateTo('/about')}><span>Read More</span></a>
                </div>
                <p class="info9">Follow Us</p>
                
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

<div class="parent-container23">
        <div class="container23">
            <h2>Our Services</h2>
        </div>

        <div class="img-stack">
            <div class="img-stack1">
                <h3>Profiles</h3>
                <a href="" onClick={() => navigateTo('/services')}><span>Read More</span></a>
            </div>
            <div class="img-stack2">
                <h3>Matchmaking</h3>
                <a href="" onClick={() => navigateTo('/services')}><span>Read More</span></a>
            </div>
            <div class="img-stack3">
                <h3>Wedding Shopping</h3>
                <a href="" onClick={() => navigateTo('/services')}><span>Read More</span></a>
            </div>
            <div class="img-stack4">
                <h3>Events</h3>
                <a href="" onClick={() => navigateTo('/services')}><span>Read More</span></a>
            </div>
        </div> 
    </div>
        

    <div class="parent-container24">
        <div class="container24">
            <div>
                <h2>Find Your Perfect Match</h2>
            </div>
            <div>
                <p>Start your journey to a happy and fulfilled married life by joining the <b>'TheIndianWedding'</b> and finding your perfect match based on compatibility and shared values.</p>
                    <a href="" target="_self" rel="noopener noreferrer" onclick="return true;" onClick={() => navigateTo('/contact')}>
                        <span class="">Join Now</span>
                    </a>
            </div>
        </div>
    </div>


        <div class="parent-container25">

            <div class="work">
                <h2>Our Work</h2>
            </div>
            
        <div class="container25">


            <div class="img10">
                <figure>
                <img src={image10}></img>
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
        
            
            
            
            <div class="portfolio">
                <a  aria-label="" href="#" rel="follow noopener" target="_self" role="button" onClick={() => navigateTo('/portfolio')}>
                    View Portfolio
                </a>
            </div>
            
        </div>
        </div>

            
        <div class="couples">
            <div>
                <h2>Happy Couples</h2>
            </div>
        </div>   


    <div class="parent-container26">
    <div class="batch7">

            <div class="star" title="5/5">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
        
            <div class="info10">
                <div>
                    <p class="message">We are grateful to The IndianWedding for bringing us together. We found true love and a partner for life!</p>
                </div>
                <div class="img13">
                    <img src={image13} alt="img-13"></img>
                </div>
                <p class="name">Riya &amp; Arjun</p>
            </div>
    </div>
        
    <div class="batch8">
        
            <div class="star1" title="5/5">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
        
        
        
            <div class="info11">
                <div>
                    <p class="message2">The IndianWedding helped us find our soulmates. We couldn't be happier with our life partners!</p>
                </div>
                <div class="img14">
                        <img src={image14} alt="img-14"></img>
                </div>
                    <p class="name1">Smita &amp; Deepak</p>
            </div>
    </div> 
        
    <div class="batch9">
            <div class="star2" title="5/5">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
        
        
        
            <div class="info12">
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
    



    <div class="parent-container27">
        <div class="check">
            <h2>Check Out Our Recent Work On Instagram</h2>
            <div class="insta">
                <a href="" target="_self" rel="noopener noreferrer">Follow Us On Instagram</a>
            </div>
        </div>
        <div class="container27">
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

    
    <div class="parent-container28">
        <div class="container28">
        
                <div class="find">
                    <h2>Find Your Soulmate Today</h2>
                </div>
                <p class="info13">Join The IndianWedding today and begin your search for a compatible life partner in the Indian community.</p>
                <div class="button7">
                    <a href="" target="_self" rel="noopener noreferrer" role="button" onClick={() => navigateTo('/contact')}>
                        <span>Join Now</span>
                    </a>
                </div>
        
        </div>
    </div>


    <div class="parent-container29">
    <div class="contact-container2">
        <div class="contact-item2">
            <h2>Phone</h2>
            <p>202-555-0188</p>
        </div>
        <div class="contact-item2">
            <h2>Follow Us</h2>
            <div class="social-icons2">
                <ul>
                    <li><a href="" target="blank"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="" target="blank"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="" target="blank"><i class="fab fa-youtube" ></i></a></li>
                </ul>
            </div>
        </div>
        <div class="contact-item2">
            <h2>Email</h2>
            <p>contact@example.com</p>
        </div>
    </div>
    </div>
    
    
    
        
<div class="parent-container30">

    <nav class="container30">

            <ul id="info14">
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
                      
                                

<div class="parent-container31">
	<div class="container31">
        <p>Copyright © 2024 theindianwedding</p>
    </div>			
</div>
    </div>
  )
}

export default Home


