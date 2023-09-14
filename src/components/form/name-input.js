import { useEffect } from "react";

const NameInput = ({ onChange, nameValue }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  useEffect(() => {
    const namInp = document.getElementById("name");
    if (nameValue) namInp.value = nameValue;
  }, [nameValue]);
  return (
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
        name="userName"
        onChange={handleChange}
      />
    </div>
  );
};
export default NameInput;
