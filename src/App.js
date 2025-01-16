import { useEffect, useState } from "react";
import "./App.css";
import request from "./services/api";
import DataTable from "./components/DataTable";

function App() {
  const [provas, setProvas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await request("/provas");
        setProvas(
          data.map((value) => {
            value.data = new Date(value.data * 1000).toLocaleDateString();
            return value;
          })
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <header className="App-header"></header>
      <div className="App">
        <DataTable data={provas} />
      </div>
    </div>
  );
}

export default App;
