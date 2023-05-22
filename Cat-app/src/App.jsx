import Login from "./components/Login";
import "./Login.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Denied from "./pages/Denied";
import Search from "./pages/Search";
import { data } from "./assets/data";
import { useState } from "react";
function App() {
  const [newSearch, setNewSearch] = useState("");
  return (
    <>
      <h1>Hello</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/denied">Denied</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/denied" element={<Denied />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <form>
        <input
          type="text"
          value={newSearch}
          onChange={(e) => setNewSearch(e.target.value)}
        />
      </form>
      <table>
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => {
              return newSearch.toLowerCase() === ""
                ? item
                : item.first_name[0].toLowerCase().includes(newSearch);
            })
            .map((item) => (
              <tr>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.contact}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
export default App;
