
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
);


 function ChartCard({ data }) {
  
  if (!data?.labels || !data?.datasets) return null;


   const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },

     elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div className="px-2 h-180px w-100">
      <Line data={data} options={options} />
    </div>
  );
}


export default ChartCard;