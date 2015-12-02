# react-rich-markdown
## A ready-to-go component to render rich Markdown snippets.
---
The `<Markdown />` component renders the contents of its `source` property with [markdown-it](http://npmjs.com/package/markdown-it) and the following plugins:

* [markdown-it-sup](http://npmjs.com/package/markdown-it-sup) and [markdown-it-sub](http://npmjs.com/package/markdown-it-sub) for superscripts and subscripts
* [markdown-it-smartarrows](http://npmjs.com/package/markdown-it-smartarrows) to replace ASCII arrows (==>, <-->, ...) with proper Unicode characters.
* [markdown-it-highlightjs](http://npmjs.com/package/markdown-it-highlightjs) for code syntax highlighting
* [markdown-it-math](markdown-it-math) using [Katex](http://npmjs.com/package/katex) as rendering engine for LaTex syntax

## Usage
```js
import React from 'react';
import Markdown from 'react-rich-markdown';

export class MyComponent extends React.Component {
	render() {
		const opts = { smartarrows: false };
		return (
			<div>
				<h1>{this.props.sometitle}</h1>
				<Markdown source={this.props.sometext} options={opts}/>
			</div>
		);
	}
}
```
The `options` property allows to switch off unneeded plugins
```
{
	"sup": true|false,
	"sub": true|false,
	"smartarrows": true|false,
	/* syntax highlighting */
	"sh": true|false,
	"math": true|false
}
```
By default all the plugins are loaded.

## Styling
The component includes a stylesheet for LaTex expressions and syntax highlighting. It's a very big file because it has all the fonts needed by Katex inlined, so you can setup it quickly with PostCSS or Webpack.

Nonetheless, **I strongly recommend to not use this solution in production**, and instead [go and download Katex styles](https://github.com/khan/katex/releases) separately, without the fonts inlined, so the browser isn't forced to download them _all_ at once.

You'll need also [Highlight.js styles](https://github.com/isagalaev/highlight.js/tree/master/src/styles).


## TODOs

1. Testing
1. Support mounting other `markdown-it` plugins

## License

**ISC**
