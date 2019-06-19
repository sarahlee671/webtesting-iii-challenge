import React from 'react';
import { render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';
import renderer from 'react-test-renderer'

describe('<Controls />', () => {
    it('should run Control component', () => {
        render(<Controls />)
    })
    it('should render buttons to toggle the closed and locked states', () => {
        const {getByText} = render(<Controls />)
        getByText(/close gate/i);
        getByText(/lock Gate/i);
    })
    it('button text should toggleClosed to open when clicked', () => {
        const {getByText} = render(<Controls locked={false} closed={true}/>)
        let button = getByText(/close gate/i)
        fireEvent.click(button)
        getByText(/open gate/i)
    })
    it('closed toggle button is disabled if the gate is locked', () => {
        const {getByText} = render(<Controls locked={true} />)
        getByText(/close gate/i)
    })

    it('locked toggle button is disabled if the gate is open', () => {
        const {getByText} = render(<Controls locked={false} />)
        getByText(/unlock gate/i)
    })

}) 