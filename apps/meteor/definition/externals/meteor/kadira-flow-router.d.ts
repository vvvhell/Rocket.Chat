declare module 'meteor/kadira:flow-router' {
	import type { Subscription } from 'meteor/meteor';

	type Context = {
		params: Record<string, string>;
		queryParams: Record<string, string>;
		pathname: string;
		oldRoute?: Route<string, any>;
		route: Route<string, any>;
	};

	type RouteOptions<TRouteName extends string> = {
		name?: TRouteName;
		action?: (this: Route, params?: Record<string, string>, queryParams?: Record<string, string | string[]>) => void;
		subscriptions?: (this: Route, params?: Record<string, string>, queryParams?: Record<string, string | string[]>) => void;
		triggersEnter?: ((context: Context, redirect: (path: string) => void, stop: () => void) => void)[];
		triggersExit?: ((context: Context) => void)[];
	};

	class Route<TRouteName extends string, TGroup extends Group<string> | undefined = any> {
		constructor(router: Router, pathDef: string, options?: RouteOptions<TRouteName>, group?: TGroup);

		options: RouteOptions<TRouteName>;

		pathDef: string;

		path: string;

		name?: TRouteName;

		group?: TGroup;

		clearSubscriptions(): void;

		register(name: string, sub: Subscription, options?: never): void; // `options` is unused in FlowRouter code

		getSubscription(name: string): Subscription;

		getAllSubscriptions(): Record<string, Subscription>;

		callAction(current: Current): void;

		callSubscriptions(current: Current): void;

		getRouteName(): string;

		getParam(key: string): string;

		getQueryParam(key: string): string;

		watchPathChange(): void;

		registerRouteClose(): void;

		registerRouteChange(currentContext: Context, routeChanging?: boolean): void;
	}

	type GroupOptions<TGroupName extends string> = {
		name: TGroupName;
		prefix?: string;
		triggersEnter?: unknown[];
		triggersExit?: unknown[];
		subscriptions?: (this: Route, params?: Record<string, string>, queryParams?: Record<string, string | string[]>) => void;
	};

	/** @deprecated */
	class Group<TGroupName extends string, TParentGroup extends Group<string> | undefined = any> {
		/** @deprecated */
		constructor(router: Router, options?: GroupOptions<TGroupName>, parent?: TParentGroup);

		/** @deprecated */
		name: TGroupName;

		/** @deprecated */
		prefix: string;

		/** @deprecated */
		options: GroupOptions<TGroupName>;

		/** @deprecated */
		parent: TParentGroup;

		/** @deprecated */
		route<TRouteName extends string>(pathDef: string, options: RouteOptions<TRouteName>, group?: TParentGroup): Route<TRouteName, TGroup>;

		/** @deprecated */
		group(options?: GroupOptions<TGroupName>): Group;

		/** @deprecated */
		callSubscriptions(current: Current): void;
	}

	type Current = {
		path: string;
		context: Context;
		params: Record<string, string>;
		queryParams?: Record<string, string>;
		route?: Route<string> | undefined;
		oldRoute?: Route<string> | undefined;
	};

	type RouterOptions = {
		hashbang?: boolean;
	};

	class Router {
		constructor();

		route<TRouteName extends string>(pathDef: string, options: RouteOptions<TRouteName>): Route<TRouteName, undefined>;

		route<TRouteName extends string, TGroup extends Group<string>>(
			pathDef: string,
			options: RouteOptions<TRouteName>,
			group: TGroup,
		): Route<TRouteName, TGroup>;

		/** @deprecated */
		group<TGroupName extends string>(options: GroupOptions<TGroupName>): Group<TGroupName>;

		path(pathDef: string, fields?: Record<string, string>, queryParams?: Record<string, string>): string;

		url(pathDef: string, fields?: Record<string, string>, queryParams?: Record<string, string>): string;

		go(pathDef: string, fields?: Record<string, string>, queryParams?: Record<string, string>): void;

		reload(): void;

		redirect(path: string): void;

		setParams(newParams: Record<string, string>): boolean;

		setQueryParams(newParams: Record<string, string | undefined | null>): boolean;

		current(): Current;

		subsReady(): boolean;

		withReplaceState(fn: () => void): Router;

		withTrailingSlash(fn: () => void): Router;

		initialize(options?: RouterOptions): void;

		wait(): void;

		notFound: Omit<RouteOptions<any>, 'name'>;

		getRouteName(): string;

		getParam(key: string): string;

		getQueryParam(key: string): string;

		watchPathChange(): void;

		_initialized: boolean;

		_routes: Route[];

		_routesMap: Record<string, Route>;

		_updateCallbacks(): void;

		_current: Current;
	}

	const FlowRouter: Router & {
		Route: typeof Route;
		Router: typeof Router;
		_page: {
			start(): void;
			stop(): void;
			show(path: string): void;
			dispatch(ctx: { path: string; params: any }): void;
		};
	};
}
