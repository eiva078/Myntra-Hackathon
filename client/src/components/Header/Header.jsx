import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import myntra from "../../assets/myntra_logo.webp";
import profileImage from "../../assets/profile.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import tryon from "../../assets/tryon.png";
import styles from "./Header.module.css";
import "../../index.css";

const Header = () => {
  const [showExplore, setShowExplore] = useState(false);
  const [showProfileHover, setShowProfileHover] = useState(false);
  const navigate = useNavigate();

  const handleTryhover = () => {
    setShowExplore(true);
  };

  const handleMouseOut = () => {
    setShowExplore(false);
  };

  const handleProfileHover = () => {
    setShowProfileHover(true);
  };

  const handleProfileMouseOut = () => {
    setShowProfileHover(false);
  };

  const handleExploreClick = () => {
    navigate("/try-on");
    setShowExplore(false);
  };

  return (
    <>
      <header className={styles.navbar}>
        <div className="logo_container">
          <a href="/">
            <img className="myntra_home" src={myntra} alt="Myntra Home" />
          </a>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Beauty</a>
          <a href="#">Studio</a>
          <div
            className="nav_item"
            onMouseOver={handleTryhover}
            onMouseOut={handleMouseOut}
            onClick={handleExploreClick}
          >
            <a href="#" className="try-on-link">
              Try On<sup className="new_badge">New</sup>
            </a>
            {showExplore && (
              <div
                className={styles.hover_menu}
                onMouseOver={handleTryhover}
                onMouseOut={handleMouseOut}
              >
                <span className={styles.tryon_heading}>
                  <img src={myntra} className={styles.tryon_logo} alt="" />{" "}
                  TRY-ON
                </span>
                <p className={styles.tryon_p}>
                  Let's add fashion and comfort together!
                </p>
                <img src={tryon} alt="" className={styles.tryon_img} />
                <div className={styles.btn_container}>
                  <button
                    className={styles.tryon_btn}
                    onClick={handleExploreClick}
                  >
                    EXPLORE TRY-ON
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon"></span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className={`action_bar `}>
          <a
            className={`action_container ${styles.profilesection} ${styles.bag}`}
            onMouseOver={handleProfileHover}
            onMouseOut={handleProfileMouseOut}
          >
            <IoPersonOutline className={styles.icon} />
            <span className="action_name">Profile</span>
            {showProfileHover && (
              <div className={styles.profile_hover}>
                <img src={profileImage} alt="Profile Hover" />
              </div>
            )}
          </a>

          <a className={`action_container ${styles.bag}`} href="/">
            <CiHeart className={styles.icon} />
            <span className="action_name">Wishlist</span>
          </a>

          <a className={`action_container ${styles.bag}`} href="/">
            <HiOutlineShoppingBag className={styles.icon} />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">3</span>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
