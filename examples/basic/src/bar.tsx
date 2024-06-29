import Reags from "reags";
import type { RootComponent } from "reags";
import { Box } from "reags/components";
import { Align } from "reags/gtk";

export const Bar = (): RootComponent => {
	return <Box hpack={Align.Baseline} classes={["something"]} />;
};
