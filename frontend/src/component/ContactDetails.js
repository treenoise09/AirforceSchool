import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const position = { lat: 13.906513214111328, lng: 100.61347961425781 };

const ContactDetails = () => {
  return (
    <>
      <div
        className="row"
        style={{ height: "100vh", backgroundColor: "#002855", padding: "15px" }}
      >
        <div className="col-6">
          <LoadScript googleMapsApiKey="AIzaSyDgFMdvdOfKGGMTCq_-cn__DigQQxufomc">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={position}
              zoom={15}
            >
              <MarkerF position={position} />
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="col-6" style={{ color: "#fff", fontSize: "25px" }}>
          <p>สอบถามข้อมูลการรับสมัคร ขั้นตอนและวิธีการสมัครทางอินเทอร์เน็ต</p>
          <div className="text-start p-5">
            <p>ADDRESS</p>
            <p>
              โรงเรียนจ่าอากาศ 171/1 หมู่ 10 ถนนพหลโยธิน แขวงสนามบิน เขต
              ดอนเมือง กรุงเทพมหานคร 10210
            </p>
            <p>Phone</p>
            <p> 0-2534-5266</p>
            <p>Email</p>
            <p>recruitmentatts@gmail.com</p>
            <p>Social</p>
            <p>CALL CENTER 02 534 5266</p>
            <p>
              <a
                href="https://www.facebook.com/ATTS.educate/?locale=th_TH"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                    x1="9.993"
                    x2="40.615"
                    y1="9.993"
                    y2="40.615"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#2aa4f4"></stop>
                    <stop offset="1" stop-color="#007ad9"></stop>
                  </linearGradient>
                  <path
                    fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                    d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                  ></path>
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
