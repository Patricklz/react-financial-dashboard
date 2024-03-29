import React from "react";
import { Route, Routes } from 'react-router-dom';

import Layout from "../components/Layout";
import Dashboard from "../Pages/Dashboard";
import List from "../Pages/List";

const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/list/:type" element={<List />} />

        </Routes>

    </Layout>

);




export default AppRoutes;