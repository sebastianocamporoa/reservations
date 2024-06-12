import { Container, Logo, Rota, Conjunto, Conjunto2, Redes } from "./styled";
// import logo from "./../../assets/images/logo-bookmark-dark.svg";
import facebook from "./../../assets/images/icon-facebook.svg";
import twitter from "./../../assets/images/icon-twitter.svg";
import { Link } from "react-router-dom";
import { i18n } from "./../../translate/i18n";
export default function Footer() {
  return (
    <Container>
      <Conjunto>
        <Link to="/">
          {/* <Logo src={logo} alt="logo" /> */}
        </Link>

        <Link to="/features">
          <Rota>{i18n.t("rutas.home")}</Rota>
        </Link>

        <Link to="/extension">
          <Rota>{i18n.t("rutas.services")}</Rota>
        </Link>

        <Link to="/contact">
          <Rota>{i18n.t("rutas.register")}</Rota>
        </Link>
      </Conjunto>

      <Conjunto2>
        <Redes href="https://pt-br.facebook.com/" target="_blank">
          <Logo src={facebook} alt="logo" />
        </Redes>

        <Redes href="https://twitter.com/" target="_blank">
          <Logo src={twitter} alt="logo" />
        </Redes>
      </Conjunto2>
    </Container>
  );
}
