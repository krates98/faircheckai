import Header from "./Pages/Header";
import "./Pages/Styles/app.css";
import Top from "./Pages/Top";
import Utility from "./Pages/Utility";
import Custom from "./Pages/Custom";
import Roadmap from "./Pages/Roadmap";

const App = () => {
  return (
    <>
      <Header />
      <Top />
      <Utility />
      <Custom />
      <Roadmap />
      {/* <Header /> */}
    </>
  );
};

export default App;
