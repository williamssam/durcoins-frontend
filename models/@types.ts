// allow string or number as index
interface StatusObjectKeys {
	[key: string]: string | number;
}

export interface StatusObjectType extends StatusObjectKeys {
	approved: string;
	pending: string;
	pool: string;
}
