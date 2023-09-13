import "./App.css";
import { useState, useEffect } from "react";
import { fetchSectors } from "./database/server-requests";
import SubmitForm from "./components/form/form";
function App() {
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    fetchSectors().then((data) => {
      console.log(data);
      setSectors(data);
    });
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl text-center font-bold mb-4">
        Please enter your name and pick the Sectors you are currently involved
        in.
      </h1>
      <SubmitForm sectors={sectors} />
    </div>
  );
}

export default App;
