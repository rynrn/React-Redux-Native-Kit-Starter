/*global it */
/*global expect */
/*eslint no-undef: "error"*/

import React from 'react'; // eslint-disable-line no-unused-vars
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
	const rendered = renderer.create(<App />).toJSON();
	expect(rendered).toBeTruthy();
});
