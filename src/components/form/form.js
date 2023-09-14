import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BtnSave from "../utility/btn-save";
import NameInput from "./name-input";
import Sectors from "./sectors";
import PrivacyPol from "./privacy-policy";
import { updateCurrForm } from "./services/form.service";
import {
  getCurrentForm,
  updateRequestKey,
  getRequestKey,
} from "./services/form.service";
import { setUserData, updateUserData } from "../../database/server-requests";

const SubmitForm = ({ sectors, currData }) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: currData?.name ? true : false,
    sector: currData?.name ? true : false,
    privacy: currData?.name ? true : false,
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValue = {
      name: formData.get("userName"),
      sector: Array.from(formData.getAll("sector")),
      privacy: formData.get("privacy") === "on",
    };
    if (currData?.name) {
      if (isFormValid()) {
        updateCurrForm(formValue);
        const reqKey = getRequestKey().name;
        await updateUserData(reqKey, formValue);
        navigate("/projects");
      }
    } else {
      if (isFormValid()) {
        updateCurrForm(formValue);
        await setUserData(getCurrentForm()).then((data) => {
          updateRequestKey(data);
        });
        navigate("/projects");
      }
    }
  };
  return (
    <form
      action="#"
      method="POST"
      className="w-full flex justify-center flex-col items-center"
      onSubmit={handleSubmit}
    >
      <NameInput onChange={handleNameInputChange} nameValue={currData?.name} />
      <Sectors
        sectors={sectors}
        onChange={handleSectorChange}
        currSector={currData?.sector}
      />
      <PrivacyPol
        onChange={handlePrivacyPolicyChange}
        privacySelected={currData.privacy}
      />
      <BtnSave disabled={!isFormValid()} type={"save"} />
    </form>
  );
};

export default SubmitForm;
