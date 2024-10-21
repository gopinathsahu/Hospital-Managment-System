import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const AppointmentForm = () => {
 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNIC] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("");
  const [address, setAdress] = useState("");
  const [hasVisited, setHasVisited] = useState("");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  
  
  const deaprtmentArray = [
    " Allergy and immunology",
    "Anesthesiology",
    "• Casualty department",
    "Dermatology",
    "Diagnostic radiology",
    "Emergency medicine",
    "Family medicine",
    "Gastroenterology",
    "Internal medicine",
    " Intensive care unit (ICU)",
    "Medical genetics",
    "Neurology",
    "Nuclear medicine",
    "Obstetrics and gynecology",
    " Operating theatre (OT)",
    "Ortho",
    "Outpatient Department",
    "Ophthalmology",
    "Pathology",
    "Pediatrics",
    "Physical medicine and rehabilitation",
    "Preventive medicine",
    "Psychiatry",
    "Radiology",
    "Radiation oncology",
    "Surgery",
    "Urology",
  ];
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/doctors",
        { withCredentials: true }
      );
      setDoctors(data.doctors);
      console.log(data.doctors);
      console.log('http://localhost:4000/api/v1/getdoctors');
    };
    fetchDoctors();
  }, []);
  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
        const hasVisitedBool = Boolean(hasVisited);
        const { data } = await axios.post(
          "http://localhost:4000/api/v1/appointment",
          {
            firstName,
            lastName,
            email,
            phone,
            nic,
            dob,
            gender,
            appointment_date: appointmentDate,
            department,
            doctor_firstName: doctorFirstName,
            doctor_lastName: doctorLastName,
            hasVisited: hasVisitedBool,
            address,
          },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        );
        toast.success(data.message);
        setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setNIC("");
          setDOB("");
          setGender("");
          setAppointmentDate("");
          setDepartment("");
          setDoctorFirstName("");
          setDoctorLastName("");
          setHasVisited("");
          setAdress("");
      } catch (error) {
        toast.error(error.response.data.message);
      }
  };
  return (
    <>
      <div className="container form-component appointment-form">
        <h2>Appointment</h2>
        <form onSubmit={handleAppointment}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="NIC"
              value={nic}
              onChange={(e) => setNIC(e.target.value)}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="date"
              placeholder="Appointment Date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </div>
          <div>
            <select
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setDoctorFirstName("");
                setDoctorLastName("");
              }}
            >
              {deaprtmentArray.map((depart, index) => {
                return (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                );
              })}
            </select>
            <select
              value={`${doctorFirstName} ${doctorLastName}`}
              onChange={(e) => {
                const [firstName, lastName] = e.target.value.split(" ");
                setDoctorFirstName(firstName);
                setDoctorLastName(lastName);
              }}
              disabled={!department}
            >
              <option value="">Select Doctor</option>
              {doctors
                .filter(doctor => doctor.doctorDepartment === department)
                .map((doctor, index) => (
                  <option
                    value={`${doctor.firstName} ${doctor.lastName}`}
                    key={index}
                  >
                    {doctor.firstName} {doctor.lastName}
                  </option>
                ))}
            </select>
          </div>
          <textarea
            rows="10"
            value={address}
            onChange={(e) => setAdress(e.target.value)}
            placeholder="Address"
          />
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Have you visited before?</p>
            <input
              type="checkbox"
              checked={hasVisited}
              onChange={(e) => setHasVisited(e.target.checked)}
              style={{ flex: "none", width: "25px" }}
            />
          </div>
          <button style={{ margin: "0 auto" }}>GET APPOINTMENT</button>
        </form>
      </div>
    </>
  );
};
export default AppointmentForm;
