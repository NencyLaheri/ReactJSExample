import logo from "./logo.svg";
import "./App.css";
import Navbar_example from "./components/Navbar_example";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Updating from "./components/Updating";
import Unmounting from "./components/Unmounting";
import Hooks from "./components/Hooks";
import Customhooks_uses from "./components/Customhooks_uses";
import Lists from "./components/Lists";
import Cond from "./components/Cond";
import Images from "./components/Images";
import Formex from "./components/Formex";
import Mul_inputs from "./components/Mul_inputs";
import Handling_form from "./components/Handling_form";
import Uncontrolled_form from "./components/Uncontrolled_form";
import Callbacks from "./components/Callbacks";
import LiftingState from "./components/LiftingState";
import ContextFile from "./components/ContextFile";
import HOC from "./components/HOC";
import ErrorBound from "./components/ErrorBound";
import DigitalClock from "./components/DigitalClock";
import Example from "./components/Example";
import Forms from "./components/Forms";
import {
  BrowserRouter,
  Switch,
  Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";

// let name="asd"
const a = [1, 2, 3, 4];
function App() {
  return (
    <>
      {/* <Router> */}
      <BrowserRouter>
        <Navbar_example aboutText="About Us" />
        {/* <Navbar></Navbar> */}
        <div className="container my-3">

          {/* <switch> */}
          <Routes>
            <Route path="/"></Route>

            <Route path="/about" element={<About />}></Route>
            <Route path="/hooks/" element={<Hooks />}></Route>
            <Route path="/textform" element={<TextForm />}></Route>
             <Route path="/updating" element={<Updating />}></Route>
            <Route path="/unmounting" element={<Unmounting />}></Route>
            <Route path="/lists" element={<Lists numbers={a}/>}></Route>
            <Route path="/cond" element={<Cond />}></Route>
            <Route path="/images" element={<Images />}></Route>
            <Route path="/formex" element={<Formex />}></Route>
            <Route path="/mulinputs" element={<Mul_inputs />}></Route>
            <Route path="/handlingform" element={<Handling_form />}></Route>
            <Route path="/uncform" element={<Uncontrolled_form />}></Route>
            <Route path="/callbacks" element={<Callbacks />}></Route>
            <Route path="/liftingstate" element={<LiftingState />}></Route>
            <Route path="/context" element={<ContextFile />}></Route>
            <Route path="/hoc" element={<HOC />}></Route>
            <Route path="/errorbound" element={<ErrorBound />}></Route>
            <Route path="/digitalClock/:name/:lname" element={<DigitalClock />}></Route>
            <Route path="/example" element={<Example />}></Route>
            <Route path="/forms" element={<Forms />}></Route>
            {/* </switch> */}

            {/* </Router> */}
          </Routes>
        </div>
        {/* </Router> */}
      </BrowserRouter>

      {/* <TextForm heading="Enter the text to analyze below"/> */}

      {/* <Updating favcol="Red"></Updating> */}
      {/* <Unmounting></Unmounting> */}
      {/* <Hooks/> */}
      {/* <Customhooks_uses/> */}
      {/* <Lists numbers={a}/> */}
      {/* <Cond consumer={false} primeMember={true}></Cond> */}
      {/* <img src={process.env.PUBLIC_URL + "image/a.jpeg"} alt="" width="100%" height="795"/> */}
      {/* <Images></Images> */}
      {/* <Formex></Formex> */}
      {/* <Mul_inputs/> */}
      {/* <Handling_form></Handling_form> */}
      {/* <Uncontrolled_form></Uncontrolled_form> */}
      {/* <Callbacks></Callbacks> */}
      {/* <LiftingState></LiftingState> */}
      {/* <ContextFile></ContextFile> */}
      {/* <HOC></HOC> */}
      {/* <ErrorBound></ErrorBound> */}
    </>
  );
}

export default App;
