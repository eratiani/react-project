const Sectors = ({ sectors, onChange }) => {
  const handleSectorChange = (event) => {
    const selectedSectors = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    onChange(selectedSectors);
  };
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
