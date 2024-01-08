import React from "react";
import Dashboard from '../pages/Dashboard/Dashboard.js';
import { Route, Routes } from 'react-router-dom';
import Product from "../pages/Product/Product.js";
import SingleProduct from '../pages/SingleProduct/SingleProduct.js'

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Product />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/dashboard/" element={<Dashboard />} />
        </Routes>
    );
};

export default AppRoutes;