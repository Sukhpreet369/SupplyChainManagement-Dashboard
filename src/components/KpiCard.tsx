import styled from 'styled-components';

const Card = styled.div`
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 200px;
`;

export function KpiCard({ title, value, delta }: { title: string; value: number; delta: number }) {
  return (
    <Card>
      <h4>{title}</h4>
      <p style={{ fontSize: '24px', margin: '8px 0' }}>{value}</p>
      <span style={{ color: delta >= 0 ? 'green' : 'red' }}>
        {delta >= 0 ? `▲ ${delta}` : `▼ ${Math.abs(delta)}`}
      </span>
    </Card>
  );
}
