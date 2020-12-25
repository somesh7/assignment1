import React from "react";
import { NavLink } from "react-router-dom";



const Home = () => {
    return (
        <>
        <div className="main_div">
        <h1 className="heading"> PLANETS </h1>
        <ol type="1">
  <li className="design"> Mercury </li>
  <li className="design"> Venus  </li>
  <li className="design"> Earth </li>
  <li className="design"> Mars  </li> 
  <li className="design"> Ceres </li> 
  <li className="design"> Saturn  </li> 
  <li className="design"> Pluto</li> 
  <li className="design"> Haumea   </li>
  <li className="design"> Makemake  </li>
  <li className="design"> Eris   </li> 
  </ol>

 
  </div> 

  <div className="second_div">

  <h1 className="heading"> Select any Planet as Favorite</h1> 
  <NavLink className="btn btn-dark" to="/favorites" role="button"> Click Here</NavLink>
  </div>
    </>
    );
    }

export default Home;