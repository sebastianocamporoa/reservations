import {
  Container,
  Logo,
  ButtonLogin,
  Conjunto,
  Items,
  MobileNav,
  Ruta,
} from "./styled";
import Hamburger from "../../assets/images/icon-hamburger.svg";
import Close from "../../assets/images/icon-close.svg";
import logo from "./../../assets/images/logo-bookmark.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { i18n } from "./../../translate/i18n";
export default function Header() {
  const [navToggle, setNavToggle] = useState(false);
  const alternar = () => {
    setNavToggle(!navToggle);
  };

  useEffect(() => {
    if (navToggle === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>
      <MobileNav navToggle={navToggle}>
        <button onClick={alternar}>
          {navToggle ? (
            <i>
              <img src={Close} alt="Fechar" />
            </i>
          ) : (
            <i>
              <img src={Hamburger} alt="abrir" />
            </i>
          )}
        </button>
      </MobileNav>
      <Conjunto navToggle={navToggle}>
        <Items>
          <Link to="/">
            <Ruta>{i18n.t("rutas.home")}</Ruta>
          </Link>

          <Link to="/services">
            <Ruta>{i18n.t("rutas.services")}</Ruta>
          </Link>

          <Link to="/register">
            <Ruta>{i18n.t("rutas.register")}</Ruta>
          </Link>

          <ButtonLogin>
            {i18n.t("rutas.login")}
            <span></span><span></span><span></span><span></span>
          </ButtonLogin>
        </Items>
      </Conjunto>
    </Container>
  );
}
