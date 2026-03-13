import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CourseDetails from "./components/CourseDetails";
import EnrollmentForm from "./components/EnrollmentForm";
import About from "./components/About";
import ThemeContextProvider from "./components/ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/enroll" element={<EnrollmentForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
//Trigger portal build
