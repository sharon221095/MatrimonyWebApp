import React, { useState, useEffect, useRef } from 'react';
import './Header.css'
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import image63 from '../img/user.png';

export default function Header() {
    const [profile, setProfile] = useState(null);
    const navigateTo = useNavigate();
    const [profilePictureUrl, setProfilePictureUrl] = useState(null); // New state for profile picture
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [navVisible, setNavVisible] = useState(false);
    const location = useLocation();

    const handleToggle = () => {
        setNavVisible(!navVisible);
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

    /* =======================
     Lifecycle Effects
  ======================= */

    useEffect(() => {
        fetchProfilePicture(); // Fetch profile picture on component mount
    }, []);

    const toggleNav = () => {
        setNavVisible(!navVisible); // Toggle the nav visibility
    };

    const handleEditProfile = (data) => {
        // Navigate to the profile edit page with data
        navigateTo('/editprofile', { state: { data } });
    };

    return (
        <header className="header3">
            <h1 className="website-title2 col-12 col-md-auto text-left text-md-left">
                <a className="title-brand" href="#">NRImatch</a>
            </h1>

            <nav className={navVisible ? 'visible' : 'hidden'}>
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

            <div className="profile-picture-container1" onClick={toggleDropdown} ref={dropdownRef}>
                <img
                    src={profilePictureUrl ? profilePictureUrl : '/path/to/default.jpg'}
                    alt="Profile"
                    className="profile-picture1"
                />
                {dropdownOpen && (
                    <div className="dropdown-menu1 show" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item1" onClick={() => handleEditProfile(profilePictureUrl)}>Edit Profile</button>
                        <button className="dropdown-item1" onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>


            {/* Toggle Button for Mobile */}
            <button className={`nav-toggle1 ${navVisible ? 'active' : ''}`} onClick={handleToggle} aria-label="Toggle Navigation">
                {navVisible ? '✖' : '☰'}
            </button>

            {/* <button
                className={`nav-toggle1 ${isActive ? 'active' : ''}`}
                onClick={handleToggle}
            >
                {isActive ? '✖' : '☰'}
            </button> */}

        </header>
    )
}