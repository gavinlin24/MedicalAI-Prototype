import React, { useState } from "react";
import "./Navbar.css";
import watermark from "../../assets/images/watermark.png";
import SearchButton from "./SearchButton";

interface Props{
  onLogoClick: () => void;
  onSearchClick: () => void;
}
const Navbar = ({onLogoClick, onSearchClick}: Props) => {
  return (
    <div className="navbar">
      <div>
        
        <img src={watermark} alt="" className="logo-icon" onClick={onLogoClick}/>
        
      </div>


      <SearchButton onClick={onSearchClick}></SearchButton>
    </div>
  );
};

export default Navbar;