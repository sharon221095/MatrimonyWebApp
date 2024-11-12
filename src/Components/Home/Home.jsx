import React, { useState,  useEffect, useRef } from 'react';
import './Home.css'
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import image1 from '../img/img-1.webp';
import image2 from '../img/img-2.jpg';
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
    const location = useLocation();

    /* =======================
       Navigation Functions
    ======================= */


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
            <h2 className="h2b"><a href="/">TheIndianWedding</a></h2>
            <nav>
                <ul>
                    <li>
                        <a
                            href="/home"
                            onClick={() => navigateTo('/home')}
                            className={location.pathname === '/home' ? 'active' : ''}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            onClick={() => navigateTo('/about')}
                            className={location.pathname === '/about' ? 'active' : ''}
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="/services"
                            onClick={() => navigateTo('/services')}
                            className={location.pathname === '/services' ? 'active' : ''}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="/portfolio"
                            onClick={() => navigateTo('/portfolio')}
                            className={location.pathname === '/portfolio' ? 'active' : ''}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a
                            href="/testimonials"
                            onClick={() => navigateTo('/testimonials')}
                            className={location.pathname === '/testimonials' ? 'active' : ''}
                        >
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a
                            href="/blog"
                            onClick={() => navigateTo('/blog')}
                            className={location.pathname === '/blog' ? 'active' : ''}
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            onClick={() => navigateTo('/contact')}
                            className={location.pathname === '/contact' ? 'active' : ''}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="header-actions">
                <div className="profile-picture-container" onClick={toggleDropdown} ref={dropdownRef}>
                    <img
                        src={profilePictureUrl ? profilePictureUrl : '/path/to/default.jpg'}
                        alt="Profile"
                        className="profile-picture1"
                        style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    {dropdownOpen && (
                        <div className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
                            <button className="dropdown-item" onClick={() => handleEditProfile(profilePictureUrl)}>Edit Profile</button>
                            <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </header>


             
            <form onSubmit={handleSearchSubmit} className="search-form">
    <h2>Search Profiles</h2>
    <div className="search-fields row">
        {error && <div className="alert alert-danger">{error}</div>}
        {[
            { label: 'Min Age:', name: 'MinAge', type: 'number' },
            { label: 'Max Age:', name: 'MaxAge', type: 'number' },
            { label: 'Min Height:', name: 'MinHeight', type: 'number' },
            { label: 'Max Height:', name: 'MaxHeight', type: 'number' },
            { label: 'Caste:', name: 'Caste', type: 'text' },
            { label: 'Religion:', name: 'PreferredPartnerReligion', type: 'text' },
            { label: 'Gender:', name: 'Gender', type: 'text' },
            { label: 'Marital Status:', name: 'MaritalStatus', type: 'text' },
            { label: 'Preferred Partner Location:', name: 'PreferredPartnerLocation', type: 'text' },
            { label: 'Min Salary:', name: 'MinSalary', type: 'number' },
            { label: 'Max Salary:', name: 'MaxSalary', type: 'number' },
            { label: 'Mother Tongue:', name: 'MotherTongue', type: 'text' },
            { label: 'Occupation:', name: 'Occupation', type: 'text' },
            { label: 'Education:', name: 'Education', type: 'text' },
        ].map(({ label, name, type }) => (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-3" key={name}>
                <label>{label}</label>
                <input
                    type={type}
                    name={name}
                    value={searchCriteria[name] || ""}
                    onChange={handleSearchChange}
                    className="form-control"
                />
            </div>
        ))}
    </div>
    <button type="submit" className="btn btn-primary">Search</button>
</form>



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
                <h1>Connect with Your Perfect Match</h1>
                <p>Find your life partner through our comprehensive profiles, matchmaking services, and tools.</p>
            </div>
        
        <div className="image-section">
            <img srcSet={image1} alt="img-1" className="image1a" />
            <img srcSet={image2} alt="img-2" className="image2a" />
        </div>
</div>



<div className="parent-container2">
    <div className="container2">
        <div className="img63">
            <img loading="lazy" decoding="async" srcSet="" sizes="(max-width: 480px) 150px" src={image3} alt="Our Story Image" width="645" height="500" title="Our Story" />
        </div>

        <div className="about">
            <h2>Our Story</h2>
            <p>The IndianWedding is committed to helping individuals within the Indian community find their soulmates. With a focus on compatibility and a deep understanding of cultural values, we strive to make the journey of finding love easier and more fulfilling.</p>
            <div className="hr"></div>
            <p className="info">Follow Us</p>
            
            <div className="social-menu1">
                <ul>
                    <li><a href="#" target="_blank"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
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
    <div className="parent-container4 mx-4">
        <div className="container container4">
            <div>
                <h2>Find Your Perfect Match</h2>
            </div>
            <div>
                <p>Start your journey to a happy and fulfilled married life by joining The IndianWedding and finding your perfect match based on compatibility and shared values.</p>
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
  <div className="check1">
    <h2>Check Out Our Recent Work On Instagram</h2>
    </div>
    <div className="insta1">
      <a href="#" target="_self" rel="noopener noreferrer">
        Follow Us On Instagram
      </a>
    </div>
  <div className="container7">
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


    <div className="parent-container8">
    <div className="container8 text-center">
        <div className="find mb-4"> 
            <h2>Find Your Soulmate Today</h2>
        </div>
        <p className="info4">Join The IndianWedding today and begin your search for a compatible life partner in the Indian community.</p>
    </div>
    </div>


    <div class="parent-container54">
    <div class="contact-container5">
        <div class="contact-item5">
            <h2>Phone</h2>
            <p>202-555-0188</p>
        </div>
        <div class="contact-item5">
            <h2>Follow Us</h2>
            <div class="social-icons5">
                <ul>
                    <li><a href="" target="blank"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="" target="blank"><i class="fab fa-instagram"></i></a></li>
                    <li><a href=""><i class="fab fa-youtube" target="blank"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="contact-item5">
            <h2>Email</h2>
            <p>contact@example.com</p>
        </div>
    </div>
    </div>
    
    
    
        
<div class="parent-container55">

    <nav class="container55">

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

</div>			
                      
                                

<div class="parent-container56">
	<div class="container56">
        <p>Copyright © 2024 theindianwedding</p>
    </div>			
</div> 
    </div>
  )
}

export default Home


