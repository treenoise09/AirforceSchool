import React,{useEffect} from "react";
import "./App.css";
import Login from "./page/Login/login";
import Photo from "./page/Photo/photo";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";
import Form from "./page/Form/form";
import Home from "./page/Home/home";
import PDFPage from "./page/Pdf/pdf";
import { UserProvider } from "./component/UserContext";
import Profile from "./component/profile";
import { useUser } from "./component/UserContext";
function MemberRoute() {
  return (
    <div>
      <Routes>
        <Route path="/photo" element={<Photo />} />
        <Route path="/form" element={<Form />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
const MemberGuard = ({ children }) => {
  const navigate = useNavigate();
  const { isLogin } = useUser();

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  return isLogin ? children : null;
};

function App() {
  return (
    <UserProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/page" element={<PDFPage />} />
            <Route
                path="/register/*"
                element={
                  <MemberGuard>
                    <MemberRoute />
                  </MemberGuard>
                }
              />
            <Route path="*" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
