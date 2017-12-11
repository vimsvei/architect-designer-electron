import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RootComponent} from "./components/root/component";
import {HeaderComponent} from "./components/header/component";
import {FooterComponent} from "./components/footer/component";
import {WorkspaceComponent} from "./components/workspace/component";
import {ToolbarComponent} from "./components/toolbar/component";

@NgModule({
    imports:[
        BrowserModule
    ],
    declarations: [
        RootComponent,
        HeaderComponent,
        FooterComponent,
        WorkspaceComponent,
        ToolbarComponent
    ],
    bootstrap: [
        RootComponent
    ]
})
export class Application {

    public applicationName: string = "Architect Designer";

    constructor(){

    };
}