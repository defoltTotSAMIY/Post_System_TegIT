import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Table from "./Component/Table/Table";
import Customer from "./Pages/Customer";
import Card from "../Admin/Component/Hisobot/Hisobot";

function Main() {
  
  return(
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Card/>} />
        <Route path="/table" element={<Table />} />
        <Route path="/customer" element={<Customer />} />
      </Route>
    </Routes>
  ) 
}
export default Main;