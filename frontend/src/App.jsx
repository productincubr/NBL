import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Nourish from "./pages/Nourish";
import BlogPage from "./pages/BlogPage";

const App = () => {
  return (
    <main className="min-h-screen bg-[#f5f1eb]">
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Nourish Page */}
        <Route path="/nourish" element={<Nourish />} />

        {/* Blog Page */}
        <Route path="/blog" element={<BlogPage />} />

      </Routes>
    </main>
  );
};

export default App;
