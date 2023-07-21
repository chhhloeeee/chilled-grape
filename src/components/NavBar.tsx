import { styled } from "styled-components";
import Burger from "./Burger/Burger";
import { useState } from "react";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  const [openBurger, setOpenBurger] = useState(true);

  const toggleOpenBurger = () => {
    console.log(openBurger, "value");
    setOpenBurger(!openBurger);
  };

  const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    margin: 0;
    list-style-type: none;
    float: right;
    padding-right: 71px;
    @media (max-width: 1200px) {
      display: ${openBurger ? "flex" : "none"};
      margin: 0;
      background-color: #eff4fa;
      transition: 2s ease;
      height: 100vh;
      width: 50%;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      margin: 0;
      top: 0;
      right: 0;
      li:last-of-type {
        margin: 0;
        width: 300px;
        height: 60px;
      }
      li {
        display: flex;
        align-items: center;
        width: 100%;
        margin: 1.5rem 2rem;
        border-bottom: 1px solid grey;
      }
      li,
      a {
        font-size: 36px;
        text-transform: uppercase;

        text-decoration: none;
        transition: color 0.3s linear;
      }
    }
    @media (max-width: 600px) {
      width: 100%;
      padding: 0;
      margin: 0;
    }
    @media (max-width: 450px) {
      a {
        font-size: 20px;
      }
      li:last-of-type {
        margin: 0;
        width: 150px;
        height: 30px;
      }
    }
  `;
  return (
    <div className={className}>
      <StyledUl>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </StyledUl>
      <div onClick={toggleOpenBurger}>
        <Burger />
      </div>
    </div>
  );
};

const StyledNavBar = styled(NavBar)`
  overflow: hidden;
  position: fixed;
  top: 50px;
  width: 100%;
  text-align: center;
  color: #212121;

  @media (max-width: 1200px) {
    position: static;
  }

  li {
    float: left;
  }

  a {
    list-style-type: none;
    padding: 0 19px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
  }

  li:last-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 96px;
    border-radius: 100px;
    background: var(
      --primary,
      linear-gradient(90deg, #73e0a9 0%, #5b68df 100%)
    );
    width: 175px;
    height: 40px;
    flex-shrink: 0;
    color: white;
  }
`;

export default StyledNavBar;
