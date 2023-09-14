import { useState } from "react";
import BtnSave from "../utility/btn-save";
import NameInput from "./name-input";
import Sectors from "./sectors";
import PrivacyPol from "./privacy-policy";
import { updateCurrForm } from "./services/form.service";
import { useNavigate } from "react-router-dom";
const SubmitForm = ({ sectors }) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: false,
    sector: false,
    privacy: false,
  });

  const isFormValid = () => {
    return formState.name && formState.sector && formState.privacy;
  };

  const handleNameInputChange = (value) => {
    const isNameFilled = value.trim() !== "";
    setFormState((prevState) => ({ ...prevState, name: isNameFilled }));
  };

  const handleSectorChange = (selectedSectors) => {
    const isSectorSelected = selectedSectors.length > 0;
    setFormState((prevState) => ({ ...prevState, sector: isSectorSelected }));
  };

  const handlePrivacyPolicyChange = (isChecked) => {
    setFormState((prevState) => ({ ...prevState, privacy: isChecked }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValue = {
      name: formData.get("userName"),
      sector: Array.from(formData.getAll("sector")),
      privacy: formData.get("privacy") === "on",
    };

    if (isFormValid()) {
      updateCurrForm(formValue);
      navigate("/projects");
    }
  };
  return (
    <form
      action="#"
      method="POST"
      className="w-full flex justify-center flex-col items-center"
      onSubmit={handleSubmit}
    >
      <NameInput onChange={handleNameInputChange} />
      <Sectors sectors={sectors} onChange={handleSectorChange} />
      <PrivacyPol onChange={handlePrivacyPolicyChange} />
      <BtnSave disabled={!isFormValid()} />
    </form>
  );
};

export default SubmitForm;
