import "./CarMaintenanceCenter.css";
import axios from "axios";
import { useEffect, useState } from "react";

import ImageOne from "../../../public/sidBar-Image-greencar1.jpg";
import ImageTow from "../../../public/sidBar-Imag-greencar2.avif";
import { FaLocationDot } from "react-icons/fa6";

// المراكز
export default function CarMaintenanceCenter() {
  const [MaintenanceCenter, setMaintenanceCenter] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/service-centers/auto-repair-centers")
      .then((res) => setMaintenanceCenter(res.data.data))
      .catch(() => setMaintenanceCenter([]));
  }, []);

  return (
    <div className="Box" id="MaintenanceCenter">
      <div className="continer continerCarMaintenanceCenter" dir="rtl">
        <div className="bodyCarMaintenanceCenter">
          <div className="SideBar">
            <div className="ImageOne">
              <p>
                اكبر تشكلية من السيارات لا تجدها سوا لدى
                <span>GreenCar</span>
              </p>
              <img src={ImageOne}></img>
            </div>
            <div className="ImageTow">
              <p>
                عندما تقتني سيارة من
                <span>GreenCar</span>
                لست بحاجة للذهاب الى فني الصيانة بعد الخروج
              </p>
              <img src={ImageTow}></img>
            </div>
          </div>
          <div className="ShowCarMaintenanceCenter" dir="rtl">
            <div className="GridCarMaintenanceCenter">
              {MaintenanceCenter.map((center) => (
                <div className="CardCarMaintenanceCenter" key={center._id}>
                  <img src={center.image}></img>
                  <div className="DitalsCarMaintenanceCenter">
                    <h3>{center.name}</h3>
                    <p>
                      <FaLocationDot />
                      {center.location}
                    </p>
                    <a
                      href={`https://wa.me/${center.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {center.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
