import "./Home.css";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { FaDollarSign } from "react-icons/fa";

import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


export default function Home() {
  const typeRefs = useRef([]);

  const [AllCars, setAllCars] = useState([]);
  const [categoryHome, setCategoryHome] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedSlug, setSelectedSlug] = useState("Toyota");

  // عند الضغط على ماركة
  const handleSelectSlug = async (slug) => {
    try {
      setSelectedSlug(slug);
      const res = await axios.get(
        `https://backend-greencar.onrender.com/categories/${slug}`
      );
      setTypes(res.data);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setTypes([]);
      Swal.fire({
        icon: "error",
        title: "لا توجد موديلات لهذه الماركة"
      });
    }
  };
  // جلب الماركات (slugs)
  useEffect(() => {
    axios
      .get("https://backend-greencar.onrender.com/categories/slugs")
      .then((res) => {
        setCategoryHome(res.data);

        // ✅ جلب البيانات للـ slug الافتراضي
        if (res.data.includes(selectedSlug)) {
          handleSelectSlug(selectedSlug);
        }
      })
      .catch((err) => console.log(err));
  }, [selectedSlug]);

  // جلب جميع السيارات
  useEffect(() => {
    axios
      .get("https://backend-greencar.onrender.com/api/cars")
      .then((res) => {
        setAllCars(res.data);
      })
      .catch((err) => console.log(err));
  }, [AllCars]);

  return (
    <div className="Box">
      <div className="continer continerHome">
        {/* ===== Hero ===== */}
        <div className="hero" id="hero">
          <div className="ovelay"></div>
          <div className="Texthero" dir="rtl">
            <div className="TextOne">
              <h2>GreenCar</h2>
              <p>
                خيارك الذكي للبحث على <br />
                سيارة احلامك
              </p>
            </div>
            <div className="TextTow">
              <p>
                اسعار السيارات الموجودة على منصة <span>GreenCar</span>منافسة
                للأسعار الموجودة في السوق المحلية
              </p>
            </div>
            <div className="hreoButton">
              <a href="#cars">تصفح جميع السيارات</a>
            </div>
          </div>
        </div>

        <div className="Space"></div>

        {/* ===== الماركات ===== */}
        <div className="CategoryCars" dir="rtl">
          <div className="TextCategoryCars" id="carstype">
            <h2>الماركات الشائعة</h2>
            <p>
              <span>GreenCar</span>
              استكشف السيارات في
            </p>
          </div>

          <div className="CategoryCarsSlug">
            <div className="CategoryCarsBox">
              {categoryHome.map((slug, index) => (
                <button
                  key={index}
                  className={`CategoryLink ${
                    selectedSlug === slug ? "active" : ""
                  }`}
                  onClick={() => handleSelectSlug(slug)}
                >
                  {slug}
                </button>
              ))}
            </div>
          </div>

          {/* ===== الموديلات ===== */}
          {types.length > 0 && (
            <div className="CategoryTypesBox">
              <h3>موديلات {selectedSlug}</h3>

              <div className="TypesGrid">
                {types.map((t, index) => (
                  <HashLink
                    smooth
                    to={`/cars/${selectedSlug}/${t.type}#CarsByType`}
                    key={index}
                  >
                    <div
                      className="TypeCard"
                      key={index}
                      ref={(el) => (typeRefs.current[index] = el)}
                    >
                      <img src={t.image} alt={t.type} />
                      <p>{t.type}</p>
                    </div>
                  </HashLink>
                ))}
              </div>

              {/* 🔵 الدوائر */}
              <div className="DotsBox">
                {types.map((_, index) => (
                  <span
                    key={index}
                    className="Dot"
                    onClick={() => {
                      typeRefs.current[index]?.scrollIntoView({
                        behavior: "smooth",
                        inline: "center",
                        block: "nearest"
                      });
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="Space"></div>

        <div className="ShowAllCar" dir="rtl" id="cars">
          <div className="TextAllCars">
            <h2>
              استكشف السيرات المعروضة في معرض
              <span>GreenCar</span>
            </h2>
            <p>ابحث عن السيارة المثالية التي تناسب احتياجاتك وميزانيتك</p>
          </div>
          <div className="GridCar">
            {AllCars.map((car) => (
              <Link
                to={`/cars/${car._id}`}
                key={car._id}
                style={{ textDecoration: "none" }}
              >
                <div className="CardCar">
                  <img src={car.images[0]} alt={`${car.brand} ${car.model}`} />
                  <div className="Ditals">
                    <h2>{car.brand}</h2>
                    <h3>{car.model}</h3>
                    <p>
                      <FaDollarSign style={{ color: "#0dbb61" }} />
                      {car.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="Space"></div>
        <div className="Services" dir="rtl" id="Services">
          <div className="ServicesOne">
            <div className="overley"></div>
            <div className="titleServicesOne">
              <h3>مراكز الصيانة المتخصصة بسيارتك</h3>
              <p>أكبر تجمع لمراكز الصيانة المعتمدة في سوريا</p>
            </div>
            <div className="buttonServicesOne">
              <HashLink smooth to="CarMaintenanceCenter#MaintenanceCenter">
                استكشف جميع المراكز
              </HashLink>
            </div>
          </div>
          <div className="ServicesTow">
            <div className="overley"></div>
            <div className="titleServicesTow">
              <h3>ابحث عن قطع غيار لسيارتك</h3>
              <p>جميع متاجر قطع الغيار في مكان واحد</p>
            </div>
            <div className="buttonServicesTow">
              <HashLink smooth to="CarPartsStores#PartsStores">
                استكشف جميع المتاجر
              </HashLink>
            </div>
          </div>
        </div>
        <div className="Space"></div>
      </div>
    </div>
  );
}
