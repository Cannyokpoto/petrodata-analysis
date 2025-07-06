import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);



function MiniChart({ data, color }) {
  return (
    <div className="lg:w-100px lg:h-40px md:w-50px md:h-20px">
      <Line
        data={{
          labels: data.map((_, i) => i),
          datasets: [
            {
              data,
              borderColor: color,
              pointRadius: 0,
              tension: 0.3,
              borderWidth: 1
            }
          ]
        }}
        options={{
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
          scales: {
            x: { display: false },
            y: { display: false }
          },
          elements: { line: { borderWidth: 2 }, point: { radius: 0 } },
          responsive: true,
          maintainAspectRatio: false
        }}
      />
    </div>
  );
}


export default MiniChart;