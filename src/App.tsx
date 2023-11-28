import Footer from "./footer/Footer";
import TopBar from "./topbar/TopBar";
function App() {
  return (
    <div className="box">
      <TopBar />
      <div className="row content">
        <p>
          <b>content</b>
          (fills remaining space)
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
