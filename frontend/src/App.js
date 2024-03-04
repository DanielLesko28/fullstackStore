import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./pages/HomeScreen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Container>
            <h1>Welcome to my shop</h1>
            <HomeScreen />
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
