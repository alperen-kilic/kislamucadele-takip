import Footer from "./footer/Footer";
import Content from "./maincontent/Content";
import TopBar from "./topbar/TopBar";
function App() {
  return (
    <div className="box">
      <TopBar />
      <div className="row content font-studio">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
