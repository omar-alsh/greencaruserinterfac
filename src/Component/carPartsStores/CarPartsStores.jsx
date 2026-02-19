import "./CarPartsStores.css";


import axios from "axios";
import { useEffect, useState } from "react";

import ImageOne from "../../../public/sidBar-Image-greencar1.jpg";
import ImageTow from "../../../public/sidBar-Imag-greencar2.avif";
import { FaLocationDot } from "react-icons/fa6";





// المتاجر
export default function CarPartsStores() {
    const [PartsStores, setPartsStores] = useState([]);
  
    useEffect(() => {
      axios
        .get(
          "https://backend-greencar.onrender.com/api/service-centers/auto-parts-stores"
        )
        .then((res) => setPartsStores(res.data.data))
        .catch(() => setPartsStores([]));
    }, []);
  return (
    <div className="Box" id="PartsStores">
      <div className="continer continerCarPartsStores" dir="rtl">
        <div className="bodyCarPartsStores">
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
          <div className="ShowCarPartsStores" dir="rtl">
            <div className="GridCarPartsStores">
              {PartsStores.map((center) => (
                <div className="CardCarPartsStores" key={center._id}>
                  <img src={center.image}></img>
                  <div className="DitalsCarPartsStores">
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
