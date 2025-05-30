const DashboardCard = ({ icon, value, label, progress, color }) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow p-5 w-full max-w-sm">
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-full bg-${color}-100 text-${color}-600`}>
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-semibold">{value}</h3>
            <p className="text-sm text-gray-500">{label}</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between text-xs font-medium text-gray-500 mb-1">
            <span>TARGET</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded h-2">
            <div
              className={`bg-${color}-500 h-2 rounded`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
