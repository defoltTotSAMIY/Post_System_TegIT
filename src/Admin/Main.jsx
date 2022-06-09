import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Table from "./Component/Table/Table";
// import Customer from "./Pages/Customer";
// import Card from "../Admin/Component/Hisobot/Hisobot";
import Dashboard from "./Component/Dashboard/Dashboard";
import Hisobot from "../Admin/Component/Hisobot/Hisobot";
import Loan from "./Component/Loan/Loan";
import Product from "./Component/Product/Product";
import RBAC from "./Component/RBAC/RBAC";
import Term from "./Component/Term/Term";

function Main() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/hisobot" element={<Hisobot />} />
                <Route path="/loan" element={<Loan />} />
                <Route path="/product" element={<Product />} />
                <Route path="/rbac" element={<RBAC />} />
                <Route path="/term" element={<Term />} />
                {/* <Route path="/" element={<Card />} />
                <Route path="/table" element={<Table />} /> */}
            </Route>
        </Routes>
    );
}
export default Main;
