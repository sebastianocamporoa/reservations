import {
  Container,
  Logo,
  Rota,
  ButtonLogin,
  Conjunto,
  Items,
  MobileNav,
  Conjunto2,
  Redes,
} from "./styled";
import Hamburger from "../../assets/images/icon-hamburger.svg";
import Close from "../../assets/images/icon-close.svg";
import facebook from "./../../assets/images/icon-facebook.svg";
import twitter from "./../../assets/images/icon-twitter.svg";
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
          <Link to="/features">
            <Rota>{i18n.t("rutas.features")}</Rota>
          </Link>

          <Link to="/extension">
            <Rota>{i18n.t("rutas.pricing")}</Rota>
          </Link>

          <Link to="/contact">
            <Rota>{i18n.t("rutas.contact")}</Rota>
          </Link>

          <ButtonLogin>
            {i18n.t("rutas.login")}
            <span></span><span></span><span></span><span></span>
          </ButtonLogin>

          <Conjunto2>
            <Redes href="https://pt-br.facebook.com/" target="_blank">
              <Logo src={facebook} alt="logo" />
            </Redes>

            <Redes href="https://twitter.com/" target="_blank">
              <Logo src={twitter} alt="logo" />
            </Redes>
          </Conjunto2>
        </Items>
      </Conjunto>
    </Container>
  );
}
