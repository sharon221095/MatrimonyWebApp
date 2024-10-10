import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Profile.css'
import { useForm } from 'react-hook-form';
import axios from "axios";
import image16 from '../img/img-16.avif';
import image17 from '../img/img-17.jpg';
import image18 from '../img/img-18.avif';
import image19 from '../img/img-19.avif';
import image20 from '../img/img-20.jpg';
import image63 from '../img/user.png'



const Profile = () => {
  // React Router's `useNavigate` hook for programmatic navigation
  const navigate = useNavigate();
  
  // React Hook Form hooks and methods for managing form state
  const { 
    register, 
    clearErrors, 
    handleSubmit, 
    formState: { errors }, 
    reset, 
    setValue 
  } = useForm();

  // States to hold initial profile data and profile image preview
  const [initialData, setInitialData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [profileImages, setProfileImages] = useState([]);

  // #1: useEffect - Fetches profile data on component mount
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // Get the JWT token from localStorage
        const token = localStorage.getItem('authToken');
        if (!token) {
          alert('No authentication token found. Please log in.');
          return;
        }

        // Fetch profile data from the backend
        const response = await axios.get(' http://13.126.188.208:5298/api/v1/users/Profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        // If the request is successful, populate the form with the fetched data
        if (response.status === 200) {
          const profileData = response.data;
          setInitialData(profileData);
          
         // Set each form value using the fetched profile data
         Object.keys(profileData).forEach((key) => {
          if (profileData[key]) {
            setValue(key, profileData[key]);
          }
        });

          // Set profile image preview if it exists in the profile data
          if (profileData.ProfilePictureUrl) {
            setProfileImage(profileData.ProfilePictureUrl);
          }
  

         // Initialize profileImages with existing images if available
         if (profileData.ProfileImages) {
          setProfileImages(profileData.ProfileImages); // Assuming ProfileImages is an array of URLs
        }
      } 

      } catch (err) {
        console.error('Error fetching profile data:', err);
        alert('An error occurred while fetching the profile data.');
      }
    };

    // Fetch the profile data when the component mounts
    fetchProfileData();
  }, [setValue]);



  // #2: handleProfileSubmit - Submits the profile update form
  const handleProfileSubmit = async (data) => {
    try {
      // Get the JWT token from localStorage
      const token = localStorage.getItem('authToken');
      if (!token) {
        alert('No authentication token found. Please log in.');
        return;
      }


      
      // Create a new FormData object to hold all form data, including files
      const formData = new FormData();

      formData.append('FirstName', data.FirstName);
      formData.append('LastName', data.LastName);
      formData.append('ProfilePictureUrl', data.ProfilePictureUrl);
      // Handle file upload separately
      if (data.ProfileImage && data.ProfileImage[0]) {
      formData.append('ProfileImage', data.ProfileImage[0]);
      }
      formData.append('PhoneNumber', data.PhoneNumber);
      formData.append('Address', data.Address);
      formData.append('Age', data.Age);
      formData.append('Gender', data.Gender);
      formData.append('City', data.City);
      formData.append('State', data.State);
      formData.append('Country', data.Country);
      formData.append('Religion', data.Religion);
      formData.append('Caste', data.Caste);
      formData.append('SubCaste', data.SubCaste);
      formData.append('Height', data.Height);
      formData.append('Weight', data.Weight);
      formData.append('MaritalStatus', data.MaritalStatus);
      formData.append('MotherTongue', data.MotherTongue);
      formData.append('Education', data.Education);
      formData.append('Occupation', data.Occupation);
      formData.append('AnnualIncome', data.AnnualIncome);
      formData.append('FamilyDetails', data.FamilyDetails);
      formData.append('PreferredPartnerAgeRange', data.PreferredPartnerAgeRange);
      formData.append('PreferredPartnerReligion', data.PreferredPartnerReligion);
      formData.append('PreferredPartnerCaste', data.PreferredPartnerCaste);
      formData.append('PreferredPartnerLocation', data.PreferredPartnerLocation);
      formData.append('AboutMe', data.AboutMe);
      formData.append('HobbiesAndInterests', data.HobbiesAndInterests);
      formData.append('ProfileImages',data.ProfileImages);


        // Append existing profile data to formData
        Object.keys(data).forEach((key) => {
          if (data[key] !== initialData[key] && data[key] !== "") {
            formData.append(key, data[key]);
          }
        });


       // Handle multiple profile images
       profileImages.forEach((image) => {
        formData.append('ProfileImages', image);
      });

      // Handle file upload separately for new profile image
      const newProfileImage = data.ProfileImage && data.ProfileImage[0];
      if (newProfileImage) {
        formData.append('ProfileImage', newProfileImage);
      }

      // Handle uploading additional images
      const newAdditionalImages = data.AdditionalImages;
      if (newAdditionalImages) {
        Array.from(newAdditionalImages).forEach((image) => {
          formData.append('AdditionalImages', image);
        });
      }

     // Make an API request to update the profile
     const response = await axios.put(
      'http://13.126.188.208:5298/api/v1/users/Profile',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      }
    );

     // Handle the API response
     console.log('API Response:', response);
     if (response.status === 200) {
       alert('Profile updated successfully!');
       navigate('/home'); // Redirect to the home page on successful update
     } else {
       alert('Profile update failed.');
     }
   } catch (err) {
     console.error('Profile update error:', err);
     alert('An error occurred while updating the profile. Please try again.');
   }
 };

 // Handle file input change for profile image
 const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    setProfileImage(URL.createObjectURL(file));
  }
};

   // Handle file input change for additional images
   const onAdditionalImagesChange = (event) => {
    const files = Array.from(event.target.files);
    if (profileImages.length + files.length <= 4) {
      const newImages = files.map((file) => URL.createObjectURL(file));
      setProfileImages((prevImages) => [...prevImages, ...newImages]);
    } else {
      alert('You can upload a maximum of 4 images.');
    }
  };

  // Handle image deletion
  const handleDeleteImage = (index) => {
    setProfileImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

 // Handle setting profile image
 const handleSetProfileImage = (image) => {
  setProfileImage(image);
};

const handleReset = () => {
  reset();
  clearErrors();
  setProfileImage(null); 
  setProfileImages([]); // Reset uploaded images
};

const [selectedImage, setSelectedImage] = useState(null);

const openPreviewModal = (image) => {
  setSelectedImage(image);
};

const closePreviewModal = () => {
  setSelectedImage(null);
};

  return (
    <div className="parent-container78">
      <h1 className="text">Welcome!!</h1>
      <div className="container78">
        <h1>Enter your Details</h1>
        <form onSubmit={handleSubmit(handleProfileSubmit)}>
          {/* Profile Image Section */}
          <div className="form-group mb-4 profile-image-section">
            <div className="profile-image-wrapper">
              <label htmlFor="ProfileImage" className="profile-image-label">
                <img 
                  src={profileImage || image63} // Use a placeholder if no image
                  alt="Profile Preview"
                  className="profile-image"
                />
              </label>
            </div>
            <input
              type="file"
              id="ProfileImage"
              className="form-control d-none" // Hide the default file input
              {...register('ProfileImage')}
              onChange={onFileChange} // Handle profile image change separately
            />
          </div>

         

      <table>

        <tr>
          <td>
            <label>Upload Additional Profile Images</label>
          </td>
          <td>:</td>
          <td>
          <div className="form-group mb-4 text-center">
      <label htmlFor="AdditionalImages">Upload Additional Profile Images</label>
      <input
        type="file"
        id="AdditionalImages"
        className="form-control mb-3"
        {...register('AdditionalImages')}
        multiple
        onChange={onAdditionalImagesChange}
      />
      <div className="uploaded-images row mt-3">
        {profileImages.map((image, index) => (
          <div key={index} className="col-4 col-md-2 mb-3">
            <div className="image-preview position-relative" onClick={() => openPreviewModal(image)}>
              <img 
                src={image} 
                alt={`Preview ${index}`} 
                className="img-fluid rounded"
              />
              <button
                type="button"
                className="btn btn-danger position-absolute"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click event from propagating to parent div
                  handleDeleteImage(index);
                }}
              >
                <i className="bi bi-x-circle"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {selectedImage && (
        <div className="preview-modal show" onClick={closePreviewModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected Preview" />
            <button onClick={() => handleSetProfileImage(selectedImage)}>
              Set as Profile Picture
            </button>
          </div>
        </div>
      )}
    </div>
          </td>
        </tr>

        <tr>
            <td>
            <label>FirstName</label>
            </td>
            <td>:</td>
            <td>
            <input type="text"
            name="FirstName"
            id="FirstName"
            placeholder="Enter your FirstName"
            {...register('FirstName')}/>
            </td>
            </tr>


            <tr>
            <td>
          <label>LastName</label>
            </td>
            <td>:</td>
            <td>
            <input type="text"
            name="LastName"
            id="LastName"
            placeholder="Enter your LastName"
            {...register('LastName')}
            />
            </td>
            </tr>


            <tr>
            <td>
          <label>PhoneNumber</label>
            </td>
            <td>:</td>
            <td>
            <input type="number"
            name="PhoneNumber"
            id="PhoneNumber"
            placeholder="Enter your PhoneNumber"
            {...register('PhoneNumber')}
            />
            {/* <p className="errors">{!!errors.PhoneNumber && "*PhoneNumber required"}</p> */}
            </td>
            </tr>
        

           <tr>
            <td>
          <label>About Me</label>
            </td>
            <td>:</td>
            <td>
            <input type="text"
            name="AboutMe"
            id="AboutMe"
            placeholder="Enter your Info"
            {...register('AboutMe')}
            />
            {/* <p className="errors">{!!errors.AboutMe && "*Info required"}</p> */}
            </td>
            </tr>




        <tr>
            <td>
          <label>Address</label>
            </td>
            <td>:</td>
            <td>
            <input type="text"
            name="Address"
            id="Address"
            placeholder="Enter your Address"
            {...register('Address'
          )}
            />
            {/* <p className="errors">{!!errors.Address && "*Address required"}</p> */}
            </td>
            </tr>


           <tr>
            <td>
          <label>Annual Income</label>
            </td>
            <td>:</td>
            <td>
            <input type="number"
            name="AnnualIncome"
            id="AnnualIncome"
            placeholder="Enter your Annual Income"
            {...register('AnnualIncome'
          )}
            />
            {/* <p className="errors">{!!errors.AnnualIncome && "*Annual Income required"}</p> */}
            </td>
            </tr>


          <tr>
            <td>
          <label>Caste</label>
            </td>
            <td>:</td>
            <td>
            <input type="text"
            name="Caste"
            id="Caste"
            placeholder="Enter your caste"
            {...register('Caste'
          )}
            />
            {/* <p className="errors">{!!errors.Caste && "*Caste required"}</p> */}
            </td>
            </tr>


          <tr>  
            <td>
          <label>City</label>
            </td>
            <td>:</td>
            <td>
              <select {...register('City')}
          >
                <option value="">--Select City--</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Madurai">Madurai</option>
                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                <option value="Ernakulam">Ernakulam</option>
                <option value="Kochin">Kochin</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Mangalore">Mangalore</option>
                <option value="Chitradurga">Chitradurga</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Qutab Minar">Qutab Minar</option>
                <option value="Jahanpanah">Jahanpanah</option>
              </select>
              {/* <p className="errors">{!!errors.City && "*required"}</p> */}
            </td>
            </tr>
            

         <tr>  
            <td>
          <label>Country</label>
            </td>
            <td>:</td>
            <td>
              <select {...register('Country')}
          >
                <option value="">--Select Country--</option>
                <option value="India">India</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Japan">Japan</option>
              </select>
              {/* <p className="errors">{!!errors.Country && "*required"}</p> */}
            </td>
            </tr>

            
            <tr>
            <td>
          <label>Age</label>
            </td>
            <td>:</td>
            <td>
            <input type="number"
            name="Age"
            id="Age"
            placeholder="Enter your Age"
            {...register('Age'
          )}
            />
            {/* <p className="errors">{!!errors.Age && "*Age required"}</p> */}
            </td>
            </tr>

            <tr>  
            <td>
          <label>Highest Education</label>
            </td>
            <td>:</td>
            <td>
              <select {...register('Education')}>
                <option value="">--Select Highest Education--</option>
                <option value="Bachelors in Engineering">Bachelors in Engineering</option>
                <option value="Master in Engineering">Master in Engineering</option>
                <option value="MBBS">MBBS</option>
                <option value="Master in Doctorate">Master in Doctorate</option>
                <option value="Bachelor of Arts">Bachelor of Arts</option>
                <option value="Master of Science">Master of Science</option>
                <option value="Master of Business Administration">Master of Business Administration</option>
                <option value="Higher Secondary School">Higher Secondary School</option>
                <option value="Secondary School Certificate(SSC)">Secondary School Certificate(SSC)</option>
              </select>
              {/* <p className="errors">{!!errors.Education && "*required"}</p> */}
            </td>
            </tr>


           <tr>
            <td>
          <label>Family Details</label>
            </td>
            <td>:</td>
            <td>
            <input type="text"
            name="FamilyDetails"
            id="FamilyDetails"
            placeholder="Enter your Family Details"
            {...register('FamilyDetails')}
            />
            {/* <p className="errors">{!!errors.FamilyDetails && "*family details required"}</p> */}
            </td>
            </tr>

            <tr>
            <td>
          <label>Gender </label>
            </td>
            <td>:</td>
            <td>
              <select id="gender"  {...register('Gender'
          )}
          >
                <option value="">--Select Gender--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {/* <p className="errors">{!!errors.Gender && "*Gender required"}</p> */}
            </td>
            </tr>


            <tr>
            <td>
          <label>Height</label>
            </td>
            <td>:</td>
            <td>
            <input type="number"
            name="Height"
            id="Height"
            placeholder="Enter your Height"
            {...register('Height')}
            />
            {/* <p className="errors">{!!errors.HobbiesAndInterests && "*required"}</p> */}
            </td>
            </tr>


            <tr>
            <td>
          <label>Weight</label>
            </td>
            <td>:</td>
            <td>
            <input type="text"
            name="Weight"
            id="Weight"
            placeholder="Enter your Weight"
            {...register('Weight')}
            />
            {/* <p className="errors">{!!errors.HobbiesAndInterests && "*required"}</p> */}
            </td>
            </tr>


            <tr>
            <td>
          <label>Hobbies and Interests</label>
            </td>
            <td>:</td>
            <td>
            <input type="text"
            name="HobbiesAndInterests"
            id="HobbiesAndInterests"
            placeholder="Enter your Hobbies and Interests"
            {...register('HobbiesAndInterests')}
            />
            {/* <p className="errors">{!!errors.HobbiesAndInterests && "*required"}</p> */}
            </td>
            </tr>


          <tr>
            <td>
          <label>Marital-Status</label>
            </td>
            <td>:</td>
            <td>
              <select    {...register('MaritalStatus'
          )}
          >
                <option value="">--Select Marital-Status--</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
              </select>
              {/* <p className="errors">{!!errors.MaritalStatus && "*required"}</p> */}
            </td>
            </tr> 


            <tr>
            <td>
          <label>Mother-Tongue</label>
            </td>
            <td>:</td>
            <td>
              <select {...register('MotherTongue'
          )}
          >
                <option value="">--Select Mother-Tongue--</option>
                <option value="Hindi">Hindi</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Tamil">Tamil</option>
                <option value="kannada">kannada</option>
              </select>
              {/* <p className="errors">{!!errors.MotherTongue && "*required"}</p> */}
            </td>
            </tr> 


            <tr>
            <td>
          <label>Occupation</label>
            </td>
            <td>:</td>
            <td>
            <input type="text"
            name="Occupation"
            id="Occupation"
            placeholder="Enter your Occupation"
            {...register('Occupation'
          )}
            />
            {/* <p className="errors">{!!errors.Occupation && "*Occupation required"}</p> */}
            </td>
            </tr>


            <tr>
            <td>
          <label>Religion </label>
            </td>
            <td>:</td>
            <td>
              <select {...register('Religion'
          )}
          >
                <option value="">--Select Religion--</option>
                <option value="Hindu">Hindu</option>
                <option value="Christian">Christian</option>
                <option value="Muslim">Muslim</option>
              </select>
              {/* <p className="errors">{!!errors.Religion && "*required"}</p> */}
            </td>
            </tr> 


            <tr>  
            <td>
          <label>State</label>
            </td>
            <td>:</td>
            <td>
              <select {...register('State'
          )}
          >
                <option value="">--Select State--</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradsh">Arunachal Pradsh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Kerala">Kerala</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Jharkhand">Jharkhand</option>
              </select>
              {/* <p className="errors">{!!errors.State && "*required"}</p> */}
            </td>
            </tr>

            <tr>
            <td>
          <label>Sub Caste</label>
            </td>
            <td>:</td>
            <td>
            <input type="text"
            name="SubCaste"
            id="SubCaste"
            placeholder="Enter your Sub Caste"
            {...register('SubCaste'
          )}
            />
            {/* <p className="errors">{!!errors.SubCaste && "*Sub Caste required"}</p> */}
            </td>
            </tr>




           <tr>
            <td>
          <label>Preferred Partner Age Range</label>
            </td>
            <td>:</td>
            <td>
              <select {...register('PreferredPartnerAgeRange'
          )}
          >
                <option value="">--Select--</option>
                <option value="22-25">22-25</option>
                <option value="26-29">26-29</option>
                <option value="30-33">30-33</option>
                <option value="34-37">34-37</option>
                <option value="38-41">38-41</option>
                <option value="42-45">42-45</option>
                <option value="46-50">46-50</option>
              </select>
              {/* <p className="errors">{!!errors.PreferredPartnerAgeRange && "*required"}</p> */}
            </td>
            </tr>

            <tr>
            <td>
          <label>Preffered Partner Caste</label>
            </td>
            <td>:</td>
            <td>
            <input type="text"
            name="PreferredPartnerCaste"
            id="PreferredPartnerCaste"
            placeholder="Enter your Preferred Partner Caste"
            {...register('PreferredPartnerCaste'
          )}
            />
            {/* <p className="errors">{!!errors.PreferredPartnerCaste && "* required"}</p> */}
            </td>
            </tr>

            <tr>  
            <td>
          <label>Preffered Partner Location</label>
            </td>
            <td>:</td>
            <td>
              <select {...register('PreferredPartnerLocation'
          )}
          >
                <option value="">--Select Location--</option>
                <option value="India">India</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Japan">Japan</option>
              </select>
              {/* <p className="errors">{!!errors.PreferredPartnerLocation && "*required"}</p> */}
            </td>
            </tr>
        
            
            
            <tr>
            <td>
          <label>Preffered Partner Religion</label>
            </td>
            <td>:</td>
            <td>
              <select {...register('PreferredPartnerReligion'
          )}
          >
                <option value="">--Select Religion--</option>
                <option value="Hindu">Hindu</option>
                <option value="Christian">Christian</option>
                <option value="Muslim">Muslim</option>
              </select>
              {/* <p className="errors">{!!errors.PreferredPartnerReligion && "*required"}</p> */}
            </td>
            </tr> 

          

            <tr>
            <td>
          <label></label>
            </td>
            <td></td>
            <td>
            <input type="hidden" {...register('ProfilePictureUrl')} readOnly 
              onChange={onFileChange}
            />
            {/* <p className="errors">{!!errors.ProfilePictureUrl && "*required"}</p> */}
            </td>
            </tr>

        </table>

      
              
                <button className="button21" type="submit">Update</button>
                <br/><br/>
                <button className="button21" type="button" onClick={()=>handleReset()}>Reset</button>
            
      </form>

      </div>

      <div class="parent-container79">
    <div class="check">
        <h2>Check Out Our Recent Work On Instagram</h2>
        <div class="insta">
            <a href="" target="_self" rel="noopener noreferrer">Follow Us On Instagram</a>
        </div>
    </div>
    <div class="container79">
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


<div class="parent-container80">
    <div class="container80">
    
            <div class="find">
                <h2>Find Your Soulmate Today</h2>
            </div>
            <p class="info54">Join The IndianWedding today and begin your search for a compatible life partner in the Indian community.</p>
            <div class="button20">
                <a href="" target="_self" rel="noopener noreferrer" role="button" onClick={() => navigate('/contact')}>
                    <span>Join Now</span>
                </a>
            </div>
    
    </div>
</div>


<div class="parent-container81">
<div class="contact-container8">
    <div class="contact-item8">
        <h2>Phone</h2>
        <p>202-555-0188</p>
    </div>
    <div class="contact-item8">
        <h2>Follow Us</h2>
        <div class="social-icons8">
            <ul>
                <li><a href="" target="blank"><i class="fab fa-facebook"></i></a></li>
                <li><a href="" target="blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href=""><i class="fab fa-youtube" target="blank"></i></a></li>
            </ul>
        </div>
    </div>
    <div class="contact-item8">
        <h2>Email</h2>
        <p>contact@example.com</p>
    </div>
</div>
</div>



    
<div class="parent-container82">

<nav class="container82">

        <ul id="info55">
                <li><a href="" onClick={() => navigate('/home')}>Home</a></li>
                <li><a href="" onClick={() => navigate('/about')}>About Us</a></li>
                <li><a href="" onClick={() => navigate('/services')}>Services</a></li>
                <li><a href=""onClick={() => navigate('/portfolio')}>Portfolio</a></li>
                <li><a href="" onClick={() => navigate('/testimonials')}>Testimonials</a></li>
                <li><a href="" onClick={() => navigate('/blog')}>Blog</a></li>
                <li><a href="" onClick={() => navigate('/contact')}>Contact</a></li>
        </ul>

</nav>

</div>			
                  
                            

<div class="parent-container83">
<div class="container83">
    <p>Copyright © 2024 theindianwedding</p>
</div>			
</div>
    </div>

    
  );
};
export default Profile;
