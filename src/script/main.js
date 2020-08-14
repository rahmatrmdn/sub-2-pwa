import registerServiceWorker from "./service-worker/register"
import nav from "./nav"
import favorite from "./favorite"

const main = () => {
    registerServiceWorker()
    nav()
    favorite()
}

export default main
