import page from "page";

import Home from "./src/views/Home";
import NotFound from "./src/views/404";

const appContainer = document.getElementById('app');

page('/', () => Home(appContainer))

page('*', () => NotFound(appContainer))

page()