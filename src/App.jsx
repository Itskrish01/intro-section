import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Section } from "./components/Section";

function App() {
  return (
    <div>
      <Header />
      <SideBar />
      <Section />
    </div>
  );
}

export default App;
