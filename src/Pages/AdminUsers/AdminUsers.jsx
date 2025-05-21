import { useEffect } from "react";
import AdminHeader from "../../Components/AdminHeader/AdminHeader";
import "./AdminUsers.css";
import { getAllUsers } from "../../services/adminApiServices";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  console.log(users, "users");

  return (
    <div className="admin-users-list-main-container">
      <AdminHeader title="users" />
      <div className="admin-users-list-table-section">
        <TableContainer
          component={Paper}
          sx={{ boxShadow: "0px 2px 10px #E0E0E0" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Sl No.</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow
                  key={user._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">
                    {`${user?.firstName} ${user?.lastName}`}
                  </TableCell>
                  <TableCell align="center">{user?.email}</TableCell>
                  <TableCell align="center">
                    <button
                      className={`admin-table-user-status ${
                        user?.status ? "active" : "inactive"
                      }`}
                    >
                      {user?.status ? "Active" : "Inactive"}
                    </button>
                  </TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={users.length}
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
    </div>
  );
}
