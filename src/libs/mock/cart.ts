import { PurchaseFormFields } from '@/components/common/Form';

export const CART_ITEMS: PurchaseFormFields[] = [
    {
        cartItemId: new Date().getTime().toString(),
        title: 'Strawberry Fields',
        variant: 'Square - 16cm x 16cm,240000',
        addOns: ['extraCandle,Extra Candle,3000', 'paperTopping,Paper Topping,5000'] as any,
        addOns_extraCandle_note: 'red',
        addOns_paperTopping_note: 'HBD',
        note: 'lorem ipsum \nasdawdaw',
        qty: 1,
        totalPrice: 248000,
    },
    {
        cartItemId: '2' + new Date().getTime().toString(),
        title: 'Matilda Chocolate Cake',
        variant: 'Square - 16cm x 16cm,240000',
        addOns: [] as any,
        // addOns_extraCandle_note: 'red',
        // addOns_paperTopping_note: 'HBD',
        note: '',
        qty: 1,
        totalPrice: 240000,
    },
];
