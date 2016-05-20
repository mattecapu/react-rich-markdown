import React from 'react';
import ReactDOM from 'react-dom/server';

import express from 'express';
import fs from 'fs';

import Markdown from '../source/Markdown.jsx';

class TestMarkdown extends React.Component {
	render() {
		const args = {
			options: {},
			source: fs.readFileSync(this.props.source, 'utf8')
		};
		return (
			<Markdown {...args} />
		);
	}
}

let app = express();

const styles = fs.readFileSync('styles.css', 'utf8');
const md = ReactDOM.renderToString(<TestMarkdown source={'test/test.md'} />);

app.get('/', (_, res) =>
	res.send(`<!DOCTYPE html>
	<html>
		<head>
			<title>react-rich-markdown tests</title>
			<style>${styles}</style>
		</head>
		<body>
			<h1>Test suite</h1>
			<div id="mounting-point">${md}</div>
		</body>
	</html>`)
);

app.listen(8080, () => console.log('listening...'));
