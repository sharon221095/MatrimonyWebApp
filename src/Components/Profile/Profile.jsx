import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const navigateTo = useNavigate();

  // React Hook Form hooks and methods for managing form state
  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();
  const location = useLocation();
  const profileData = location.state?.data;
  
  // States to hold initial profile data and profile image preview
  const [initialData, setInitialData] = useState({});
  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePresent, setProfileImagePresent] = useState(profileData);
  const [profileImages, setProfileImages] = useState([]);

  console.log(profileImages);



  // #1: useEffect - Fetches profile data on component mount
  useEffect(() => {
    const fetchProfileData = async () => {
      try {

        const token = localStorage.getItem('authToken');
        const response = await axios.get('http://13.126.188.208:5298/api/v1/Users/Profile', {
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



  useEffect(() => {
    console.log(initialData, "initialData");
    setValue("FirstName", initialData?.firstName)
    setValue("LastName", initialData?.lastName)
    setValue("PhoneNumber", initialData?.phoneNumber)
    setValue("AboutMe", initialData?.aboutMe)
    setValue("Address", initialData?.address)
    setValue("AnnualIncome", initialData?.annualIncome)
    setValue("Caste", initialData?.caste)
    setValue("City", initialData?.city)
    setValue("Country", initialData?.country)
    setValue("Age", initialData?.age)
    setValue("Education", initialData?.education)
    setValue("FamilyDetails", initialData?.familyDetails)
    setValue("Gender", initialData?.gender)
    setValue("Height", initialData?.height)
    setValue("Weight", initialData?.weight)
    setValue("HobbiesAndInterests", initialData?.hobbiesAndInterests)
    setValue("MaritalStatus", initialData?.maritalStatus)
    setValue("MotherTongue", initialData?.motherTongue)
    setValue("Occupation", initialData?.occupation)
    setValue("Religion", initialData?.religion)
    setValue("State", initialData?.state)
    setValue("SubCaste", initialData?.subCaste)
    setValue("PreferredPartnerAgeRange", initialData?.preferredPartnerAgeRange)
    setValue("PreferredPartnerCaste", initialData?.preferredPartnerCaste)
    setValue("PreferredPartnerLocation", initialData?.preferredPartnerLocation)
    setValue("PreferredPartnerReligion", initialData?.preferredPartnerReligion)
  }, [initialData])




  const fetchProfilePicture = async () => {
    try {
      const response = await axios.get('http://13.126.188.208:5298/api/v1/Users/GetUserImages', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
        responseType: 'arraybuffer',  // Ensures binary data
      });
  
      const uint8Array = new Uint8Array(response.data); // Convert ArrayBuffer to Uint8Array
  
      // If you're expecting JSON, you can decode the binary data to a string:
      const jsonString = new TextDecoder().decode(uint8Array);
      const images = JSON.parse(jsonString);
  
      // Set the images to state
      setProfileImages(images);
    } catch (error) {
      console.error('Error fetching profile picture:', error);
    }
  };

  useEffect(() => {
    fetchProfilePicture()
  }, [])



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
      if (profileImage) {
        formData.append('ProfileImage', profileImage);
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
        navigateTo('/home'); // Redirect to the home page on successful update
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
    setProfileImagePresent(null)
    const file = event.target.files[0];
    if (file) {
      setProfileImage(file);
    }
  };

  // Handle file input change for additional images
  const onAdditionalImagesChange = (event) => {
    const files = Array.from(event.target.files);
    if (profileImages.length + files.length <= 4) {
      const newImages = files.map((file) => file);
      setProfileImages((prevImages) => [...prevImages, ...newImages]);
    } else {
      alert('You can upload a maximum of 4 images.');
    }
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


const handleImageDelete = async (index, imageId) => {
  const token = localStorage.getItem("authToken");
  console.log("handleImageDelete - Token:", token); // Log the token here

  if (!token) {
    console.error("Token not found. Please ensure you are logged in.");
    return;
  }

  try {
    const response = await axios.delete(
      "http://13.126.188.208:5298/api/v1/users/DeleteUserImage",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          imageId: imageId,
        },
      }
    );

    console.log("Image deleted:", response.data);
    // Update UI or state here
  } catch (error) {
    console.error("Error deleting image:", error);
  }
};

  


  

  return (
    <div className="body">
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
                  src={profileImagePresent ? profileImagePresent : profileImage ? URL.createObjectURL(profileImage) : image63} // Use a placeholder if no image
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
              
  <input
    type="file"
    id="AdditionalImages"
    className="form-control mb-3"
    {...register('AdditionalImages')}
    multiple
    onChange={onAdditionalImagesChange}
  />
<div className="uploaded-images row mt-3">
  {profileImages.length > 0 &&
    profileImages.map((image, index) => (
      <div key={index} className="col-4 col-md-2 mb-3">
        <div className="image-preview position-relative" onClick={() => openPreviewModal(image.preSignedUrl)}>
          <img
            src={image.preSignedUrl}
            alt={`Preview ${index}`}
            className="img-fluid rounded shadow"
            style={{ cursor: 'pointer' }}
          />
          <button
            type="button"
            className="btn btn-danger btn-sm position-absolute top-0 end-0 m-1"
            onClick={(e) => {
              e.stopPropagation(); // Prevent click event from propagating to parent div
              handleImageDelete(index, image.id); // Pass image ID for deletion
            }}
            title="Delete Image"
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
    <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Image Preview</h5>
          <button type="button" className="btn-close" onClick={closePreviewModal}></button>
        </div>
        <div className="modal-body text-center">
          <img src={selectedImage} alt="Selected Preview" className="img-fluid rounded shadow" />
        </div>
        <div className="modal-footer justify-content-center">
          <button className="btn btn-primary" onClick={() => handleSetProfileImage(selectedImage)}>
            Set as Profile Picture
          </button>
          <button className="btn btn-secondary" onClick={closePreviewModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}

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
                  {...register('FirstName')} />
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

              </td>
            </tr>

          </table>



          <button className="button21" type="submit">Update</button>
          <br /><br />
          <button className="button21" type="button" onClick={() => handleReset()}>Reset</button>

        </form>

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
    


  );
};
export default Profile;
