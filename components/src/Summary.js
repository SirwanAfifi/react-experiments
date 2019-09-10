import React from 'react';

export function Summary(props) {
	if (props.name.length > 4) {
		return <>
			<td>{props.index + 1} </td>
			<td>{props.name} </td>
			<td>{props.name.length} </td>
		</>
	}
	return null;
}