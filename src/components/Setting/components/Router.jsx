import React from 'react';
import { Routes, Route } from "react-router-dom";

import Recipe from './Recipe1';
import { Setting } from './../Setting';


const Router = (props) => {
    return (
       
            <Routes>
                <Route path="/re" element={<Setting />} />
                <Route path="/recipe/:id" element={<Recipe />} />
            </Routes>
        
    )
}