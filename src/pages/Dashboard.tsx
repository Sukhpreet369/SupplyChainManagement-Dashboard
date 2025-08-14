import { useQuery } from '@tanstack/react-query';
import { KpiCard } from '../components/KpiCard';
import { TrendChart } from '../components/TrendChart';
import { AlertsList } from '../components/AlertsList';
import { InventoryTable } from '../components/InventoryTable';

function Dashboard() {
  const { data: kpis, isPending, error } = useQuery({
    queryKey: ['kpis'],
    queryFn: () => fetch('/kpis').then(res => res.json()),
  });

  return (
    <div style={{ padding: '24px' }}>
      <h2>Dashboard</h2>

      {error && <p style={{ color: 'red' }}>Error loading KPIs</p>}

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {isPending ? (
          <p>Loading KPIs...</p>
        ) : (
          kpis?.map((kpi: any) => <KpiCard key={kpi.title} {...kpi} />)
        )}
      </div>

      <h3 style={{ marginTop: '32px' }}>Orders vs. Shipments</h3>
      <TrendChart
        data={[
          { date: 'Aug 1', orders: 100, shipments: 90 },
          { date: 'Aug 2', orders: 120, shipments: 110 },
        ]}
      />

      <AlertsList />
      <InventoryTable />
    </div>
  );
}

export default Dashboard;
