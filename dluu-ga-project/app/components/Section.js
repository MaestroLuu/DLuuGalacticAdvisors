import DropdownOptions from "./DropdownOptions"

export default function Section() {
    return (
        <div>
            <h1>section title</h1>
            <div className="grid grid-cols-2">
                <DropdownOptions />
                <p>question 1</p>
            </div>
        </div>
    )
}