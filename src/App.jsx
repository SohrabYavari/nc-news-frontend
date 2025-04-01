import { Outlet } from "react-router-dom";
import Banner from "./components/global/Banner";
import Navbar from "./components/global/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <div className="md:w-[75%] w-[85%] mx-auto">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
