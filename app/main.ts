import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Application} from "./application";

const platform = platformBrowserDynamic();

enableProdMode();

platform.bootstrapModule(Application)
    .catch(
        err => console.error(err)
    );