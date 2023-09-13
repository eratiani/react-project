const Sectors = ({ sectors }) => {
  return (
    <select className="w-full md:w-2/5 p-2 border rounded" multiple size="5">
      {sectors.map((sector, index) => (
        <option key={index} value={sector}>
          {sector}
        </option>
      ))}
    </select>
  );
};
export default Sectors;
