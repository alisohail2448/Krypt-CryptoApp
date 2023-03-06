import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import Services from "./Components/Services";
import Transactions from "./Components/Transactions";
import Footer from "./Components/Footer";

function App() {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
