import About from "./Components/About/About";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";
import Progress from "./Components/Progress/Progress";
import Services from "./Components/Services/Services";

function App() {
  return (
    <>
      <Navbar />
        <Main/>
      <Services />
<About/>
<Pricing/>
<Progress/>
    </>
  );
}

export default App;
