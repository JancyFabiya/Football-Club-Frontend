import React, { useState } from 'react';
import './Sidebar.css';
import { motion } from "framer-motion";
import Item from "./Item";
import { FaList } from 'react-icons/fa';
import { AiOutlineAppstoreAdd, AiOutlineUsergroupDelete, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { RxUpdate } from 'react-icons/rx';
import { GoChecklist } from 'react-icons/go';
import { GrUserManager } from 'react-icons/gr';
import { MdThumbsUpDown, MdAddReaction } from 'react-icons/md';
import { GiAmericanFootballPlayer } from 'react-icons/gi';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const [open, setOpen] = useState(true);

  // for collpsing sidebar
  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "15rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: "3rem",
      transition: {
        delay: 0.4,
      },
    },
  };

  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "4rem",
    },
    false: {
      alignSelf: "flex-start",
      marginTop: "2rem",
      width: "3rem",
    },
  };
  //   const [show, setShow] = useState(false);

  return (
    <div className="App">
      <motion.div
        data-Open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
      >
        {/* sidebar div */}
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          {/* lines_icon */}
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3.5px)",
              WebkitBackdropFilter: "blur(3.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
            onClick={handleToggle}
            className="lines_icon"
          >
            <FaList />
          </motion.div>
          {/* profile */}
          <motion.div
            layout
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            className="profile"
            transition={{ duration: 0.4 }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(5.5px)",
              WebkitBackdropFilter: "blur(5.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              cursor: "pointer",
            }}
          >
            {/* <img
              src="https://ae01.alicdn.com/kf/H5be6a0fa5f584a8a8420da2a7d4bc809r/RBRARE-Polaroid-Men-s-Goggle-Driving-Sunglasses-Men-Classic-Low-Profile-Sun-Glasses-For-Men-High.jpg"
              alt="profile_img"
            /> */}
          </motion.div>
          {/* groups */}
          <div className="groups">
            {/* group 1 */}
            <div className="group">
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
              >
                CLUB
              </motion.h3>
              <Link to='/admin/clubs' style={{ textDecoration: "none", color: "inherit" }}>
                <Item icon={<GoChecklist />} name="All" />
              </Link>
              <Link to='/admin/club/new' style={{ textDecoration: "none", color: "inherit" }}>

                <Item icon={<AiOutlineAppstoreAdd />} name="Create" />
              </Link>


            </div>
          </div>
          {/* group 2 */}
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            >
              MANAGER
            </motion.h3>
            <Link to='/admin/managers' style={{ textDecoration: "none", color: "inherit" }}>

              <Item icon={<GrUserManager />} name="All" />
            </Link>
            <Link to='/admin/manager/new' style={{ textDecoration: "none", color: "inherit" }}>

              <Item icon={<AiOutlineUsergroupAdd />} name="Create" />{" "}
            </Link>

          </div>
          {/* group 3 */}
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            >
              PLAYER
            </motion.h3>
            <Link to='/admin/players' style={{ textDecoration: "none", color: "inherit" }}>

              <Item icon={<GiAmericanFootballPlayer />} name="All" />
            </Link>
            <Link to='/admin/player/new' style={{ textDecoration: "none", color: "inherit" }}>

              <Item icon={<MdAddReaction />} name="Create" />
            </Link>

          </div>
        </motion.div>
      </motion.div>

      <div className="body_container">

      </div>
    </div>
  );
};

export default Sidebar;
