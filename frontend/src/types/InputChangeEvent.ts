import { ChangeEvent } from 'react';

export type InputChangeEventType = (
	event: ChangeEvent<HTMLInputElement>,
	name?: string,
	value?: string | number | boolean
) => void;
