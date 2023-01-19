import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import SearchPage from "./pages/SearchPage";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<SearchPage/>}/>
                    <Route path="*" element={<SearchPage/>}/>
                </Routes>
        </BrowserRouter>
    )
};

export default App;
