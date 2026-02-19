import Navbar from "./components/navbar/navbar";
import Button from "./components/button/button";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1>Home Page</h1>
        <Button />
      </div>

      <Footer />
    </>
  );
}

export default App;
