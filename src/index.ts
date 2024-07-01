import { render } from "./bootstrap.js";
import type { ReagsElements } from "./widgets/index.js";

declare global {
	namespace JSX {
        type IntrinsicElements = ReagsElements;

        type Element = never;
	}
}

export { 
    render 
};
