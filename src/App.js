import React from "react";
import AppRouter from "./routers/AppRouter";
import "./styles/styles.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const App = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};
export default App;
