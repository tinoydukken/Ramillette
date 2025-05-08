import "./AdminProductPreviewModal.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { IoClose } from "react-icons/io5";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "12px",
};

export default function AdminProductPreviewModal(Props) {
  const { open = false, handleClose = () => {}, data = {} } = Props;

  // console.log(data, "data");

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="admin-product-preview-modal">
          <div className="admin-product-details-preview-modal-header">
            <h2>Product Name</h2>
            <button
              className="admin-product-details-preview-modal-close-btn"
              onClick={handleClose}
            >
              <IoClose size={18} />
            </button>
          </div>
          <div className="product-content-section">
            <div className="product-content-top-section">
              <div className="top-left-section">
                hello
              </div>
              <div className="top-right-section">
                hai
              </div>  
            </div>
            <div className="product-content-bottom-section"></div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
