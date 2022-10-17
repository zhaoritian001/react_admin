import './App.css';
import { BrowserRouter ,Routes, Route }  from "react-router-dom";
import GeekLayout from "./page/Layout";
import Login from './page/Login';
import { AuthComponent } from './cmps/AuthComponent'
import Home from './page/Home';
import Article from "./page/Article";
import Publish from "./page/Publish";

function App() {
  return (
      // 路由配置
      <BrowserRouter>
          <Routes>
              {/*   Routes路由对应关系    */}
              <Route path='/' element={<AuthComponent><GeekLayout /></AuthComponent>} >
                  <Route index element={<Home />} />
                  <Route path='/article' element={<Article />} />
                  <Route path='/publish' element={<Publish />} />
              </Route>
              <Route path='/login' element={<Login />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
