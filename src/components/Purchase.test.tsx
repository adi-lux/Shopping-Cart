import {describe, expect, vi, it} from 'vitest';
import Purchase from './Purchase'
import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";


describe('Testing the purchase features', () => {
    const fakePlus = vi.fn((id: string) => vi.fn());
    const fakeMinus = vi.fn((id: string) => vi.fn());
    const [id, name, description, img, price, bought] = ['ABCDEF', 'BOB', 'is a bob', '', 30000, 0];

    it('renders correct values', () => {
        const card = render(<Purchase car={{id, name, description, img, price, bought}} plusHandler={fakePlus(id)}
                                  minusHandler={fakeMinus(id)}/>);
        expect(card).toMatchSnapshot();
        card.unmount()
    });

    it('should call increment function when clicked', () => {
        const card = render(<Purchase car={{id, name, description, img, price, bought}} plusHandler={fakePlus(id)}
                                  minusHandler={fakeMinus(id)}/>)
        const button = screen.getAllByRole("button")[0]
        userEvent.click(button)
        expect(fakePlus).toHaveBeenCalled()
        card.unmount()
    })

    it('should call decrement function when clicked', () => {
        const card = render(<Purchase car={{id, name, description, img, price, bought}} plusHandler={fakePlus(id)}
                                  minusHandler={fakeMinus(id)}/>)
        const button = screen.getAllByRole("button")[1]
        userEvent.click(button)
        expect(fakePlus).toHaveBeenCalled()
        card.unmount()
    })
});