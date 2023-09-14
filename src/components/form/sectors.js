import { useEffect } from "react";

const Sectors = ({ sectors, onChange, currSector }) => {
  const handleSectorChange = (event) => {
    const selectedSectors = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    onChange(selectedSectors);
  };
  useEffect(() => {
    const selectElement = document.querySelector("select[name='sector']");
    if (selectElement) {
      selectElement.value = currSector;
    }
  }, [currSector]);
  return (
    <select
      name="sector"
      className="w-full md:w-2/5 p-2 border rounded"
      multiple
      size="5"
      onChange={handleSectorChange}
    >
      {sectors.map((sector, index) => (
        <option key={index} value={sector}>
          {sector}
        </option>
      ))}
    </select>
  );
};
export default Sectors;
