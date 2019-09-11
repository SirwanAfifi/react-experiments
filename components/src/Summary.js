import React from 'react';
import { CallbackButton } from "./CallbackButton";

export function Summary(props) {
	if (props.name.length > 4) {
		return <>
			<td>{props.index + 1} </td>
			<td>{props.name} </td>
			<td>{props.name.length} </td>
			<td>
				<CallbackButton callback={props.reverseCallback} />
				<CallbackButton theme="info" text="Promote"
					callback={() => props.promoteCallback(props.name)} />
			</td>
		</>
	}
	return null;
}