import { Outlet, useNavigate, useSearchParams } from "react-router";
import AppSidebar from "./components/app-sidebar";
import { SidebarProvider } from "./components/ui/sidebar";
import AddBudgetsidebar from "./components/budget-sidebar";
import { ChevronsLeftIcon } from "lucide-react";

function App() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const isBudget = searchParams.get("budget") === "true";

  if (isBudget) {
    return (
      <SidebarProvider className="bg-sidebar">
        <AddBudgetsidebar />
        <main className=" rounded-tl-3xl ml-2 px-6 py-4 bg-white w-full shadow-2xs border border-sidebar-border">
          <button
            className="bg-gray-300 flex gap-2 items-center text-black cursor-pointer capitalize px-4 py-2 rounded-md text-sm"
            onClick={() => navigate(-1)}
          >
            <ChevronsLeftIcon className="size-4" />
            cancel
          </button>
        </main>
      </SidebarProvider>
    );
  }

  return (
    <div className="flex h-screen bg-sidebar pt-2">
      <SidebarProvider className="bg-sidebar">
        <AppSidebar />
        <main className=" rounded-tl-3xl ml-2 px-6 py-4 bg-white w-full shadow-2xs border border-sidebar-border">
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
}

export default App;
