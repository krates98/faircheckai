import Header from "./Pages/Header";
import "./Pages/Styles/app.css";
import Top from "./Pages/Top";
import Utility from "./Pages/Utility";
import Custom from "./Pages/Custom";
import Roadmap from "./Pages/Roadmap";
import Tokenomics from "./Pages/Tokenomics";
import PublicSale from "./Pages/PublicSale";
import Footer from "./Pages/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Top />
      <Utility />
      <Custom />
      <Roadmap />
      <Tokenomics />
      <PublicSale />
      <Footer />
    </>
  );
};

export default App;
