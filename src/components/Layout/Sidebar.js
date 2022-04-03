import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import profile from "../../assets/profile.png";

const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 180px;
`
const Profile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
`
const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`

export const Sidebar = () => {
  const menus = [
    { name: "HOME", path: "/" },
    { name: "First menu", path: "/first" },
    { name: "Second menu", path: "/second" },
    { name: "Third menu", path: "/third" },
  ];
  return (
    <Side>
      <Profile src={profile}></Profile>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              to={menu.path}
              key={index}
              style={info => ({
                  color: info.isActive ? "green" : "black",
                  fontWeight: info.isActive ? "bold" : 150,
                  textDecoration: "none"
                })}
              className={ info =>
                info.isActive ? "selected" : "unselected"
              }
            >
              <SidebarItem
                menu={menu}
              />
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
}