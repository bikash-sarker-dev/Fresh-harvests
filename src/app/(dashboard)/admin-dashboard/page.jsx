import { FaChartBar, FaGlobe, FaShoppingCart, FaStore } from "react-icons/fa";
import DashboardCard from "./components/DashboardCard";
import DashboardCharts from "./components/DashboardCharts";
export default function UserDashboard() {
  return (
    <div>
      <div>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-100 ">
          <DashboardCard
            icon={<FaGlobe size={24} />}
            value="$12,145"
            label="Income status"
            progress={60}
            color="blue"
          />
          <DashboardCard
            icon={<FaShoppingCart size={24} />}
            value="1576"
            label="January's Sales"
            progress={49}
            color="green"
          />
          <DashboardCard
            icon={<FaChartBar size={24} />}
            value="$8947"
            label="Payouts"
            progress={18}
            color="yellow"
          />
          <DashboardCard
            icon={<FaStore size={24} />}
            value="178"
            label="Available Stores"
            progress={74}
            color="sky"
          />
        </div>
      </div>
      <div>
        <DashboardCharts />
      </div>
    </div>
  );
}
