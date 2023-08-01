import "./App.css";
import AllRoutes from "./allRoutes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
