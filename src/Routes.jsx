import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import Settings from "./screens/Settings/Settings"
import CompanyList from "./screens/CompanyList/CompanyList"

export default (props) => {
    return (
        <Switch>
            <Route exact path="/" component={Settings} />
            <Route path="/companies" component={CompanyList} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}
