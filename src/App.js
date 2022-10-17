import './App.css';
import { BrowserRouter ,Routes, Route }  from "react-router-dom";
import Layout from "@/page/Layout";
import Login from "./page/Login";

function App() {
  return (
      // 路由配置
      <BrowserRouter>
          <Routes>
              {/*   Routes路由对应关系    */}
              <Route path='/' element={<Layout />} />
              <Route path='/login' element={<Login />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
