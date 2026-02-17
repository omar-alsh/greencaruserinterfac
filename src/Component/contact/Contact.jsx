// import "./Contact.css";
// import emailjs from "@emailjs/browser";
// import Swal from "sweetalert2";
// import { useRef, useState } from "react";

// import { FaLocationDot } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaSquareWhatsapp } from "react-icons/fa6";
// import { FaTelegram } from "react-icons/fa6";

// export default function Contact() {
//   const form = useRef();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   // const [textMassage, setTextMassage] = useState("");
//   // const [showMassage, setShowMassage] = useState(false);

//   const sendEmail = async (e) => {
//     e.preventDefault();

//     // تحقق من الحقول
//     if (!isFormValid) {
//       Swal.fire({
//         icon: "warning",
//         title: "تنبيه",
//         text: "يرجى تعبئة جميع الحقول",
//         confirmButtonColor: "#3085d6"
//       });
//       return;
//     }

//     // اظهار لودينغ
//     Swal.fire({
//       title: "جاري الإرسال...",
//       text: "يرجى الانتظار قليلاً",
//       allowOutsideClick: false,
//       didOpen: () => {
//         Swal.showLoading();
//       }
//     });

//     try {
//       await emailjs.sendForm(
//         "service_ivcdjf7",
//         "template_nv6yqig",
//         form.current,
//         "q1NS15pvkXyOQjQPb"
//       );

//       Swal.fire({
//         icon: "success",
//         title: "تم الإرسال بنجاح ✅",
//         text: "سوف نقوم بالرد عليك بأسرع وقت ممكن",
//         confirmButtonColor: "#28a745"
//       });

//       setName("");
//       setEmail("");
//       setMessage("");
//       e.target.reset();
//     } catch (error) {
//       console.log(error);

//       Swal.fire({
//         icon: "error",
//         title: "حدث خطأ ❌",
//         text: "تعذر إرسال الرسالة، حاول مرة أخرى",
//         confirmButtonColor: "#d33"
//       });
//     }
//   };

//   const isFormValid =
//     name.trim() !== "" && email.trim() !== "" && message.trim() !== "";

//   return (
//     <div className="Box">
//       <div className="continer continerContact">
//         <div className="MainBoxConact" dir="rtl">
//           <div className="TextContact">
//             <h2>تواصل معنا</h2>
//             <p>تواصل معنا. نحن هنا لمساعدتك في اي وقت</p>
//           </div>

//           <div className="BoxContact">
//             <div className="BoxFormContact">
//               <h3>تواصل معنا عبر ال Email</h3>
//               <p>أرسل لنا رسالة وسنرد بأسرع وقت ممكن. نحن هنا لمساعدتك</p>

//               <form ref={form} onSubmit={sendEmail} noValidate>
//                 <div>
//                   <label>الاسم الكامل:</label>
//                   <input
//                     type="text"
//                     name="user_name"
//                     placeholder="اسمك الكامل"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label>البريد الالكتروني:</label>
//                   <input
//                     type="email"
//                     name="user_email"
//                     placeholder="your.email@example.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label>اكتب الرسالة هنا:</label>
//                   <textarea
//                     name="message"
//                     placeholder="أخبرنا كيف يمكننا مساعدتك..."
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     required
//                   ></textarea>
//                 </div>

//                 <button type="submit">إرسال الرسالة</button>
//               </form>

//               {/* {showMassage && (
//                 <p style={{ marginTop: "15px", color: "green" }}>
//                   {textMassage}
//                 </p>
//               )} */}
//             </div>

//             <div className="BoxDetialsContact">
//               <div className="TextContact">
//                 <h2>معلومات الوصول</h2>
//                 <p>زرنا في مكتبنا أو تواصل معنا عبر أي من الحسابات التالية</p>
//               </div>

//               <div className="BoxLocation">
//                 <div className="Location">
//                   <div className="IconLocation">
//                     <FaLocationDot />
//                   </div>
//                   <div className="TextLocation">
//                     <h3>عنواننا</h3>
//                     <p>دمشق, سوريا</p>
//                   </div>
//                 </div>

//                 <div className="Email">
//                   <div className="IconEmail">
//                     <MdEmail />
//                   </div>
//                   <div className="TextEmail">
//                     <h3>عنوان البريد الالكتروني</h3>
//                     <p>omaralshalq@gmail.com</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="socil">
//                 <h3>تابعنا</h3>
//                 <div className="IconSocil">
//                   <div>
//                     <a href="#">
//                       <FaFacebookSquare />
//                     </a>
//                   </div>
//                   <div>
//                     <a href="#">
//                       <FaSquareWhatsapp />
//                     </a>
//                   </div>
//                   <div>
//                     <a href="#">
//                       <FaInstagramSquare />
//                     </a>
//                   </div>
//                   <div>
//                     <a href="#">
//                       <FaTelegram />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import "./Contact.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useRef, useState } from "react";

import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

export default function Contact() {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    // قراءة القيم مباشرة من الفورم (الأضمن)
    const formData = new FormData(form.current);
    const userName = formData.get("user_name")?.trim();
    const userEmail = formData.get("user_email")?.trim();
    const userMessage = formData.get("message")?.trim();

    // تحقق يدوي
    if (!userName || !userEmail || !userMessage) {
      Swal.fire({
        icon: "warning",
        title: "تنبيه",
        text: "يرجى تعبئة جميع الحقول",
        confirmButtonColor: "#3085d6"
      });
      return;
    }

    // لودينغ
    Swal.fire({
      title: "جاري الإرسال...",
      text: "يرجى الانتظار قليلاً",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      await emailjs.sendForm(
        "service_ivcdjf7",
        "template_nv6yqig",
        form.current,
        "q1NS15pvkXyOQjQPb"
      );

      Swal.fire({
        icon: "success",
        title: "تم الإرسال بنجاح ✅",
        text: "سوف نقوم بالرد عليك بأسرع وقت ممكن",
        confirmButtonColor: "#28a745"
      });

      setName("");
      setEmail("");
      setMessage("");
      form.current.reset();
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "حدث خطأ ❌",
        text: "تعذر إرسال الرسالة، حاول مرة أخرى",
        confirmButtonColor: "#d33"
      });
    }
  };

  return (
    <div className="Box">
      <div className="continer continerContact">
        <div className="MainBoxConact" dir="rtl" id="Contact">
          <div className="TextContact">
            <h2>تواصل معنا</h2>
            <p>تواصل معنا. نحن هنا لمساعدتك في اي وقت</p>
          </div>

          <div className="BoxContact">
            <div className="BoxFormContact">
              <h3>تواصل معنا عبر ال Email</h3>
              <p>أرسل لنا رسالة وسنرد بأسرع وقت ممكن. نحن هنا لمساعدتك</p>

              <form ref={form} onSubmit={sendEmail}>
                <div>
                  <label>الاسم الكامل:</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="اسمك الكامل"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label>البريد الالكتروني:</label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label>اكتب الرسالة هنا:</label>
                  <textarea
                    name="message"
                    placeholder="أخبرنا كيف يمكننا مساعدتك..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit">إرسال الرسالة</button>
              </form>
            </div>

            <div className="BoxDetialsContact">
              <div className="TextContact">
                <h2>معلومات الوصول</h2>
                <p>زرنا في مكتبنا أو تواصل معنا عبر أي من الحسابات التالية</p>
              </div>

              <div className="BoxLocation">
                <div className="Location">
                  <div className="IconLocation">
                    <FaLocationDot />
                  </div>
                  <div className="TextLocation">
                    <h3>عنواننا</h3>
                    <p>دمشق, سوريا</p>
                  </div>
                </div>
                <div className="Email">
                  <div className="IconEmail">
                    <MdEmail />
                  </div>
                  <div className="TextEmail">
                    <h3>عنوان البريد الالكتروني</h3>
                    <p>omaralshalq@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="socil">
                <h3>تابعنا</h3>
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
        </div>
      </div>
    </div>
  );
}
