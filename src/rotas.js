import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from '../src/pages/cadastro/index.js'
import Login from '../src/pages/Login/index.js'
import Principal from './pages/principal/index.js'
import NotFound from '../src/pages/NotFound/index.js'

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Cadastro />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/Principal" element={<Principal />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;
