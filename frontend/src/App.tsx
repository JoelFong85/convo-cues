import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ConversationPage from "./pages/ConversationPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/conversation/:convoId" element={<ConversationPage />} />
    </Routes>
  );
}
