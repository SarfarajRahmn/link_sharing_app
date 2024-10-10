import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProfileDetails from "./pages/ProfileDetails";
import LinksPage from "./pages/LinksPage";
import Preview from "./pages/Preview";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/links" element={<LinksPage />} />
        <Route path="/profile" element={<ProfileDetails />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/" element={<Navigate to="/links" replace />} />
        <Route path="*" element={<Navigate to="/links" replace />} />
      </Routes>
    </div>
  );
}

export default App;
