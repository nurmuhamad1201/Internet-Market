import   { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useUpdateProfileMutation } from "../services/api";

// eslint-disable-next-line react/prop-types
const EditProfileModal = ({ isOpen, onClose, profile, accessToken }) => {
  // eslint-disable-next-line react/prop-types
  const [firstName, setFirstName] = useState(profile.firstName);
  // eslint-disable-next-line react/prop-types
  const [lastName, setLastName] = useState(profile.lastName);
  // eslint-disable-next-line react/prop-types
  const [email, setEmail] = useState(profile.email);
  const [phoneNumber, setPhoneNumber] = useState(profile.phoneNumber);
  const [dob, setDob] = useState(profile.dob);
  const [image, setImage] = useState(null);

  const [mutate] = useUpdateProfileMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("Image", image); // Ensure image is correctly appended
    formData.append("FirstName", firstName);
    formData.append("LastName", lastName);
    formData.append("Email", email);
    formData.append("PhoneNumber", phoneNumber);
    formData.append("Dob", dob); // Ensure dob is in 'YYYY-MM-DD' format

    try {
      const response = await mutate({ formData, accessToken });

      // Handle success response (optional)
      console.log("Profile updated successfully:", response);

      // Close the modal after successful update
      onClose();
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error as needed
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="dark:bg-gray-900"
    >
      <Box
        sx={() => ({
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        })}
        className="dark:bg-gray-800 dark:text-white"
      >
        <h2 className="dark:text-gray-300">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              className: "dark:text-gray-400"
            }}
            InputProps={{
              className: "dark:text-white dark:bg-gray-700"
            }}
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              className: "dark:text-gray-400"
            }}
            InputProps={{
              className: "dark:text-white dark:bg-gray-700"
            }}
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              className: "dark:text-gray-400"
            }}
            InputProps={{
              className: "dark:text-white dark:bg-gray-700"
            }}
          />
          <TextField
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              className: "dark:text-gray-400"
            }}
            InputProps={{
              className: "dark:text-white dark:bg-gray-700"
            }}
          />
          <TextField
            label="Date of Birth"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              className: "dark:text-gray-400"
            }}
            InputProps={{
              className: "dark:text-white dark:bg-gray-700"
            }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="my-4 dark:text-gray-400 dark:bg-gray-800"
          />
          <Button type="submit" variant="contained" color="primary" className="dark:bg-blue-500">
            Save
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default EditProfileModal;
