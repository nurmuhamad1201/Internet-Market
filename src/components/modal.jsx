import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { getToken, destroyToken } from '../utils/token';

const CustomModal = ({ onClose, onAccountClick }) => {
  const userId = getToken()?.sid;
  const isAuthorized = Boolean(userId);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    destroyToken();
    navigate('/');
    onClose();
    window.location.reload();
  };

  return (
    <Modal
      open
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          textAlign: 'center',
        }}
        className="bg-white dark:bg-gray-800 dark:border-white"
      >
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Choose an action:</h2>
        <Link 
          to={isAuthorized ? `/acaunt/${userId}` : '/login'} 
          style={{ textDecoration: 'none' }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '80%', m: 'auto', mb: 2 }}
          >
            Account
          </Button>
        </Link>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: '80%', m: 'auto', mb: 2 }}
          onClick={handleLogoutClick}
        >
          Log Out
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ width: '80%', m: 'auto' }}
          onClick={onClose}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default CustomModal;
