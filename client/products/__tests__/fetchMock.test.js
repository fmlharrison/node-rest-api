import asyncFetch from '../helpers/fetch';
import { apiProductResponse } from '../__mocks__/Product';

test('asyncFetch should invoke success callback function if response is successful', () => {
    fetch.mockResponse(JSON.stringify(apiProductResponse), {status: 200});

    return asyncFetch.fetchProducts()
        .then((data) => {
            expect(data[0]._id).toBe("12345");
            expect(data[0].name).toBe("Happy Meal");
            expect(data[0].price).toBe(5.99);
        });
});