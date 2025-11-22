import { div } from "three/src/nodes/TSL.js";
import About from "./components/About";
import Inputs from "./components/Inputs";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import { Route, Routes } from "react-router-dom";
import AddProject from "./components/AddProject";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
            <div className='mx-4 sm:mx-10 md:mx-20 lg:mx-40'>
              <Nav />
              <Main />
              <Projects />
              <About />
              <Reviews />
            </div>
            <Inputs />
          </>
        } />
      </Routes>
    </div>
  )
}