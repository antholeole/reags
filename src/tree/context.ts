import type { Window as AgsWindow, WindowProps } from "types/widgets/window.js";
import type { Label as AgsLabel, LabelProps } from "types/widgets/label.js";
import type Gtk from "types/@girs/gtk-3.0/gtk-3.0.js";
import { ReagsError } from "src/error.js";

type EmptyAttrs = Record<string, never>;

// The object that is imported when we import Aylur/ags/widget.js.
// We can't see where the users Ags install lives, so we need to take a
// widget namespace instead.
interface WidgetNamespace {
	Window(props: WindowProps): AgsWindow<Gtk.Widget, EmptyAttrs>;
	Label(props: LabelProps): AgsLabel<EmptyAttrs>;
}

// The public interface on this type, i.e. the methods that 
// ReagsContext.<some method> can refer to.
interface ReagsNamespace {
    createWidget: () => 
}

class ReagsContext {
	private assignedWidgetNamespace?: WidgetNamespace;

	/// This method should only be ever called once per lifecycle
	/// of a Reags app.
	assignWidgetNamespace(widgetNamespace: WidgetNamespace) {
		if (this.assignWidgetNamespace !== undefined) {
			throw new ReagsError(
				"Attempted to reassign widget namespace. Was render called twice?",
			);
		}

		this.assignedWidgetNamespace = widgetNamespace;
	}

	/// This method should only ever be called _after_ a render() call.
	/// Because we cannot import the ags resource (it is different per system),
	/// we need the user to provide it for us: In most cases, it will be provided
	/// through the render() method.
	get widgetNamespace(): WidgetNamespace {
		const thisWidgetNamespace = this.assignedWidgetNamespace;

		if (thisWidgetNamespace === undefined) {
			throw new ReagsError(
				"Attempted to construct a widget before render() was called.",
			);
		}

		return thisWidgetNamespace;
	}
}

// The single, global context.
const context = new ReagsContext();
export default context;
