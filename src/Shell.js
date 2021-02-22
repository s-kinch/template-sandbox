import React, { createContext } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

export const ShellContext = createContext(null)
// TODO: make sure it will work to export this from the package?
// TODO: example of updating context variables, like for user login

const value = {
    user: {
        initials: "SK",
    },
}

// Routes we set for them
const TestPage = () => <h1>TEST</h1>
const ErrorPage = () => <h1>ERROR</h1>

const Shell = ({ children, routes }) => {
    // TODO: any use case for children? things they want on every page?
    return (
        <BrowserRouter>
            <ShellContext.Provider value={value}>
                {/* {children} */}
                <Switch>
                    {routes.map((route) => (
                        <Route key={route.path} {...route} />
                    ))}
                    <Route path="/test" exact component={TestPage} />
                    <Route component={ErrorPage} /> {/* catchall */}
                </Switch>
            </ShellContext.Provider>
        </BrowserRouter>
    )
}

export default Shell
