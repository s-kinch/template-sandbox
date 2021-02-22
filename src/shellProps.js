import HomePage from "./HomePage"
import GoodPage from "./GoodPage"

const shellProps = {
    routes: [
        { path: "/", exact: true, component: HomePage },
        { path: "/good", exact: true, component: GoodPage },
    ],
}

export default shellProps
