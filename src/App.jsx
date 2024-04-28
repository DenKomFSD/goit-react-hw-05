import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
