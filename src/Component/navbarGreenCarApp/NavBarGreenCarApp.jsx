import "./NavBarGreenCarApp.css";
import logo from "/green-car-logo.png";

// start Icon
import { IoReorderThree } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
// End Icon
import { HashLink } from "react-router-hash-link";


import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBarGreenCarApp() {
  const [showtags, setshowtags] = useState(false);
  const [animation, setAnimation] = useState("");

  function handeltags() {
    setshowtags(true);
    setAnimation("show");
  }

  function closeTags() {
    setAnimation("hide");
  }
  return (
    <div className="Box">
      <div className="continer continerNavBar" dir="rtl">
        <div className="MainNavBar">
          <div className="LogogNavBar">
            <img src={logo}></img>
          </div>
          <div className="TagNavBar">
            <ul>
              <HashLink smooth to="/#hero">
                <li>الرئيسية</li>
              </HashLink>
              <HashLink smoothe to="/#Services">
                <li>الخدمات</li>
              </HashLink>
              <HashLink smooth to="conatct#Contact">
                <li>تواصل معنا</li>
              </HashLink>
            </ul>
          </div>
          <div></div>
          <div className="Bergar">
            <IoReorderThree onClick={handeltags} />
          </div>
        </div>
      </div>
      {showtags && (
        <div
          className={`tagsTow ${
            animation === "show" ? "animateShow" : "animateHide"
          }`}
          onAnimationEnd={() => {
            if (animation === "hide") setshowtags(false);
          }}
        >
          <div className="divClosTags">
            <GrClose className="Closeicon" onClick={closeTags} />
          </div>
          <div className="TagNavBarTow">
            <ul>
              <Link to="/" onClick={closeTags}>
                <li>الرئيسية</li>
              </Link>
              <HashLink smoothe to="/#Services">
                <li>الخدمات</li>
              </HashLink>
              <Link to="conatct" onClick={closeTags}>
                <li>تواصل معنا</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
