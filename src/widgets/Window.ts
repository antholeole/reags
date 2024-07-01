import { Window as AgsWindow } from "types/widgets/window.js";
import type { CommonProps } from "./common.js";

type Anchor = "left" | "right" | "top" | "bottom"
type Exclusivity = "normal" | "exclusive" | "ignore"
type Layer = "overlay" | "top" | "bottom" | "background"
type Keymode = "none" | "on-demand" | "exclusive"

export type WindowProps = {
		anchor?: Anchor[];
		exclusivity?: Exclusivity;
		layer?: Layer;
		margins?: [number, number, number, number] | [number, number];
		visible?: boolean;
		keymode?: Keymode;
	} & CommonProps<JSX.Element>

export const Window = (
	props: WindowProps,
): AgsWindow<Gtk.Widget, unknown> => {
	return new AgsWindow({
        
    });
};
