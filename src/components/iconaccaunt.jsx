
import { useState } from 'react';
import Modal from './modal';
 

const IconWithModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAccountClick = () => {
    // Handle account button click logic
    console.log('Account button clicked');
    handleCloseModal();
  };

  const handleLogoutClick = () => {
    // Handle logout button click logic
    console.log('Log Out button clicked');
    handleCloseModal();
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        onClick={handleOpenModal}
        style={{ cursor: 'pointer' }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
      {modalOpen && (
        <Modal
          onClose={handleCloseModal}
          onAccountClick={handleAccountClick}
          onLogoutClick={handleLogoutClick}
        />
      )}
    </div>
  );
};

export default IconWithModal;
