
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom"
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import {AuthcontextProvider}  from "./context/Authcontext"
import Account from './pages/Account';
import ProtectedRoute from './context/ProtectedRoute';

function App() {
  return (
    <>
      <AuthcontextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signIn' element={<SignIn />}></Route>
          <Route path='/signUp' element={<SignUp />}></Route>
          <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>}></Route>
          <Route path='*' element={<h1>404! PAGE NOT FOUND</h1>}></Route>
        </Routes>
      </AuthcontextProvider>
    </>
  );
}

export default App;
