import { PurchaseFormFields } from '@/components/common/Form';
import { createPicsumImage } from '@/libs/factory';

export const CART_ITEMS: PurchaseFormFields[] = [
    {
        cartItemId: new Date().getTime().toString(),
        media: [createPicsumImage({ id: 200, width: 500, height: 500 })] as any,
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
        media: [createPicsumImage({ id: 200, width: 500, height: 500 })] as any,
        title: 'Matilda Chocolate Cake',
        variant: 'Square - 16cm x 16cm,240000',
        addOns: [] as any,
        // addOns_extraCandle_note: 'red',
        // addOns_paperTopping_note: 'HBD',
        note: '',
        qty: 1,
        totalPrice: 240000,
    },
    {
        cartItemId: '3' + new Date().getTime().toString(),
        media: [createPicsumImage({ id: 200, width: 500, height: 500 })] as any,
        title: 'Matilda Chocolate Cake',
        variant: 'Square - 16cm x 16cm,240000',
        addOns: [] as any,
        // addOns_extraCandle_note: 'red',
        // addOns_paperTopping_note: 'HBD',
        note: '',
        qty: 1,
        totalPrice: 240000,
    },
    {
        cartItemId: '4' + new Date().getTime().toString(),
        media: [createPicsumImage({ id: 200, width: 500, height: 500 })] as any,
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

export const CART_ITEMS_STRINGIFY =
    '[{"title":"Lime, Passion and Coconut","qty":1,"cartItemId":"1785377660332","variant":"Round - 15cm,300000","addOns":false,"note":"","totalPrice":300000,"media":[{"src":"/api/media/kellen-riggin-9-kUppOmsyg-unsplash-1200x900.jpg?volumeAsset=mediaProducts","width":1200,"height":900,"alt":"Sea","media":768},{"src":"/api/media/kellen-riggin-9-kUppOmsyg-unsplash-600x449.jpg?volumeAsset=mediaProducts","width":600,"height":449,"alt":"Sea"}]}]';
