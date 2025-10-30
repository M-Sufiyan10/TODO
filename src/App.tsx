
import "./App.css";




import Signup from "./Pages/SignUp";
import Login from "./Pages/Login";
import { Route, Routes, useNavigate,  } from "react-router-dom";
import Home from "./Home";
import Todo from "./Todo";

function App() {
  const navigate = useNavigate();
  

  const handleLogin = ()=>
  {
    navigate('/login')
  }

  const handleSignUp = ()=>
    {
      navigate('/signup')
    }
  return (
    <>
    <Routes>
      <Route path="/" element={<Home handleLogin={handleLogin} handleSignUp={handleSignUp}/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path='/todo' element={<Todo/>}></Route>
    </Routes>
    </>
  );
}

export default App;
