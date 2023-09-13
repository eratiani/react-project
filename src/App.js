import "./App.css";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { fetchSectors } from "./database/server-requests";
import SubmitForm from "./components/form/form";
function App() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [agreed, setAgreed] = useState(false);
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
      <form>
        <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
          <div className="flex h-6 items-center">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className={classNames(
                agreed ? "bg-indigo-600" : "bg-gray-200",
                "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              )}
            >
              <span className="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                className={classNames(
                  agreed ? "translate-x-3.5" : "translate-x-0",
                  "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                )}
              />
            </Switch>
          </div>
          <Switch.Label className="text-sm leading-6 text-gray-600">
            By selecting this, you agree to our{" "}
            <a href="#" className="font-semibold text-indigo-600">
              privacy&nbsp;policy
            </a>
            .
          </Switch.Label>
        </Switch.Group>
      </form>
      {/* Add other form fields and Save button */}
    </div>
  );
}

export default App;
