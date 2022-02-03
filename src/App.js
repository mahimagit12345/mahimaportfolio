
import "./App.css";
import Intro from "./comps/intro/intro";
import Nav from "./comps/nav/nav";
import New from "./comps/newabout/newabout";
import Courses from "./comps/courses/courses";
import Cont from "./comps/Contactme/Contactme";

function App() {
  return (
    <div className="App">

      <Nav />
      <Intro />
      <New/>
      <Courses/>
      <Cont/>

    </div>
  )
}

export default App;
