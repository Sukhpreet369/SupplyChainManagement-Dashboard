import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export function TrendChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="orders" stroke="#8884d8" />
        <Line type="monotone" dataKey="shipments" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
