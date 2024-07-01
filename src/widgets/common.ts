
type Pack = "start"  | "center" | "end" | "fill";
export type CommonProps<TChildren = never> = {
    hexpand?: boolean;
    vexpand?: boolean;
    classes?: boolean;
    hpack?: Pack;
    vpack?: Pack;

    children: TChildren
}


