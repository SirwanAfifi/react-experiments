import React from 'react';
import { StarRating } from './StarRating';

export const AddColorForm = ({ onNewColor = f => f }) => {
	let _title, _color
	const submit = e => {
		e.preventDefault();
		onNewColor(_title.value, _color.value);
		_title.value = '';
		_color.value = '#000000';
		_title.focus();
	}
	return (
		<form onSubmit={submit}>
			<input ref={input => _title = input}
				type="text"
				placeholder="color title..." required />
			<input ref={input => _color = input}
				type="color" required />

			<StarRating totalStars={5} />
			<button>ADD</button>
		</form>
	)
}
