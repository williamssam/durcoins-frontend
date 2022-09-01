// allow string or number as index
interface StausObjectKeys {
	[key: string]: string | number;
}

export interface StausObjectType extends StausObjectKeys {
	approved: string;
	pending: string;
	pool: string;
}
