import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Monday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];

  return (
    <>
      <footer className={"footer"}>
        <hr style={{"width":"100%"}} />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img"/>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>826-085-2577</span>
            </div>
            <div>
              <MdEmail />
              <span>zeelab@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span> Bhubaneswar,Odisha</span>
            </div>
            <div className="row">
<a href="https://www.facebook.com/prince.kusha.52"><i className="fa fa-facebook">  FaceBook</i></a>
<a href="https://instagram.com/gopinathsahu4?igshid=ZDdkNTZiNTM="><i className="fa fa-instagram"> Instagram</i></a>
<a href="#"><i className="fa fa-youtube">Youtube</i></a>
<a href="https://twitter.com/Gopinat40831826?t=8pdGqAb7JwVMj4Ig1kr6BQ&s=08"><i className="fa fa-twitter">Twitter</i></a>
</div>
          </div>
         
        </div>
        <div className="copyright">
          Copyright ©2024 All rights reserved |  created by Gopinath Sahu          </div>
      </footer>
    </>
  );
};

export default Footer;