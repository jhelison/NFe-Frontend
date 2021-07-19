import React from "react"
import "./App.global.css"
import { HashRouter } from "react-router-dom"

import Routes from "./Routes"

import Header from "./components/template/Header"
import Aside from "./components/template/Aside"
import NewCompany from "./screens/NewCompany/NewCompany"
import Settings from "./screens/Settings/Settings"
import CompanyList from "./screens/CompanyList/CompanyList"

export default (props) => {
    
    // let location = useLocation()

    return (
        <HashRouter>
            <Header/>
            <Aside />
            <Routes />
        </HashRouter>
    )
}
