import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/home";
import { tema } from "./theme/theme";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <ThemeProvider theme={tema}>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
