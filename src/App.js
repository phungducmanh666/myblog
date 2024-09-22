import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main/layout/MainLayout";
import HomePage from "./pages/home/HomePage";

import "rsuite/dist/rsuite.min.css";

function App() {
  return <MainLayout />;
}

export default App;
