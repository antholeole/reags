import context from "src/tree/context.js";
import type { Label as AgsLabel } from "types/widgets/label.js";
import type {  CommonProps } from "./common.js";

type Justification = "left" | "center" | "right" | "fill";
type Truncate = "none" | "start" | "middle" | "end";

export type LabelProps = {
    truncate?: Truncate
    justification?: Justification
} & CommonProps<string>

export const Label = (props: LabelProps): AgsLabel<unknown> => {
    return context.widgetNamespace.Label(props)
};
