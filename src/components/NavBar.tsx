import { styled } from "styled-components";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={className}>
      <ul>
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
      </ul>
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

  li {
    float: left;
  }

  ul {
    display: flex;
    align-items: center;
    margin: 0;
    list-style-type: none;
    float: right;
    padding-right: 71px;
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
