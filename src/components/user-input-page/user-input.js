import { getCurrentForm } from "../form/services/form.service";
import BtnEdit from "./components/btn-edit";

const UserInput = () => {
  const data = getCurrentForm();

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <h2 className="text-xl text-center font-bold mb-4">
        Thank you for input {data.name}!
      </h2>
      <p>your choice: {data.sector}</p>
      <BtnEdit disabled={false} type={"edit"} />
    </div>
  );
};
export default UserInput;
