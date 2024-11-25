import { browserRouter, routes, route } from "react-router-dom"
import home from "./pages/home"
import books from "./pages/books"
import contacts from "./pages/contacts"
import about from "./pages/about"

function App() {

  return (
    <>
      <browserRouter>


        <routes>
          <route path="/" element={<home />} />
          <route path="/books" element={<books />} />
          <route path="/contacts" element={<contacs />} />
          <route path="/about" element={<about />} />

        </routes>
      </browserRouter>



    </>
  )
}

export default App
