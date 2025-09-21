import "./component.css";

export default function PlaceHolder({
  type = "text",               // default to text
  placeholder = "Enter here",  // default placeholder
  name,
  value,
  onChange,
  onClick,
  className = "",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      onClick={onClick}
      className={className}
      aria-label={placeholder}
    />
  );
}
