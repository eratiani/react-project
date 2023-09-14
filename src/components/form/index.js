import { useState, useEffect } from "react";
import { fetchSectors } from "../.././database/server-requests";
import SubmitForm from "./form";

function HomePage() {
  const [sectors, setSectors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSectors()
      .then((data) => {
        setSectors(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl text-center font-bold mb-4">
        Please enter your name and pick the Sectors you are currently involved
        in.
      </h1>
      {loading ? <p>Loading...</p> : <SubmitForm sectors={sectors} />}
    </div>
  );
}

export default HomePage;
