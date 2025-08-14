import { setupWorker, rest } from 'msw';

export const worker = setupWorker(
  rest.get('/kpis', (_, res, ctx) => {
    return res(
      ctx.json([
        { title: 'On-time Delivery', value: 92, delta: 3 },
        { title: 'Inventory Turnover', value: 4.5, delta: -0.2 },
        { title: 'Open Orders', value: 120, delta: 10 },
        { title: 'Stockout Risk', value: 8, delta: -1 },
      ])
    );
  }),
  rest.get('/orders', (_, res, ctx) => {
    return res(
      ctx.json([
        { id: 'ORD001', customer: 'Acme Corp', promisedDate: '2025-08-20', status: 'Open', aging: 5 },
        { id: 'ORD002', customer: 'Globex Inc', promisedDate: '2025-08-18', status: 'Late', aging: 7 },
      ])
    );
  })
);
