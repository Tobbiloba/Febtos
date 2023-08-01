import Homepage from "./pages/Homepage"
import Cart from "./pages/Cart"
import ProductDetails from "./pages/ProductDetails"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

function App() {

  const routes = [
    <Route path="/" element={<Homepage />} />,
    <Route path="/cart" element={<Cart />} />,
    <Route path="/product-details" element={<ProductDetails />} />,
  ]

  const router = createBrowserRouter(createRoutesFromElements(routes))


  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
