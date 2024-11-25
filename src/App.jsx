import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Books from "./pages/Books"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import DefaultLayout from "./pages/DefaultLayout"

function App() {

  return (
    <>
      <BrowserRouter>


        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />

        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
