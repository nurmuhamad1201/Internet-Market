import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
import { destroyToken } from "../utils/token";
import CustomModal from "./modal";

const IconWithModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

   
  const handleLogoutClick = () => {
    
    console.log('Log Out button clicked');
    destroyToken();
    navigate("/");
    handleCloseModal();
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      {modalOpen && (
        <CustomModal
          onClose={handleCloseModal}
         
          onLogoutClick={handleLogoutClick}
        />
      )}
    </div>
  );
};

export default IconWithModal;
