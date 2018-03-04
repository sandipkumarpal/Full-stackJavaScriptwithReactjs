import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {
	const testProps = {
		articles: {
			a: {id: 'a'},
			b: {id: 'b'},
		},
		articleAction: {
			lookupAuthor: jest.fn(() => ({}))
		}
	};
	it('renders correctly', () => {
		const render = renderer.create(
			<ArticleList 
				{...testProps}
			/>
		).toJSON();

		console.log(render);
		expect(render.children.length).toBe(2);
		expect(render).toMatchSnapshot();
	});

});