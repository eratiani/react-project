import { useNavigate } from "react-router-dom";

const BtnEdit = ({ disabled, type }) => {
  const navigate = useNavigate();
  const handleEdit = (event) => {
    event.preventDefault();
    navigate("../");
  };
  return (
    <div className="mt-10">
      <button
        type="submit"
        disabled={disabled}
        onClick={handleEdit}
        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {type}
      </button>
    </div>
  );
};
export default BtnEdit;
