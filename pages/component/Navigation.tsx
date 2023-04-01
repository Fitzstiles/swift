import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import PaymentIcon from "@mui/icons-material/Payment";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between absolute bottom-2 left-[50%] translate-x-[-50%] w-full p-2 text-gray-400 bg-gray-800">
      <div className="flex flex-col items-center justify-between  text-white">
        <DashboardIcon />
        <p className="text-xs">Dashboard</p>
      </div>
      <div className="flex flex-col items-center">
        <BarChartIcon />
        <p className="text-xs">Prices</p>
      </div>
      <div className="flex flex-col items-center">
        <PaymentIcon />
        <p className="text-xs">Pay</p>
      </div>
      <div className="flex flex-col items-center">
        <NotificationsIcon />
        <p className="text-xs">Notification</p>
      </div>
    </div>
  );
};

export default Navigation;
