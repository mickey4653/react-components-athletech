const DropDown = (props) => {
  const { options, selected, onChange } = props;
  return (
    <select value={selected} onChange={(e) => onChange(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
export default DropDown;
