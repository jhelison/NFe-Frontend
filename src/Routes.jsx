import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import Settings from "./screens/Settings/Settings"
import CompanyList from "./screens/CompanyList/CompanyList"
import NewCompany from "./screens/NewCompany/NewCompany"

export default (props) => {
    return (
        <Switch>
            <Route exact path="/" component={Settings} />
            <Route path="/companies" component={CompanyList} />
            <Route path="/companiesnew" component={NewCompany} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}
