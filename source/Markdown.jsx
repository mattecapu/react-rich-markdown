import React from 'react';
const markdownIt = require('markdown-it');

const defaultOpts = {
	'sup': true,
	'sub': true,
	'smartarrows': true,
	'sh': true,
	'math': true
};

export default class Markdown extends React.Component {
	constructor(props) {

		super(props);

		let markdown = markdownIt();

		let options = Object.assign(defaultOpts, props.options || {});

		if (options.sup) {
			const sup = require('markdown-it-sup');
			markdown = markdown.use(sup);
		}
		if (options.sub) {
			const sub = require('markdown-it-sub');
			markdown = markdown.use(sub);
		}
		if (options.smartarrows) {
			const smartarrows = require('markdown-it-smartarrows');
			markdown = markdown.use(smartarrows);
		}
		if (options.sh) {
			const highlightjs = require('markdown-it-highlightjs');
			markdown = markdown.use(highlightjs)
		}
		if (options.math) {
			const math = require('markdown-it-math');
			const Katex = require('katex');
			markdown = markdown.use(math, {
				inlineRenderer: (str) => Katex.renderToString(str),
				blockRenderer:  (str) => '<div class="math-block">' + Katex.renderToString(str, {displayMode: true}) + '</div>',
				inlineOpen: '$',
				inlineClose: '$',
				blockOpen: '$$',
				blockClose: '$$'
			});
		}

		this.Markdown = markdown;
	}
	render() {
		return (
			<div className="markdown" dangerouslySetInnerHTML={{__html: this.Markdown.render(this.props.source)}}></div>
		);
	}
}
