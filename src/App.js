import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Header from './components/topSection/Header'
import Section1 from './components/centerSection/Section1'


function App() {
  return (
    <>
      <Header />
      <Section1 />
    </>
  );
}

export default App;