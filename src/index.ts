import { render } from "./bootstrap.js"
import { RootComponent } from "./tree/component.js"
import type { ReagsContext } from "./tree/context.js"

let context: ReagsContext;
const blah = {
    test: "hi"
}

export {
    blah as default,
    render,

    RootComponent,
}