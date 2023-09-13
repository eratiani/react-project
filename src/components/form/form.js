import BtnSave from "../utility/btn-save";
import NameInput from "./name-input";
import Sectors from "./sectors";
const SubmitForm = ({ sectors }) => {
  return (
    <form
      action="#"
      method="POST"
      className="w-full flex justify-center flex-col items-center"
    >
      <NameInput />
      <Sectors sectors={sectors} />
      <BtnSave />
    </form>
  );
};
export default SubmitForm;
