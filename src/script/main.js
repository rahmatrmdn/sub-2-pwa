import registerServiceWorker from "./service-worker/register"
import nav from "./nav"

const main = () => {
    registerServiceWorker()
    nav()
}

export default main
