import {describe, expect, it, vi} from 'vitest';
import {render} from '@testing-library/react';
import Checkout from './Checkout';
import Purchase from './Purchase';
// cur.props.car.price
it.todo('should calculate sum properly');
describe('Checks valid functionality of Checkout', () => {

    it('Valid snapshot', () => {
        const checkout = render(<Checkout boughtList={[]}/>);
        expect(checkout).toMatchSnapshot();
        checkout.unmount();
    });

    it('calculates sum properly', () => {
        const fakePlus = vi.fn((id: string) => vi.fn());
        const fakeMinus = vi.fn((id: string) => vi.fn());
        const checkoutList = [{id: 'ABCDEF', name: 'BOB', img: 'is a bob', description: '', price: 30000, bought: 1}, {
            id: 'SDADS',
            name: 'BOB',
            img: 'is a bob',
            description: '',
            price: 20000,
            bought: 2,
        }];
        const newCheckout = checkoutList.map(car => <Purchase car={car} plusHandler={fakePlus} minusHandler={fakeMinus}/>)
        const checkout = render(<Checkout boughtList={newCheckout}/>)
        expect(checkout.getByTestId('totalPrice').textContent).toBe('Summary: $70000')
        checkout.unmount()
    });

    it('calculates sum properly v2', () => {
        const fakePlus = vi.fn((id: string) => vi.fn());
        const fakeMinus = vi.fn((id: string) => vi.fn());
        const checkoutList = [{id: 'ABCDEF', name: 'BOB', img: 'is a bob', description: '', price: 30000, bought: 1}, {
            id: 'SDADS',
            name: 'BOB',
            img: 'is a bob',
            description: '',
            price: 20000,
            bought: 0,
        }];
        const newCheckout = checkoutList.map(car => <Purchase key={car.id} car={car} plusHandler={fakePlus}
                                                              minusHandler={fakeMinus}/>)
        const checkout = render(<Checkout boughtList={newCheckout}/>)
        expect(checkout.getByTestId('totalPrice').textContent).toBe('Summary: $30000')
        checkout.unmount()
    });
});