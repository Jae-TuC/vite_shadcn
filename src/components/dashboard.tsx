import { useSearchParams } from "react-router";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const handleAddBudget = () => {
    searchParams.set("budget", "true");
    setSearchParams(searchParams);
  };

  const handleCloseBudget = () => {
    if (searchParams.get("budget") === "true") {
      navigate(-1);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-medium">Dashboard</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm"
        onClick={handleAddBudget}
      >
        Add Budget
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm"
        onClick={handleCloseBudget}
      >
        Close Budget
      </button>
      {searchParams.get("budget") === "true" && (
        <div className="flex items-center gap-2">
          <p className="text-sm">Budget: {searchParams.get("budget")}</p>
        </div>
      )}
    </div>
  );
};
export default Dashboard;
