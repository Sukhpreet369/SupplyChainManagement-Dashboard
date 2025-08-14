function InventoryTable() {
  return (
    <div style={{ marginTop: '32px' }}>
      <h3>Inventory Snapshot</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>SKU</th>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>Stock</th>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>Reorder Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SKU-123</td>
            <td>150</td>
            <td>100</td>
          </tr>
          <tr>
            <td>SKU-456</td>
            <td>80</td>
            <td>120</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export { InventoryTable };
