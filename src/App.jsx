import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBarGreenCarApp from "./Component/navbarGreenCarApp/NavBarGreenCarApp";
import FooterGreenCarApp from "./Component/footerGreenCarApp/FooterGreenCarApp";
import Home from "./Component/home/Home";
import CarsByType from "./Component/carsByType/CarsByType";
import CarDetails from "./Component/carDetails/CarDetails";
import Contact from "./Component/contact/Contact";
import CarMaintenanceCenter from "./Component/carMaintenanceCenter/CarMaintenanceCenter";
import CarPartsStores from "./Component/carPartsStores/CarPartsStores";

function App() {
  return (
    <>
      <NavBarGreenCarApp />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars/:slug/:type" element={<CarsByType />} />
        <Route path="cars/:id" element={<CarDetails />} />
        <Route path="conatct" element={<Contact />} />
        <Route path="CarMaintenanceCenter" element={<CarMaintenanceCenter />} />
        <Route path="CarPartsStores" element={<CarPartsStores />} />
      </Routes>

      <FooterGreenCarApp />
    </>
  );
}

export default App;
