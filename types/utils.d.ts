import * as Exec from "./utils/exec.js";
import * as File from "./utils/file.js";
import * as Etc from "./utils/etc.js";
import * as Timeout from "./utils/timeout.js";
import * as Fetch from "./utils/fetch.js";
import * as Notify from "./utils/notify.js";
import * as Pam from "./utils/pam.js";
import * as Gobject from "./utils/gobject.js";
import * as Binding from "./utils/binding.js";
export declare const USER: string;
export declare const HOME: string;
export declare const CACHE_DIR: string;
export declare const exec: typeof Exec.exec,
	execAsync: typeof Exec.execAsync,
	subprocess: typeof Exec.subprocess;
export declare const readFile: typeof File.readFile,
	readFileAsync: typeof File.readFileAsync,
	writeFile: typeof File.writeFile,
	writeFileSync: typeof File.writeFileSync,
	monitorFile: typeof File.monitorFile;
export declare const timeout: typeof Timeout.timeout,
	interval: typeof Timeout.interval,
	idle: typeof Timeout.idle;
export declare const loadInterfaceXML: typeof Etc.loadInterfaceXML,
	bulkConnect: typeof Etc.bulkConnect,
	bulkDisconnect: typeof Etc.bulkDisconnect,
	ensureDirectory: typeof Etc.ensureDirectory,
	lookUpIcon: typeof Etc.lookUpIcon;
export declare const authenticate: typeof Pam.authenticate,
	authenticateUser: typeof Pam.authenticateUser;
export declare const fetch: typeof Fetch.fetch;
export declare const notify: typeof Notify.notify;
export declare const kebabify: (str: string) => string,
	pspec: typeof Gobject.pspec,
	registerGObject: typeof Gobject.registerGObject;
export declare const merge: typeof Binding.merge,
	derive: typeof Binding.derive,
	watch: typeof Binding.watch;
declare const _default: {
	USER: string;
	HOME: string;
	CACHE_DIR: string;
	exec: typeof Exec.exec;
	execAsync: typeof Exec.execAsync;
	subprocess: typeof Exec.subprocess;
	readFile: typeof File.readFile;
	readFileAsync: typeof File.readFileAsync;
	writeFile: typeof File.writeFile;
	writeFileSync: typeof File.writeFileSync;
	monitorFile: typeof File.monitorFile;
	timeout: typeof Timeout.timeout;
	interval: typeof Timeout.interval;
	idle: typeof Timeout.idle;
	loadInterfaceXML: typeof Etc.loadInterfaceXML;
	bulkConnect: typeof Etc.bulkConnect;
	bulkDisconnect: typeof Etc.bulkDisconnect;
	ensureDirectory: typeof Etc.ensureDirectory;
	lookUpIcon: typeof Etc.lookUpIcon;
	fetch: typeof Fetch.fetch;
	notify: typeof Notify.notify;
	authenticate: typeof Pam.authenticate;
	authenticateUser: typeof Pam.authenticateUser;
	kebabify: (str: string) => string;
	pspec: typeof Gobject.pspec;
	registerGObject: typeof Gobject.registerGObject;
	merge: typeof Binding.merge;
	derive: typeof Binding.derive;
	watch: typeof Binding.watch;
};
export default _default;
