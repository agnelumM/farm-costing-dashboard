import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default function Dashboard() {
  const [salary, setSalary] = useState(0);
  const [adminOverhead, setAdminOverhead] = useState(0);

  const sampleCostData = [
    { operation: 'Ploughing', costPerUnit: 45, overheadShare: 10 },
    { operation: 'Planting', costPerUnit: 30, overheadShare: 8 },
    { operation: 'Harvesting', costPerUnit: 50, overheadShare: 12 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Cost per Unit Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={sampleCostData}>
          <XAxis dataKey="operation" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="costPerUnit" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-6 space-y-2">
        <label>Operator Salary ($)</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(parseFloat(e.target.value))}
          className="border p-2 w-full"
        />
        <label>Admin Overhead ($)</label>
        <input
          type="number"
          value={adminOverhead}
          onChange={(e) => setAdminOverhead(parseFloat(e.target.value))}
          className="border p-2 w-full"
        />
      </div>
    </div>
  );
}