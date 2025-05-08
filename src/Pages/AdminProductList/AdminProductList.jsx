import AdminHeader from "../../Components/AdminHeader/AdminHeader";
import "./AdminProductList.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Swal from "sweetalert2";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { useEffect, useState } from "react";
import {
  changeProductStatus,
  deleteProduct,
  getAllProducts,
} from "../../services/productApiServices";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import AdminProductPreviewModal from "../../Components/AdminProductPreviewModal/AdminProductPreviewModal";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";

export default function AdminProductList() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [products, setProducts] = useState([]);
  const [openPreviewModal, setOpenPreviewModal] = useState(false);
  const [modalPreviewData, setModalPreviewData] = useState({});
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    getAllProducts(setProducts);
  }, [changed]);

  function closePreviewModal() {
    setOpenPreviewModal(false);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // function to soft delete the product by admin
  function deleteProductItem(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to delete the product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      allowOutsideClick: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteProduct(id, setChanged);
        if (response) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  }

  // function to change the status of the product
  function changeStatus(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be change the product status!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
      allowOutsideClick: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log("deleting", id);
        const response = await changeProductStatus(id, setChanged);
        if (response) {
          Swal.fire({
            title: "Change successful!",
            text: "Your file status has changed successfully.",
            icon: "success",
          });
        }
      }
    });
  }

  return (
    <div className="admin-product-list-main-container">
      <AdminProductPreviewModal
        open={openPreviewModal}
        handleClose={closePreviewModal}
        data={modalPreviewData}
      />
      <div className="admin-product-list-container">
        <AdminHeader title="Product List" />
        {products && products.length > 0 ? (
          <div>
            <TableContainer
              component={Paper}
              sx={{ boxShadow: "0px 2px 10px #E0E0E0" }}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Sl No.</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Stock</TableCell>
                    <TableCell align="center">Discount</TableCell>
                    <TableCell align="center">Image</TableCell>
                    <TableCell align="center">Rating</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product, index) => (
                    <TableRow
                      key={product._id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        padding: "0px",
                      }}
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell align="center">
                        {product.productName}
                      </TableCell>
                      <TableCell align="center">
                        ₹{product.productPrice}
                      </TableCell>
                      <TableCell align="center">
                        {product.productStock}
                      </TableCell>
                      <TableCell align="center">
                        {product.productDiscount}%
                      </TableCell>
                      <TableCell align="center">
                        <div className="admin-product-list-image-container">
                          <img
                            src={`${import.meta.env.VITE_BASE_URL}/${
                              product.productImages[0]
                            }`}
                            alt="product-image"
                            className="admin-product-list-image"
                          />
                        </div>
                      </TableCell>
                      <TableCell
                        align="center"
                        className="admin-product-rating"
                      >
                        {product.productRating}
                        <MdStarRate color="gold" />
                      </TableCell>
                      <TableCell align="center">
                        <button
                          type="button"
                          onClick={() => {
                            changeStatus(product._id);
                          }}
                          className={`${
                            product.status
                              ? "product-active-btn"
                              : "product-inactive-btn"
                          }`}
                        >
                          {product.status ? "Active" : "Inactive"}
                        </button>
                      </TableCell>
                      <TableCell align="center">
                        <div className="admin-product-list-action-icons-container">
                          <FaRegEye
                            size={18}
                            onClick={() => {
                              setOpenPreviewModal(true);
                              setModalPreviewData(product);
                            }}
                          />
                          <Link
                            to={`/admin/edit-product/${product._id}`}
                            state={{ product }}
                          >
                            <MdOutlineEdit size={18} color="blue" />
                          </Link>
                          <IoTrashOutline
                            size={18}
                            color="red"
                            onClick={() => deleteProductItem(product?._id)}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              count={products.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              sx={{
                border: "1px solid #E0E0E0",
                background: "white",
                boxShadow: "0px 2px 10px #E0E0E0",
              }}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        ) : (
          // implementation of no data found
          <></>
        )}
      </div>
    </div>
  );
}
