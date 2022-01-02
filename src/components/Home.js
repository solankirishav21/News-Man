import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../UserAuthContext";
import "./Home.css"
import News from "./News";


const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
    
      <div className="container m-4">
        <h3 className="text-center mb-4">Hello { user.email}, Welcome To NEWSMAN</h3>
        
      
      <div className="d-grid gap-2">
      <button type="button" className="btn btn-primary" onClick={handleLogout}>Log Out</button>
      </div>
      <br /><br />
      <h4 className="mb-4 text-center"> Top Headlines</h4>
      
      <News/>
      </div>

    </>
  );
};
export default Home;