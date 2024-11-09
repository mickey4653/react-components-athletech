const Modal = (props) => {
  const { isOpen, onClose, children } = props;
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <button onClick={onClose} className="close-btn">
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;