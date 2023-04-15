import { Routes, Route } from "react-router-dom";
import './App.css'
import CountryList from "./Pages/CountryList"
import CountryListDetails from "./Pages/CountryListDetails"
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CountryList />}></Route>
        {/* <Route path="/get-a-country-details/:slug" element={<CountryListDetails />}></Route> */}
        <Route path="/get-a-country-details-cid/:sulg/&cname=/:name" element={<CountryListDetails />}></Route>
      </Routes>
    </div>
  )
}

export default App
