import './ToolTip.css';
const ToolTip = (props) => {
  const { text, children } = props;
  return (
    <div className="tooltip-container">
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
};
export default ToolTip;
