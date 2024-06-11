import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  top: 0;
  left: 0;
  padding: 1rem;
  justify-content: space-between;
`;

export const Items = styled.div`
  margin: 3rem;
`;

export const Conjunto = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
    background-color: hsla(229, 31%, 21%, 0.951);
    position: absolute;
    z-index: 20;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    display: ${({ navToggle }) => (navToggle ? "flex" : "none")};
  }
`;

export const Logo = styled.img`
  margin: 3rem;
`;

export const Ruta = styled.text`
  margin: 1.4rem;
  @media (max-width: 800px) {
    color: ${(props) => props.theme.White};
    margin: 2rem;
    display: flex;
    border-top: 1px solid ${(props) => props.theme.Grayish};
    padding: 20px 3rem;
    font-size: 1.3rem;
    letter-spacing: 2px;
  }
  :hover {
    color: ${(props) => props.theme.Red};
  }
`;

export const MobileNav = styled.div`
  display: none;
  button {
    background-color: transparent;
    position: relative;
    z-index: 100;
  }
  i {
    font-size: 1.4rem;
    color: ${({ navToggle }) => (navToggle ? "hsl(229, 31%, 21%)" : "black")};
  }
  @media (max-width: 800px) {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
`;

export const ButtonLogin = styled.button`
  color: #5267DF;
  font-size: 16px;
  background-color: #F8F9FA;
  border: 0.2em solid #5267DF;
  border-radius: 0.5em;
  width: 12em;
  height: 3em;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 3em;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: 0.5s;

  &:hover {
    color: #F8F9FA;
  }

  span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: #5267DF;
    transform: translateY(150%);
    border-radius: 50%;
    z-index: -1;
    transition: 0.5s;

    &:nth-child(1) {
      --n: 1;
      transition-delay: calc((var(--n) - 1) * 0.1s);
      left: calc((var(--n) - 1) * 25%);
    }
    &:nth-child(2) {
      --n: 2;
      transition-delay: calc((var(--n) - 1) * 0.1s);
      left: calc((var(--n) - 1) * 25%);
    }
    &:nth-child(3) {
      --n: 3;
      transition-delay: calc((var(--n) - 1) * 0.1s);
      left: calc((var(--n) - 1) * 25%);
    }
    &:nth-child(4) {
      --n: 4;
      transition-delay: calc((var(--n) - 1) * 0.1s);
      left: calc((var(--n) - 1) * 25%);
    }
  }

  &:hover span {
    transform: translateY(0) scale(2);
  }
`;