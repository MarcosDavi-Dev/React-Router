import "./App.css";

import { Outlet } from "react-router-dom";

// 5 - Link entre páginas
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <>
      <NavBar />
      <SearchForm />
      <Outlet />
      <p>Footer</p>
    </>
  );
}

export default App;
