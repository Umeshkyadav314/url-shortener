import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-700 mt-10">
      &copy;2024 All Right is Reserved
      </div>
    </div>
  );
};

export default AppLayout;
