import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css'; // Import the CSS file

const Profile = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const [userImages, setUserImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('authToken');
            try {
                const response = await fetch(`http://13.126.188.208:5298/api/v1/users/GetUser?id=${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                });
                if (!response.ok) {
                    const text = await response.text();
                    console.error('Response error:', text);
                    throw new Error(`Error! Status: ${response.status}`);
                }
                const data = await response.json();
                setUserData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchUserImages = async () => {
            const token = localStorage.getItem('authToken');
            try {
                const response = await fetch(`http://13.126.188.208:5298/api/v1/Users/GetUserImages?userId=${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                });
                if (!response.ok) {
                    const text = await response.text();
                    console.error('Response error:', text);
                    throw new Error(`Error fetching images! Status: ${response.status}`);
                }
                const imagesData = await response.json();
                setUserImages(imagesData);
            } catch (err) {
                console.error('Error fetching images:', err);
            }
        };

        fetchUserData();
        fetchUserImages();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="profile-container">
    <div className="user-details">
        <h2>{`${userData.firstName} ${userData.lastName}`}</h2>
        <img
            src={userData.profilePictureUrl || "default-image-url"}
            alt={`${userData.firstName} ${userData.lastName} Profile`}
            className="profile-picture"
        />
        <div className="user-images">
            {userImages.length > 0 ? (
                userImages.map((image, index) => (
                    <img
                        key={image.imageId}
                        src={image.preSignedUrl}
                        alt={`User image ${index + 1}`}
                        className="user-image"
                    />
                ))
            ) : (
                <p>No images available</p>
            )}
        </div>
        <div className="detail-row">
            <span className="field-label">Email:</span>
            <span>{userData.email}</span>
        </div>
        <div className="detail-row">
            <span className="field-label">Phone Number:</span>
            <span>{userData.phoneNumber}</span>
        </div>
        <div className="detail-row">
            <span className="field-label">Age:</span>
            <span>{userData.age}</span>
        </div>
        <div className="detail-row">
            <span className="field-label">Gender:</span>
            <span>{userData.gender}</span>
        </div>
        <div className="detail-row">
            <span className="field-label">Country:</span>
            <span>{userData.country}</span>
        </div>
        <div className="detail-row">
            <span className="field-label">Occupation:</span>
            <span>{userData.occupation}</span>
        </div>
        <div className="detail-row">
            <span className="field-label">About Me:</span>
            <span>{userData.aboutMe}</span>
        </div>
        <div className="detail-row">
            <span className="field-label">Profile Status:</span>
            <span>{userData.profileStatus}</span>
        </div>
        <div className="detail-row">
            <span className="field-label">Verified:</span>
            <span
                className={userData.isVerified ? "verified" : "unverified"}
            >
                {userData.isVerified ? "Yes" : "No"}
            </span>
        </div>
        <div className="detail-row">
            <span className="field-label">Created On:</span>
            <span>
                {new Date(userData.createdOn).toLocaleString()}
            </span>
        </div>
    </div>
</div>

    );
};

export default Profile;
