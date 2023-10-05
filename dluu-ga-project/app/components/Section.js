import DropdownOptions from "./DropdownOptions"

export default function Section(props) {
    return (
        <div>
        <h1>{props.section.sectionTitle}</h1>
        {props.section.questions.map((questions, i) => {
          return (
            <div className="grid grid-cols-2" key={i}>
              <DropdownOptions identifier={props.section.sectionTitle + "" + i} />
              <div className="grid">
                <text>{questions}</text>
                {/* <textarea>Write message here</textarea> */}
              </div>
            </div>
          );
        })}
      </div>
    );
    
}