import { useMemo, useState } from "react";
import "./index.css";

const data = [
  { id: "dep-1", name: "Legal", ticketCount: 32, colour: "#3F888F" },
  { id: "dep-2", name: "Sales", ticketCount: 20, colour: "#FFA420" },
  { id: "dep-3", name: "Engineering", ticketCount: 60, colour: "#287233" },
  { id: "dep-4", name: "Manufacturing", ticketCount: 5, colour: "#4E5452" },
  { id: "dep-5", name: "Maintenance", ticketCount: 14, colour: "#642424" },
  {
    id: "dep-6",
    name: "Human Resourcing",
    ticketCount: 35,
    colour: "#1D1E33",
  },
  { id: "dep-7", name: "Events", ticketCount: 43, colour: "#E1CC4F" },
];

const Bar = ({ name, colour, ticketCount, height }) => {
  return (
    <div
      className="bar"
      style={{
        backgroundColor: colour,
        height: `${height}%`,
      }}
    >
        <div className="tooltip">
            {name}-{ticketCount}

        </div>
    </div>
  );
};

const BarCharts = () => {
  const [showChart, setShowChart] = useState(true);

  const maxTicketCount = useMemo(() => {
    return Math.max(...data.map((item) => item.ticketCount));
  }, []);
  return (
    <main className="container">
      <button onClick={() => setShowChart(!showChart)}> Toggle</button>

      {showChart ? (
        <div className="chart-container">
          <div className="chart">
            {data.map((bar) => (
              <Bar
                key={bar.id}
                height={(bar.ticketCount / maxTicketCount) * 100}
                {...bar}
              />
            ))}
          </div>
          <div className="y-axis-label"> Number of tickets </div>
          <div className="x-axis-label"> Departments </div>
        </div>
      ) : null}
    </main>
  );
};

export default BarCharts;
