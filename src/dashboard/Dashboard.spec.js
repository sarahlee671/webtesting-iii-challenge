import React from 'react';
import {render} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard'



describe('renders without error', () => {
    it('dashboard shows the control and display', () => {
        render(<Dashboard />)
    })
})