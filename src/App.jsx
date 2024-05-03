import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import Layout from "./layout"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import { useEffect } from "react"
import { useSelector } from "react-redux"

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const token = useSelector(state => state.token.value);

  useEffect(() => {
    if (!token && location.pathname != '/register') {
      navigate('/login')
    }
  }, [navigate, token])

  function ProtectedRoute({
    children,
    isAuthentication,
    redirectTo = "/login",
  }) {
    if (!isAuthentication) {
      navigate(redirectTo);
    }

    return children;

  }
  return (
    <Routes>

      {/* public */}

      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>

      {/* protected */}

      <Route
        path="/"
        element={
          <ProtectedRoute isAuthentication={token ? true : false}>
            <Layout>
              <Home></Home>
            </Layout>
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/cart"
        element={
          <ProtectedRoute isAuthentication={token ? true : false}>
            <Layout>
              <Cart></Cart>
            </Layout>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/product/:id"
        element={
          <ProtectedRoute isAuthentication={token ? true : false}>
            <Layout>
              <Product></Product>
            </Layout>
          </ProtectedRoute>
        }
      ></Route>

    </Routes>

  )
}

export default App