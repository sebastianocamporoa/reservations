import {
  Links,
  Container,
  ColunaImagem,
  Paragrafo,
  Titulo,
  Linha,
  Textos,
  RegisterBtn,
  AboutBtn,
} from "./styled";
import imagem from "./../../assets/images/illustration-hero.svg";
import { i18n } from "./../../translate/i18n";
export default function About() {
  return (
    <Container>
      <Linha>
        <Textos>
          <Titulo>{i18n.t("about.titulo")}</Titulo>
          <Paragrafo>{i18n.t("about.paragrafo")}</Paragrafo>
          <Links>
            <RegisterBtn
              href="/register"
            >
              {i18n.t("about.buttons.register")}
            </RegisterBtn>
            <AboutBtn
              href="/aboutUs"
            >
              {i18n.t("about.buttons.about")}
            </AboutBtn>
          </Links>
        </Textos>
        <ColunaImagem>
          <img src={imagem} alt="bookmark" />
        </ColunaImagem>
      </Linha>
    </Container>
  );
}
