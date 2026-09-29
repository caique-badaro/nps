// prime react
import { HashRouter, Route, Routes } from "react-router-dom";

// páginas
import Verbalizacoes from "./pages/Verbalizacoes/Verbalizacoes.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import DetratoresYear from "./pages/DetratoresYear/Detratores.jsx";
import CorteSubst from "./pages/CorteSubst/CorteSubst.jsx";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/respostas" element={<Verbalizacoes />} />
        <Route path="/detratores" element={<DetratoresYear />} />
        <Route path="/corte-substituicao" element={<CorteSubst />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
