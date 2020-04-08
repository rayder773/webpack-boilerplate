'use strict';

import { Router } from "./router";
import { Route } from "./route";

(function () {
    function init() {
        const router = new Router([
            new Route('edit', 'edit.html', true),
            new Route('main', 'main.html')
        ]);
    }
    init();
}());
