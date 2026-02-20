import "./FooterGreenCarApp.css"

import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


export default function FooterGreenCarApp() {
  return (
    <div className="Box">
      <div className="continer continerFooterGreenCarApp">
        <div className="BoxMainFooter" dir="rtl">
          <div className="TextTitelFooter">
            <h2>GreenCar</h2>
            <p>خيارك الامثل للبحث عن سيارة احلامك</p>
          </div>
          <hr />
          <div className="bodyFooter">
            <div className="box-right">
              <img src="/green-car-logo.png"></img>
              <p>
                GreenCar دليلك الاول في سوريا الذي تجد فيه اكبر تشكيلة من
                السيارات الحديثة{" "}
              </p>
            </div>
            <div className="box-center">
              <h3>خدمات Greencar</h3>
              <ul>
                <li>
                  <HashLink smooth to="/#hero">
                    الرئيسية
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#carstype">
                    الماركات
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#Services">
                    مراكز الصيانة
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#cars">
                    ابحث عن سيارتك
                  </HashLink>
                </li>
              </ul>
            </div>
            <div className="box-left">
              <h3>روابط مفيدة</h3>
              <ul>
                <li>
                  <a href="">معلومات عنا</a>
                </li>
                <li>
                  <HashLink smooth to="conatct#Contact">تواصل معنا</HashLink>
                </li>
              </ul>
              <div className="socil">
                <div className="IconSocil">
                  <div>
                    <a
                      href="https://www.facebook.com/Omar ALshalak"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookSquare />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://wa.me/963982359538"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareWhatsapp />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/oalshalak"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagramSquare />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://t.me/Omar Alshalq"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTelegram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="TextEndFooter">
            <div>
              <p>جميع الحقوق محفوظة لصالح OmarAlshalq,ObadaDalal &copy; 2026</p>
            </div>
            <div>
              <p>
                <MdEmail />
                omaralshalq@gmail.com
              </p>
              <p>
                <MdEmail />
                omaralshalq@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}