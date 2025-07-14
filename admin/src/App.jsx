import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Page/Dashboard";
import AllService from "./Services/AllServices";
import AddService from "./Services/AddService";
import AddTestiminoal from "./testiminoal/AddTestiminoal";
import AllTestiminoal from "./testiminoal/AllTestiminoal";
import UpdateService from "./Services/UpdateService";
import UpdateTestiminoal from "./testiminoal/UpdateTestiminoal";
import Login from "./User/Login";
import Profile from './User/Profile';
function App() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <div className="min-h-screen bg-gray-100">
      {/* If NOT on login page, show sidebar and navbar */}
      {!isLoginPage ? (
        <div className="flex">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <div className="p-6 flex-1 overflow-y-auto">
              <AppRoutes />
            </div>
          </div>
        </div>
      ) : (
        // On login page, just show the route content without layout
        <div className="flex justify-center items-center min-h-screen">
          <AppRoutes />
        </div>
      )}
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/services/all" element={<AllService />} />
      <Route path="/services/add" element={<AddService />} />
      <Route path="/services/edit/:id" element={<UpdateService />} />
      <Route path="/reviews/add" element={<AddTestiminoal />} />
      <Route path="/reviews/all" element={<AllTestiminoal />} />
      <Route path="/reviews/edit/:id" element={<UpdateTestiminoal />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile/>} /> 
    </Routes>
  );
}

export default App;
