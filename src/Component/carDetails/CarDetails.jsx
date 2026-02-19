import "./CarDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import axios from "axios";

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { LuTag } from "react-icons/lu";
import { LuCar } from "react-icons/lu";
import { BiCalendarAlt } from "react-icons/bi";
import { LuDollarSign } from "react-icons/lu";
import { MdOutlineSpeed } from "react-icons/md";
import { BiGasPump } from "react-icons/bi";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOutlineColorLens } from "react-icons/md";
import { FaBolt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa"; // sold
import { GiMechanicGarage } from "react-icons/gi";
import { CiDatabase } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

import { MdSpeed } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [cars, setCars] = useState([]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    axios
      .get(`https://backend-greencar.onrender.com/api/cars/${id}`)
      .then((res) => {
        setCar(res.data);
        setImages(res.data.images || []);
        setCurrentIndex(0); // مهم
      })
      .catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    if (!car) return;
    axios
      .get(
        `https://backend-greencar.onrender.com/api/cars/category/${car.brand}/${car.model}`
      )
      .then((res) => setCars(res.data))
      .catch(() => setCars([]));
  }, [car]);
  // console.log(car)
  if (!car) return <p>Loading...</p>;
  // const { engine } = car;

  const createWhatsAppLink = () => {
    const phoneNumber = "963947584270";

    const message =
      `مرحباً، أرغب بشراء السيارة التالي:\n\n` +
      `الموديل:${car.model}\n` +
      `${car.images[0]}\n` +
      ` كيلومترات السيارة:${car.mileage}\n` +
      `سعر السيارة:${car.price}\n`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="Box" id="CarDetails">
      <div className="continer continerCarDetails" dir="rtl">
        <div className="MainBoxCarDetails">
          <div className="CarDetailsColumn">
            <div className="CarImageDetails">
              {images.length > 0 && (
                <>
                  <img
                    src={images[currentIndex]}
                    alt={`${car.brand}-${currentIndex}`}
                  />

                  {images.length > 1 && (
                    <>
                      <button className="sliderBtn prev" onClick={prevSlide}>
                        <FaArrowRight style={{ cursor: "pointer" }} />
                      </button>
                      <button className="sliderBtn next" onClick={nextSlide}>
                        <FaArrowLeft style={{ cursor: "pointer" }} />
                      </button>

                      <div className="dots">
                        {images.map((_, index) => (
                          <span
                            key={index}
                            className={`dot ${
                              index === currentIndex ? "active" : ""
                            }`}
                            onClick={() => setCurrentIndex(index)}
                          ></span>
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
            <div className="CarTextDetails">
              <h3>معلومات السيارة</h3>
              <div className="DetailsCar">
                <div className="DetailsClumnLeft">
                  <div className="TextDetails">
                    <div className="Icon">
                      <LuTag style={{ color: "#0dbb61" }} />
                    </div>
                    <div className="Text">
                      <p>الماركة</p>
                      <h2>{car.brand}</h2>
                    </div>
                  </div>
                  <div className="TextDetails">
                    <div className="Icon">
                      <BiCalendarAlt style={{ color: "#0dbb61" }} />
                    </div>
                    <div className="Text">
                      <p>السنة</p>
                      <h2>{car.year}</h2>
                    </div>
                  </div>
                  <div className="TextDetails">
                    <div className="Icon">
                      <GiMechanicGarage style={{ color: "#0dbb61" }} />
                    </div>
                    <div className="Text">
                      <p>سعة المحرك</p>
                      <h2>{car.engine.capacity}</h2>
                    </div>
                  </div>
                  <div className="TextDetails">
                    <div className="Icon">
                      <GiGearStickPattern style={{ color: "#0dbb61" }} />
                    </div>
                    <div className="Text">
                      <p>ناقل الحركة</p>
                      <h2>{car.transmission}</h2>
                    </div>
                  </div>
                  <div className="TextDetails">
                    <div className="Icon">
                      <CiDatabase style={{ color: "#0dbb61" }} />
                    </div>
                    <div className="Text">
                      <p>الاسطوانات</p>
                      <h2>{car.engine.cylinders}</h2>
                    </div>
                  </div>
                  <div className="TextDetails">
                    <div className="Icon">
                      <FaRegStar style={{ color: "#0dbb61" }} />
                    </div>
                    <div className="Text">
                      <p>وصف السيارة</p>
                      <h2>{car.description}</h2>
                    </div>
                  </div>
                  <div className="TextDetails">
                    <div className="Icon">
                      <FaTimesCircle style={{ color: "#0dbb61" }} />
                    </div>
                    <div className="Text">
                      <p>حالة السيارة</p>
                      <h2>{car.status}</h2>
                    </div>
                  </div>
                  <div className="TextDetails">
                    <div className="Icon">
                      <LuDollarSign style={{ color: "#0dbb61" }} />
                    </div>
                    <div className="Text">
                      <p>السعر</p>
                      <h2>{car.price}</h2>
                    </div>
                  </div>
                </div>
                <div className="DetailsClumnRight">
                  <div className="TextDetails">
                    <div className="Icon">
                      <LuCar style={{ color: "#0dbb61" }} />
                    </div>
                    <div className="Text">
                      <p>الموديل</p>
                      <h2>{car.model}</h2>
                    </div>
                  </div>
                  <div className="TextDetails">
                    <div className="Icon">
                      <MdOutlineSpeed style={{ color: "#0dbb61" }} />
                    </div>
                    <div className="Text">
                      <p>الكيلومترات</p>
                      <h2>{car.mileage}</h2>
                    </div>
                  </div>
                  <div className="TextDetails">
                    <div className="Icon">
                      <BiGasPump style={{ color: "#0dbb61" }} />
                    </div>
                    <div className="Text">
                      <p>نوع الوقود</p>
                      <h2>{car.fuelType}</h2>
                    </div>
                  </div>
                  <div className="TextDetails">
                    <div className="Icon">
                      <MdOutlineColorLens style={{ color: "#0dbb61" }} />
                    </div>
                    <div className="Text">
                      <p>لون السيارة</p>
                      <h2>{car.color}</h2>
                    </div>
                  </div>
                  <div className="TextDetails">
                    <div className="Icon">
                      <FaBolt style={{ color: "#0dbb61" }} />
                    </div>
                    <div className="Text">
                      <p>القدرة الحصانية</p>
                      <h2>{car.engine.horsepower}</h2>
                    </div>
                  </div>
                  <div className="TextDetails">
                    <div className="Icon">
                      <FaCheckCircle style={{ color: "#0dbb61" }} />
                    </div>
                    <div className="Text">
                      <p>ميزات السيارة</p>
                      <h2>{car.features}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Contact">
            <div className="ContactDetails">
              <div className="ContactText">
                <h2>
                  <span>{car.brand}</span>
                  <span>{car.model}</span>
                </h2>
                <h2>
                  <LuDollarSign style={{ color: "#0dbb61" }} />
                  {car.price}
                </h2>
              </div>
              <div className="ContactNumber">
                <button onClick={createWhatsAppLink}>
                  <FaWhatsapp />
                  تواصل عبر الواتساب
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Similarcars">
          <h2>سيارات ذات صلة</h2>
          <div className="MainBoxSimilarcars">
            {cars.map((car) => (
              <HashLink
                to={`/cars/${car._id}#CarDetails`}
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
              </HashLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
