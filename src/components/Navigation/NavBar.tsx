import { styled } from "styled-components";
import Burger from "./Burger/Burger";
import { useEffect, useState } from "react";
import scrollDir from "scrolldir";
import Arrow from "../Icons/longArrowRight.svg";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  const [openBurger, setOpenBurger] = useState(true);

  const toggleOpenBurger = () => {
    console.log(openBurger, "value");
    setOpenBurger(!openBurger);
  };

  useEffect(() => {
    scrollDir({ dir: "up" });
  }, []);

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
      width: 100%;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      z-index: 1;
      margin: 0;
      padding: 0;
      right: 0;
      top: 0;
      li:last-of-type {
        margin: 0;
        margin-top: 40px;
        width: 300px;
        height: 60px;
        img {
          width: 50px;
          height: 50px;
        }
      }
      li {
        display: flex;
        align-items: center;
        width: 80%;
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
          <a href="#login">
            <span>Login</span>
            <img src={Arrow} alt="Arrow Right"></img>
          </a>
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
  z-index: 10;

  @media (max-width: 1200px) {
    position: static;
  }

  [data-scrolldir="down"] & {
    top: 0;
    padding: 20px 0;
    background-color: white;
    transition: 0.25s ease;
  }

  li {
    float: left;
    &:hover {
      transform: scale(1.02);
      transition: all 0.5s ease 0s;
      -webkit-transition: all 0.5s ease 0s;
      -moz-transition: all 0.5s ease 0s;
      -o-transition: all 0.5s ease 0s;
    }
  }

  a {
    list-style-type: none;
    padding: 0 19px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
  }

  li:last-of-type {
    position: relative;
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

    span {
      -webkit-transition: all 0.3s ease 0s;
      -moz-transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s;
      transition: all 0.3s ease 0s;
    }

    img {
      width: 30px;
      height: 30px;
      position: absolute;
      opacity: 0;
      top: 5px;
      right: 0;
      transition: 0.5s;
    }

    &:hover {
      transform: none;
      span {
        padding-right: 20px;
        padding-left: 5px;
      }
      img {
        opacity: 1;
        right: 30px;
      }
    }
  }
`;

export default StyledNavBar;
