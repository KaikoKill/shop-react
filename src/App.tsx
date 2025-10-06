import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./containers/pages/About";
import Home from "./containers/pages/Home";
import Error404 from "./containers/errors/Error404";
import FAQ from "./containers/pages/FAQ";
import Clients from "./containers/pages/Clients";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="marcas" element={<Clients />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
