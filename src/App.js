import { Outlet } from "react-router-dom";
import NavItems from "./components/NavItems";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
    <NavItems />
    <div className="min-vh-100">
    <Outlet />
    </div>
    <Footer/>
    </div>
  );
}

export default App;
