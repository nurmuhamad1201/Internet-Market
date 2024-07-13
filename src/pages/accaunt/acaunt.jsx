import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProfileQuery } from '../../services/api';
import EditProfileModal from '../../components/editProfile';

const Account = () => {
  const { id } = useParams();
  const { data: response, error, isLoading } = useGetProfileQuery(id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="text-xl font-semibold">Loading...</div>
    </div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="text-xl font-semibold text-red-600">Error loading profile: {error.message}</div>
    </div>;
  }

  const profile = response.data;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Account</h1>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">Profile Information</h2>
        <div className="flex items-center space-x-4">
          <img
            className="w-24 h-24 rounded-full object-cover"
            src={`${import.meta.env.VITE_APP_FILES_URL}/${profile.image}`}
            alt="User profile"
          />
          <div>
            <p className="text-xl dark:text-gray-200"><span className="font-semibold">Username:</span> {profile.userName}</p>
            <p className="text-xl dark:text-gray-200"><span className="font-semibold">First Name:</span> {profile.firstName}</p>
            <p className="text-xl dark:text-gray-200"><span className="font-semibold">Last Name:</span> {profile.lastName}</p>
            <p className="text-xl dark:text-gray-200"><span className="font-semibold">Email:</span> {profile.email}</p>
            <p className="text-xl dark:text-gray-200"><span className="font-semibold">Phone Number:</span> {profile.phoneNumber}</p>
            <p className="text-xl dark:text-gray-200"><span className="font-semibold">Date of Birth:</span> {profile.dob}</p>
            <p className="text-xl dark:text-gray-200"><span className="font-semibold">User Roles:</span> {profile.userRoles.map(role => role.name).join(', ')}</p>
          </div>
        </div>
      </div>
      <button onClick={handleOpenModal} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4">
        Edit Profile
      </button>
      <EditProfileModal isOpen={isModalOpen} onClose={handleCloseModal} profile={profile} />
    </div>
  );
};

export default Account;
