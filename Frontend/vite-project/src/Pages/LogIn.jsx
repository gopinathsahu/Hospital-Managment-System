import { useContext, useState } from "react";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
 const LogIn = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigateTo = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();
    
      await axios
        .post(
          "http://localhost:4000/api/v1/login",
          { email, password, confirmPassword, role: "Patient" },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setConfirmPassword("");
          setEmail("");
          setPassword("");
        }).catch((err)=>{
            toast.error(err.response.data.message)
        })
    
  };
  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="container login-form form-component">
      <h2>Sign In</h2>
      <p> please Log In to continue</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, veniam
        accusantium reiciendis atque accusamus pariatur!
      </p>
      <form onSubmit={handleLogIn}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="confirmpaassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div
          style={{
            gap: "10px",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <p style={{ marginBottom: 0 }}>Not Registered?</p>
          <Link
            to={"/register"}
            style={{ textDecoration: "none", color: "#271776ca" }}
          >
            Register Now
          </Link>
        </div>
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
export default LogIn;