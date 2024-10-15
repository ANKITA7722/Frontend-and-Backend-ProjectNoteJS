import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="insert" element={<Insert />} />
            <Route path="display" element={<Display />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;