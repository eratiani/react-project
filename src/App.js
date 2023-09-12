import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import sectorData from "./sectors.json";
function App() {
  const sectors = sectorData.sectors;

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl text-center font-bold mb-4">
        Please enter your name and pick the Sectors you are currently involved
        in.
      </h1>
      <form
        action="#"
        method="POST"
        className="w-full flex justify-center flex-col items-center"
      >
        <div className="py-2 flex justify-between w-full md:w-2/5">
          <label
            htmlFor="name"
            className="label text-sm font-medium leading-6 text-gray-900"
          >
            enter name
          </label>
          <input
            className="w-3/5  border-0 bg-transparent py-1.5 pl-1 text-gray-900  focus:ring-0 sm:text-sm sm:leading-6"
            id="name"
            type="text"
          />
        </div>
        <select
          className="w-full md:w-2/5 p-2 border rounded"
          multiple
          size="5"
        >
          {sectors.map((sector, index) => (
            <option key={index} value={sector}>
              {sector}
            </option>
          ))}
        </select>
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

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            save
          </button>
        </div>
      </form>
      {/* Add other form fields and Save button */}
    </div>
  );
}

export default App;
