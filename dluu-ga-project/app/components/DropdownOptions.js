export default function DropdownOptions(props) {
  return (
    <select
      id={props.identifier.replace(/\s/g, "")}
      name={props.identifier.replace(/\s/g, "")}
    >
      <option value="0">No answer</option>
      <option value="1">Yes</option>
      <option value="-.05">No</option>
    </select>
  );
}
