// src/pages/CarsByType.jsx
import "./CarsByType.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdSpeed } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import ImageOne from "../../../public/sidBar-Image-greencar1.jpg";
import ImageTow from "../../../public/sidBar-Imag-greencar2.avif";
export default function CarsByType() {
  const { slug, type } = useParams();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://backend-greencar.onrender.com/api/cars/category/${slug}/${type}`
      )
      .then((res) => setCars(res.data))
      .catch(() => setCars([]));
  }, [slug, type]);

  return (
    <div className="Box" id="CarsByType">
      <div className="continer continerCarsByType" dir="rtl">
        <div className="Titlecomponent">
          <h2>قوائم السيارات</h2>
          <h3>
            سيارات {slug} - {type}
          </h3>
          <p>ابحث عن سيارتك المثالية</p>
        </div>
        <div className="bodyCarsByType">
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
          <div className="ShowCarByType" dir="rtl">
            <div className="GridCarByType">
              {cars.map((car) => (
                <Link
                  to={`/cars/${car._id}`}
                  key={car._id}
                  style={{ textDecoration: "none" }}
                >
                  <div className="CardCarByType" key={car._id}>
                    <img src={car.images[0]} alt="" />
                    <div className="DitalsByType">
                      <h2>{car.brand}</h2>
                      <h3>{car.model}</h3>

                      <div className="mileageAndPrice">
                        <p>
                          <FaDollarSign style={{ color: "#0dbb61" }} />{" "}
                          {car.price}
                        </p>
                        <p>
                          <MdSpeed style={{ color: "#0dbb61" }} />
                          {car.mileage}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {cars.length === 0 && <p>لا توجد سيارات لهذا الموديل</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
