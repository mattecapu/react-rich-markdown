import React from 'react';
import ReactDOM from 'react-dom';

/* tests against the transpiled result
   (the thing that's actually npm-publish-ed) */
import Markdown from '../Markdown.js';

class TestMarkdown extends React.Component {
	render() {
		const args = {
			options: {},
			source: '**Hey** _man_!'
		};
		return (
			<div>
				<Markdown {...args} />
			</div>
		);
	}
}

document.addEventListener(
	'DOMContentLoaded',
	() => ReactDOM.render(
		<TestMarkdown />,
		document.getElementById('mounting-point')
	)
);
