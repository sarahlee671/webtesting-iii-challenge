import React from 'react';
import { render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';
import Controls from '../controls/Controls';
import renderer from 'react-test-renderer';


describe('<Display />', () => {
    it('should render Display component', () => {
        render(<Display />)
    })
    it('should display unlocked and open by default', () => {
        const {getByText} = render(<Display />)
        getByText(/unlocked/i);
        getByText(/open/i);
    })
    it('should display closed if the closed prop is true', () => {
        const {getByText} = render(<Display closed={true} />)
        getByText(/closed/i);
    })
    it('should display locked if the locked props is true', () => {
        const {getByText} = render(<Display locked={true} />)
        getByText(/locked/i);
    })
    // it('should display red-led class if locked or closed', () => {
    //     const {getByText} = render(<Display locked={true}/>)
    //     const locked = getByText(/red-led/i)
    //     expect(locked).toHaveClass('red-led')
    // })
}) 