import { useState } from 'react';

const Modal = ({ onClose, onAccountClick, onLogoutClick }) => {
  const [modalPosition, setModalPosition] = useState({ left: 0, top: 0 });

  const showModal = (event) => {
    const svgIcon = event.target.getBoundingClientRect();
    const modalLeft = svgIcon.left + 50;
    const modalTop = svgIcon.top + 50;
    setModalPosition({ left: modalLeft, top: modalTop });
  };

  return (
    <div
      className="absolute flex flex-col right-[20px] items-center justify-center bg-black bg-opacity-50"
      style={{ left: modalPosition.left, top: modalPosition.top }}
    >
      <div className="bg-white rounded-lg p-6 max-w-md">
        <h2 className="text-lg font-semibold mb-4">Choose an action:</h2>
        <button
          className="bg-blue-500 w-[80%] m-auto hover:bg-blue-600 text-white py-2 px-4 rounded-lg mr-2"
          onClick={onAccountClick}
        >
          Account
        </button>
        <button
          className="bg-blue-500 w-[80%] m-auto hover:bg-blue-600 text-white py-2 px-4 rounded-lg mr-2"
          onClick={onLogoutClick}
        >
          Log Out
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 w-[80%] m-auto text-white py-2 px-4 rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
