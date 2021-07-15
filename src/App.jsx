import React from "react"
import "./App.global.css"
// import { HashRouter } from "react-router-dom"

// // import Routes from "./Routes"

import Header from "./components/template/Header"
import Aside from "./components/template/Aside"
import NewCompany from "./screens/NewCompany/NewCompany"
// import Content from "./components/template/Content"

// import Header from "./components/template/Header"
// import Nav from "./components/template/Nav"
// import Footer from "./components/template/Footer"

export default (props) => {
    return (
        <React.Fragment>
            <Header/>
            <Aside />
            <NewCompany />

            <div className="app-border"/>
        </React.Fragment>
        
        // <HashRouter>
        //     {/* <div className="app" id="app-root">
        //         <Header />
        //         <Nav />
        //         <Routes />
        //         <Footer /> */}
        //     {/* </div> */}
        // </HashRouter>
    )
}
