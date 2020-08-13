import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min"

import registerServiceWorker from "./script/service-worker/register"
import nav from "./script/nav"

registerServiceWorker()
nav()