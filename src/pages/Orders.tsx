import { useQuery } from '@tanstack/react-query';
import { DataTable } from '../components/DataTable';

function Orders() {
  const { data: orders, isLoading } = useQuery(['orders'], () =>
    fetch('/orders').then(res => res.json())
  );

  return (
    <div style={{ padding: '24px' }}>
      <h2>Orders</h2>
      {isLoading ? <p>Loading orders...</p> : <DataTable data={orders} />}
    </div>
  );
}

export default Orders;
