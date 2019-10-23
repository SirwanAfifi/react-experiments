import React from 'react';
import { StarRating } from './StarRating';

export const AddColorForm = ({ onNewColor = f => f }) => {
	let _title, _color, _starRating;
	const submit = e => {
		e.preventDefault();
		onNewColor(_title.value, _color.value, _starRating);
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

			<StarRating ref={starRating => _starRating = starRating} totalStars={5} onChange={(starsSelected) => {
				_starRating = starsSelected;
			}} />
			<button>ADD</button>
		</form>
	)
}
