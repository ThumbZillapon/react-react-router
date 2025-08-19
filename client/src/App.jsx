import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";
import ViewProductPage from "./pages/ViewProductPage";
import EditProductPage from "./pages/EditProductPage";

function NoMatch() {
  return <div><h1>404 Not Found</h1></div>;
}

function App() {
  return <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/create" element={<CreateProductPage />} />
          <Route path="/product/view/:productId" element={<ViewProductPage />} />
          <Route path="/product/edit/:productId" element={<EditProductPage />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
  </div>;
}

export default App;
