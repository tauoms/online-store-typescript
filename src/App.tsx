import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StoreNavBar from "./components/StoreNavBar";
import List from "./components/List";

function App() {
  return (
    <div>
      <StoreNavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
