export function DataTable({ data }: { data: any[] }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Promised Date</th>
          <th>Status</th>
          <th>Aging</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row: any) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.customer}</td>
            <td>{row.promisedDate}</td>
            <td>{row.status}</td>
            <td>{row.aging} days</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
