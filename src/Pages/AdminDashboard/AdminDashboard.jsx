import DashBoardSidebar from "../../Components/DashBoardSidebar/DashBoardSidebar";
import InnerBanner from "../../Components/InnerBanner/InnerBanner";
import NavBar from "../../Components/NavBar/NavBar";
import OrdersTable from "../../Components/OrdersTable/OrdersTable";
import Topheader from "../../Components/TopHeader/TopHeader";
import ProfileInfoSection from "../../Components/ProfileInfoSection/ProfileInfoSection";
import WishlistSection from "../../Components/WishlistSection/WishlistSection";
import './AdminDashboard.css'
import DashAddressList from "../../Components/DashAddressList/DashAddressList";
import PaymentMethods from "../../Components/PaymentMethods/PaymentMethods";

export default function AdminDashboard() {
  return (
    <>
      <div className="Admin-dash-page">
        <Topheader />
        <NavBar />
        <div className="Admin-dash-board-wrap">
          <InnerBanner />
          <div className="wrapper">
            <div className="DashBoardPageWrappper">
              <DashBoardSidebar />
              <PaymentMethods/>
              {/* <DashAddressList/>
              <ProfileInfoSection/>
              <OrdersTable/>
              <WishlistSection/>
               <DashAddressList/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
