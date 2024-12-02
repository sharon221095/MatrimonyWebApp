import React, { useState, useEffect, useRef } from 'react';
import './Home.css'
import Header from '../Header/Header';
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
    const [error, setError] = useState('');
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
    const handleViewProfile = (id) => {
        // Navigate to the profile page using the user ID
        //console.log(id)
        navigateTo(`/profile/${id}`); // Adjust the route as needed
    };

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
                `https://nrimarriage.in/api/v1/users/SearchProfiles?pageNumber=${newPageNumber}&pageSize=8`,
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

    return (
        <div className='body'>

            <Header />

            <form onSubmit={handleSearchSubmit} className="search-form">
                <h2>Search Profiles</h2>
                <div className="search-fields row">
                    {error && <div className="alert alert-danger">{error}</div>}
                    {[
                        {
                            label: 'Min Age:',
                            name: 'MinAge',
                            type: 'select',
                            options: ['Select Min Age', ...Array.from({ length: 53 }, (_, i) => i + 18)]
                        },
                        {
                            label: 'Max Age:',
                            name: 'MaxAge',
                            type: 'select',
                            options: ['Select Max Age', ...Array.from({ length: 53 }, (_, i) => i + 18)]
                        },
                        {
                            label: 'Min Height (cm):',
                            name: 'MinHeight',
                            type: 'select',
                            options: ['Select Min Height', ...Array.from({ length: 101 }, (_, i) => i + 140)]
                        },
                        {
                            label: 'Max Height (cm):',
                            name: 'MaxHeight',
                            type: 'select',
                            options: ['Select Max Height', ...Array.from({ length: 101 }, (_, i) => i + 140)]
                        },
                        {
                            label: 'Min Salary (INR):',
                            name: 'MinSalary',
                            type: 'select',
                            options: ['Select Min Salary', '2 LPA', '5 LPA', '10 LPA', '20 LPA', '50 LPA', '1 Cr']
                        },
                        {
                            label: 'Max Salary (INR):',
                            name: 'MaxSalary',
                            type: 'select',
                            options: ['Select Max Salary', '2 LPA', '5 LPA', '10 LPA', '20 LPA', '50 LPA', '1 Cr']
                        },
                        { label: 'Caste:', name: 'Caste', type: 'select', options: ['Select Caste', 'General', 'OBC', 'SC/ST'] },
                        { label: 'Religion:', name: 'PreferredPartnerReligion', type: 'select', options: ['Select Religion', 'Hindu', 'Muslim', 'Christian', 'Other'] },
                        { label: 'Gender:', name: 'Gender', type: 'select', options: ['Select Gender', 'Male', 'Female', 'Other'] },
                        { label: 'Marital Status:', name: 'MaritalStatus', type: 'select', options: ['Select Status', 'Single', 'Divorced', 'Widowed'] },
                        { label: 'Preferred Partner Location:', name: 'PreferredPartnerLocation', type: 'select', options: ['Select Location', 'India', 'United Kingdom', 'United States', 'Germany', 'France', 'Italy', 'Spain', 'Pakistan', 'Japan'] },
                        { label: 'Mother Tongue:', name: 'MotherTongue', type: 'select', options: ['Select Language', 'Hindi', 'English', 'Tamil', 'Telugu', 'Malayalam', 'Marathi'] },
                        {
                            label: 'Occupation:',
                            name: 'Occupation',
                            type: 'select',
                            options: [
                                'Select Occupation',
                                'Software Developer',
                                'Doctor',
                                'Engineer',
                                'Teacher',
                                'Nurse',
                                'Accountant',
                                'Lawyer',
                                'Architect',
                                'Marketing Manager',
                                'Sales Executive',
                                'Civil Servant',
                                'Researcher',
                                'Data Analyst',
                                'Business Analyst',
                                'Entrepreneur',
                                'Consultant',
                                'Journalist',
                                'Graphic Designer',
                                'Content Writer',
                                'Photographer',
                                'Musician',
                                'Actor/Actress',
                                'Social Worker',
                                'Scientist',
                                'Pilot',
                                'Chef',
                                'Pharmacist',
                                'Librarian',
                                'Veterinarian',
                                'Mechanic',
                                'Electrician',
                                'Plumber',
                                'Farmer',
                                'Police Officer',
                                'Army Officer',
                                'Professor',
                                'Clerk',
                                'Banker',
                                'Dentist',
                                'Psychologist',
                                'Other'
                            ]
                        },
                        {
                            label: 'Education:', name: 'Education', type: 'select', options: ['Select Education',
                                'High School',
                                'Associate Degree',
                                'Bachelor\'s Degree',
                                'Master\'s Degree',
                                'Doctorate (PhD)',
                                'Diploma',
                                'Certificate',
                                'Professional Degree (e.g., MBA, JD, MD)',
                                'Post-Doctorate',
                                'Vocational Training']
                        },
                    ].map(({ label, name, type, options }) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-3" key={name}>
                            <label>{label}</label>
                            {type === 'select' ? (
                                <select
                                    name={name}
                                    value={searchCriteria[name] || ""}
                                    onChange={handleSearchChange}
                                    className="form-control"
                                >
                                    {options.map((option) => (
                                        <option
                                            value={option === `Select ${label}` ? "" : option}
                                            key={option}
                                        >
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type={type}
                                    name={name}
                                    value={searchCriteria[name] || ""}
                                    onChange={handleSearchChange}
                                    className="form-control"
                                />
                            )}
                        </div>
                    ))}
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>


            {isSearchPerformed ? (
                <div className="search-results">
                    {searchResults.length > 0 ? (
                        <div className="row justify-content-center g-3">
                            {searchResults.map((result) => (
                                <div
                                    key={result.id}
                                    className="profile-card col-xl-3 col-lg-4 col-md-6 col-sm-12"
                                >
                                    <div className="card shadow-sm border-0 h-100">
                                        <img
                                            src={result.profilePictureUrl || image63}
                                            alt={`${result.firstName} ${result.lastName} Profile`}
                                            className="card-img-top rounded-top"
                                            style={{ objectFit: 'cover', height: '200px' }}
                                        />
                                        <div className="card-body text-center">
                                            <h5 className="card-title  fw-bold">
                                                {result.firstName} {result.lastName}
                                            </h5>
                                            <p className="card-text text-muted mb-1">
                                                <i className="bi bi-calendar-heart me-2"></i>Age: {result.age}
                                            </p>
                                            <p className="card-text text-muted mb-1">
                                                <i className="bi bi-ruler me-2"></i>Height: {result.height} cm
                                            </p>
                                            <p className="card-text text-muted mb-1">
                                                <i className="bi bi-heart me-2"></i>Religion: {result.religion}
                                            </p>
                                            <p className="card-text text-muted mb-3">
                                                <i className="bi bi-gender-ambiguous me-2"></i>Gender: {result.gender}
                                            </p>
                                            <button
                                                className="btn btn-outline-primary w-100"
                                                onClick={() => handleViewProfile(result.userId)}
                                            >
                                                View Profile
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center mt-5">
                            <p className="text-muted fs-5">No profiles found. Try refining your search.</p>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center mt-5">
                    <p className="text-muted fs-5">Please perform a search to see results.</p>
                </div>
            )}


            {isSearchPerformed && totalPages > 1 && (
                <div className="pagination-controls text-center mt-4">
                    <nav aria-label="Page navigation">
                        <ul className="pagination justify-content-center">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <li
                                    className={`page-item ${pageNumber === index + 1 ? 'active' : ''
                                        }`}
                                    key={index}
                                >
                                    <button
                                        className="page-link rounded-pill"
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





            <div className="parent-container23">
                <div className="container23">
                    <h1>Connect with Your Perfect Match</h1>
                    <p>Find your life partner through our comprehensive profiles, matchmaking services, and tools.</p>
                </div>

                <div className="image-section">
                    <img srcSet={image1} alt="img-1" className="image1a" />
                    <img srcSet={image2} alt="img-2" className="image2a" />
                </div>
            </div>



            <div className="parent-container24">
                <div className="container24">
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


                    <div className="about2">
                        <h2>Our Story</h2>
                        <p>NRImatch is committed to helping individuals within the Indian community find their soulmates. With a focus on compatibility and a deep understanding of cultural values, we strive to make the journey of finding love easier and more fulfilling.</p>
                        <div className="hr2"></div>
                        <p className="info">Follow Us</p>

                        <div className="social-menu3">
                            <ul>
                                <li><a href="https://www.facebook.com/profile.php?id=61570002380672" target="_blank"><i className="fab fa-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/nrimatch/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container-fluid parent-container25 p-0">
                <div className="container25 text-center">
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
                <div className="parent-container26 mx-4">
                    <div className="container container26">
                        <div>
                            <h2>Find Your Perfect Match</h2>
                        </div>
                        <div>
                            <p>Start your journey to a happy and fulfilled married life by joining NRImatch and finding your perfect match based on compatibility and shared values.</p>
                        </div>
                    </div>
                </div>
            </div>





            <div className="parent-container27">
                <div className="work">
                    <h2>Our Work</h2>
                </div>

                <div className="container27 d-flex justify-content-center">
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





            <div className="parent-container28">
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



            <div className="parent-container29">
                <div className="check13">
                    <h2>Check Out Our Recent Work On Instagram</h2>
                </div>
                <div className="insta-home">
                    <a href="https://www.instagram.com/nrimatch/" target="_self" rel="noopener noreferrer">
                        Follow Us On Instagram
                    </a>
                </div>
                <div className="container29">
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


            <div className="parent-container30">
                <div className="container30 text-center">
                    <div className="find3 mb-4">
                        <h2>Find Your Soulmate Today</h2>
                    </div>
                    <p className="info-home">Join NRImatch today and begin your search for a compatible life partner in the Indian community.</p>
                </div>
            </div>


            <div class="parent-container31">
                <div class="contact-container31">
                    <div class="contact-item31">
                        <h2>Phone</h2>
                        <p>202-555-0188</p>
                    </div>
                    <div class="contact-item31">
                        <h2>Follow Us</h2>
                        <div class="social-icons3">
                            <ul>
                                <li><a href="https://www.facebook.com/profile.php?id=61570002380672" target="blank"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/nrimatch/" ><i class="fab fa-instagram"></i></a></li>
                                <li><a href=""><i class="fab fa-youtube" target="blank"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="contact-item31">
                        <h2>Email</h2>
                        <p>contact@example.com</p>
                    </div>
                </div>
            </div>




            <div class="parent-container550">

                <nav class="container550">

                    <ul id="info390">
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



            <div class="parent-container560">
                <div class="container560">
                    <p>Copyright © 2024 NRImatch</p>
                </div>
            </div>
        </div>
    )
}

export default Home