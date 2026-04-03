import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Charts = ({ transactions }) => {

  if (!transactions || transactions.length === 0) {
    return <p>No data available</p>;
  }

  // Category Data
  const categoryData = {};
  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryData[t.category] =
        (categoryData[t.category] || 0) + Number(t.amount);
    }
  });

  const pieData = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        data: Object.values(categoryData),
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"], 
      },
    ],
  };

  // Monthly Data
  const monthly = {};
  transactions.forEach(t => {
    const month = new Date(t.date).toLocaleString("default", {
      month: "short",
    });

    monthly[month] = (monthly[month] || 0) + Number(t.amount);
  });

  const lineData = {
    labels: Object.keys(monthly),
    datasets: [
      {
        label: "Spending",
        data: Object.values(monthly),
        borderColor: "#36a2eb",
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="h-56 w-full">
  <Pie data={pieData} options={{ maintainAspectRatio: false }} />
</div>

      <div className="h-64 w-full">
  <Line data={lineData} options={{ maintainAspectRatio: false }} />
</div>
    </div>
  );
};

export default Charts;