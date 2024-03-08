import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Home from "./pages/Home";
import Bookmarked from "./pages/Bookmarked";

function App() {
  let [token, setToken] = useState(localStorage.getItem("token"));
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (
      (token == null && location.pathname != "/register") ||
      localStorage.getItem("boolean") == "false"
    ) {
      navigate("/Login");
    } else {
      navigate("/");
    }
  }, []);

  function ProtectedRoute({ children, redirectTo = "/login", isAuth }) {
    if (!isAuth) {
      console.log(redirectTo);
      useEffect(() => {
        navigate(redirectTo);
      }, []);
    }

    return children;
  }

  return (
    <>
      <Routes>
        {/* public */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register />}></Route>

        {/* protected */}
        <Route
          path="/"
          element={
            <ProtectedRoute isAuth={token != null ? true : false}>
              <Home></Home>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/movies"
          element={
            <ProtectedRoute isAuth={token != null ? true : false}>
              <Movies></Movies>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/series"
          element={
            <ProtectedRoute isAuth={token != null ? true : false}>
              <Series></Series>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/bookmarked"
          element={
            <ProtectedRoute isAuth={token != null ? true : false}>
              <Bookmarked></Bookmarked>
            </ProtectedRoute>
          }
        ></Route>
        <Route path="*" element={<p>page not found</p>}></Route>
      </Routes>
    </>
  );
}

export default App;
