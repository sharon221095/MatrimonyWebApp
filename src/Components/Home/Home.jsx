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
    const [profilePictureUrl, setProfilePictureUrl] = useState(null); // New state for profile picture
    const dropdownRef = useRef(null);
    const [searchCriteria, setSearchCriteria] = useState({
        MinAge: '',
        MaxAge: '',
        MinHeight: '',
        MaxHeight: '',
        Caste: '',
        PreferredPartnerReligion: '',
        Gender: '',
        MaritalStatus: '',
        PreferredPartnerLocation: '',
        MinSalary: '',
        MaxSalary: '',
        MotherTongue: '',
        Occupation: '',
        Education: ''
    });
    const [searchResults, setSearchResults] = useState([]);
    const [pageNumber, setPageNumber] = useState(1); // Default to page 1
    const [pageSize] = useState(10); // Default page size, you can change this
    const [totalPages, setTotalPages] = useState(0); // Total pages returned by the backend
    const [isSearchPerformed, setIsSearchPerformed] = useState(false); // New state to track search activity

    /* =======================
       Navigation Functions
    ======================= */

    // const handleViewProfile = (id) => {
    //     // Navigate to the profile page using the user ID
    //     navigateTo(`/profile/${id}`); // Adjust the route as needed
    // };

    const handleEditProfile = (data) => {
        // Navigate to the profile edit page with data
        navigateTo('/profile', { state: { data } });
    };

    const handleLogout = () => {
        // Clear auth token and navigate to login page
        localStorage.removeItem('authToken');
        navigateTo('/login');
    };

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
       Dropdown Handling
    ======================= */

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
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

    /* ==========================
       Search Functionality
    ========================== */

    const handleSearchChange = (e) => {
        setSearchCriteria({
            ...searchCriteria,
            [e.target.name]: e.target.value,
        });
    };
    
     // Search submit handler
    const handleSearchSubmit = async (e, newPageNumber = pageNumber) => {
        if (e) e.preventDefault();

        const filteredCriteria = Object.fromEntries(
            Object.entries(searchCriteria).filter(([key, value]) => value.trim() !== '')
        );

        console.log('Filtered Search Criteria:', filteredCriteria);

        try {
            const response = await axios.post(
                'https://nrimarriage.in/api/v1/users/SearchProfiles',
                { 
                    ...filteredCriteria, 
                    pageNumber: newPageNumber,  
                    pageSize: 8 
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
                    },
                }
            );

            console.log('Search Results:', response.data);
            setSearchResults(response.data.results);
            setTotalPages(response.data.totalPages);
            setIsSearchPerformed(true); // Set the search as performed
        } catch (error) {
            console.error('Error fetching search results:', error.response ? error.response.data : error.message);
        }
    };

    // Page change handler
    const handlePageChange = async (newPageNumber) => {
        setPageNumber(newPageNumber);
        await handleSearchSubmit(null, newPageNumber);
    };

    // View profile handler
    const handleViewProfile = (id) => {
        console.log('View profile', id);
    };



    /* =======================
       Lifecycle Effects
    ======================= */

    useEffect(() => {
        fetchProfilePicture(); // Fetch profile picture on component mount
    }, []);

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
            <div className="profile-picture-container" onClick={toggleDropdown} ref={dropdownRef}>
                    <img
                        src={profilePictureUrl ? profilePictureUrl : image63 } // Display the fetched profile picture URL
                        alt="Profile"
                        className="profile-picture1"
                        style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                {dropdownOpen && (
                    <div className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={()=>handleEditProfile(profilePictureUrl)}>Edit Profile</button>
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
                            name="MinAge"
                            value={searchCriteria.MinAge}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Max Age:</label>
                        <input
                            type="number"
                            name="MaxAge"
                            value={searchCriteria.MaxAge}
                            onChange={handleSearchChange}
                        />
                    </div>
                     <div className="search-field">
                        <label>Min Height:</label>
                        <input
                            type="number"
                            name="MinHeight"
                            value={searchCriteria.MinHeight}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Max Height:</label>
                        <input
                            type="number"
                            name="MaxHeight"
                            value={searchCriteria.MaxHeight}
                            onChange={handleSearchChange}
                        />
                    </div> 
                     <div className="search-field">
                        <label>Caste:</label>
                        <input
                            type="text"
                            name="Caste"
                            value={searchCriteria.Caste}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Religion:</label>
                        <input
                            type="text"
                            name="PreferredPartnerReligion"
                            value={searchCriteria.PreferredPartnerReligion}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Gender:</label>
                        <input
                            type="text"
                            name="Gender"
                            value={searchCriteria.Gender}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Marital Status:</label>
                        <input
                            type="text"
                            name="MaritalStatus"
                            value={searchCriteria.MaritalStatus}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Preferred Partner Location:</label>
                        <input
                            type="text"
                            name="PreferredPartnerLocation"
                            value={searchCriteria.PreferredPartnerLocation}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Min Salary:</label>
                        <input
                            type="number"
                            name="MinSalary"
                            value={searchCriteria.MinSalary}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Max Salary:</label>
                        <input
                            type="number"
                            name="MaxSalary"
                            value={searchCriteria.MaxSalary}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Mother Tongue:</label>
                        <input
                            type="text"
                            name="MotherTongue"
                            value={searchCriteria.MotherTongue}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Occupation:</label>
                        <input
                            type="text"
                            name="Occupation"
                            value={searchCriteria.Occupation}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="search-field">
                        <label>Education:</label>
                        <input
                            type="text"
                            name="Education"
                            value={searchCriteria.Education}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                <button type="submit">Search</button>
            </form>

            
            {/* Only display search results if a search has been performed */}
            {isSearchPerformed ? (
                <div className="search-results">
                    {searchResults.length > 0 ? (
                        <div className="row justify-content-center">
                            {searchResults.map((result) => (
                                <div key={result.id} className="profile-card col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <div className="card shadow-sm border-light">
                                        <img
                                            src={result.profilePictureUrl || 'default-image-url'}
                                            alt={`${result.firstName} ${result.lastName} Profile`}
                                            className="card-img-top"
                                        />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{result.firstName} {result.lastName}</h5>
                                            <p className="card-text">Age: {result.age}</p>
                                            <p className="card-text">Height: {result.height} cm</p>
                                            <p className="card-text">Religion: {result.religion}</p>
                                            <p className="card-text">Gender: {result.gender}</p>
                                            <button 
                                                className="btn btn-primary"
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
            ) : (
                <p className="text-center">Please perform a search to see results.</p>
            )}

            {/* Pagination controls */}
            {isSearchPerformed && totalPages > 1 && (
                <div className="pagination-controls text-center mt-4">
                    <nav aria-label="Page navigation">
                        <ul className="pagination justify-content-center">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <li className={`page-item ${pageNumber === index + 1 ? 'active' : ''}`} key={index}>
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        
    
    <div className="parent-container21">
        <div className="container21">
            <div>
                <h1>Connect with Your Perfect Match</h1>
            </div>
            <p>Find your life partner through our comprehensive profiles, matchmaking services, and tools.</p>
            <div>
                <a href="" onClick={() => navigateTo('/contact')}><span>Join Now</span></a>
            </div>
        </div>
        <div className="image-section">
            <img srcSet={image1} alt="img-1" className="image-1"></img>
            <img srcSet={image2} alt="img-2" className="image-2"></img>
        </div>
    </div>


    <div className="parent-container22">
        <div className="container22">

            <div className="img3">
                <img loading="lazy" decoding="async"  sizes="(max-width: 480px) 150px" srcSet={image3} alt="img-3" className="" width="645" height="500" title="" role="img"></img>
            </div>
        
        
            <div className="about2">
                <h2>Our Story</h2>
                <p>The <b>'TheIndianWedding'</b> is committed to helping individuals within the Indian community find their soulmates. With a focus on compatibility and a deep understanding of cultural values, we strive to make the journey of finding love easier and more fulfilling.</p>
                <div className="hr"></div>
                <div className="button6">
                    <a href="" onClick={() => navigateTo('/about')}><span>Read More</span></a>
                </div>
                <p className="info9">Follow Us</p>
                
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

<div className="parent-container23">
        <div className="container23">
            <h2>Our Services</h2>
        </div>

        <div className="img-stack">
            <div className="img-stack1">
                <h3>Profiles</h3>
                <a href="" onClick={() => navigateTo('/services')}><span>Read More</span></a>
            </div>
            <div className="img-stack2">
                <h3>Matchmaking</h3>
                <a href="" onClick={() => navigateTo('/services')}><span>Read More</span></a>
            </div>
            <div className="img-stack3">
                <h3>Wedding Shopping</h3>
                <a href="" onClick={() => navigateTo('/services')}><span>Read More</span></a>
            </div>
            <div className="img-stack4">
                <h3>Events</h3>
                <a href="" onClick={() => navigateTo('/services')}><span>Read More</span></a>
            </div>
        </div> 
    </div>
        

    <div className="parent-container24">
        <div className="container24">
            <div>
                <h2>Find Your Perfect Match</h2>
            </div>
            <div>
                <p>Start your journey to a happy and fulfilled married life by joining the <b>'TheIndianWedding'</b> and finding your perfect match based on compatibility and shared values.</p>
                    <a href="" target="_self" rel="noopener noreferrer"  onClick={() => navigateTo('/contact')}>
                        <span className="">Join Now</span>
                    </a>
            </div>
        </div>
    </div>


        <div className="parent-container25">

            <div className="work">
                <h2>Our Work</h2>
            </div>
            
        <div className="container25">


            <div className="img10">
                <figure>
                <img srcSet={image10}></img>
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
        
            
            
            
            <div className="portfolio">
                <a  aria-label="" href="#" rel="follow noopener" target="_self" role="button" onClick={() => navigateTo('/portfolio')}>
                    View Portfolio
                </a>
            </div>
            
        </div>
        </div>

            
        <div className="couples">
            <div>
                <h2>Happy Couples</h2>
            </div>
        </div>   


    <div className="parent-container26">
    <div className="batch7">

            <div className="star" title="5/5">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
        
            <div className="info10">
                <div>
                    <p className="message">We are grateful to The IndianWedding for bringing us together. We found true love and a partner for life!</p>
                </div>
                <div className="img13">
                    <img srcSet={image13} alt="img-13"></img>
                </div>
                <p className="name">Riya &amp; Arjun</p>
            </div>
    </div>
        
    <div className="batch8">
        
            <div className="star1" title="5/5">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
        
        
        
            <div className="info11">
                <div>
                    <p className="message2">The IndianWedding helped us find our soulmates. We couldn't be happier with our life partners!</p>
                </div>
                <div className="img14">
                        <img srcSet={image14} alt="img-14"></img>
                </div>
                    <p className="name1">Smita &amp; Deepak</p>
            </div>
    </div> 
        
    <div className="batch9">
            <div className="star2" title="5/5">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
        
        
        
            <div className="info12">
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
    



    <div className="parent-container27">
        <div className="check">
            <h2>Check Out Our Recent Work On Instagram</h2>
            <div className="insta">
                <a href="" target="_self" rel="noopener noreferrer">Follow Us On Instagram</a>
            </div>
        </div>
        <div className="container27">
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

    
    <div className="parent-container28">
        <div className="container28">
        
                <div className="find">
                    <h2>Find Your Soulmate Today</h2>
                </div>
                <p className="info13">Join The IndianWedding today and begin your search for a compatible life partner in the Indian community.</p>
                <div className="button7">
                    <a href="" target="_self" rel="noopener noreferrer" role="button" onClick={() => navigateTo('/contact')}>
                        <span>Join Now</span>
                    </a>
                </div>
        
        </div>
    </div>


    <div className="parent-container29">
    <div className="contact-container2">
        <div className="contact-item2">
            <h2>Phone</h2>
            <p>202-555-0188</p>
        </div>
        <div className="contact-item2">
            <h2>Follow Us</h2>
            <div className="social-icons2">
                <ul>
                    <li><a href="" target="blank"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="" target="blank"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="" target="blank"><i className="fab fa-youtube" ></i></a></li>
                </ul>
            </div>
        </div>
        <div className="contact-item2">
            <h2>Email</h2>
            <p>contact@example.com</p>
        </div>
    </div>
    </div>
    
    
    
        
<div className="parent-container30">

    <nav className="container30">

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
                      
                                

<div className="parent-container31">
	<div className="container31">
        <p>Copyright © 2024 theindianwedding</p>
    </div>			
</div>
    </div>
  )
}

export default Home


