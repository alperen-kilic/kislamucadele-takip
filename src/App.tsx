import Footer from "./footer/Footer";
import Content from "./maincontent/Content";
import TopBar from "./topbar/TopBar";
function App() {
  return (
    <div className="flex flex-col h-full">
      <TopBar />
      <div className="flex-1 font-studio">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
