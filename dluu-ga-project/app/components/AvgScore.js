export default function AvgScore(props) {
    //review value to determine probability
    // let Insurability;
    // switch (props.average) {
    //     case props.average < 50:
    //         Insurability = "Low"
    //     case props.average >= 50 & props.average < 75:
    //         Insurability = "Average"
    //     default:
    //         Insurability = "High"
    //         break;
    // }
    return (
    <div>
      <h1>{props.average}% Overall Insurability Score - {props.average}%</h1>
    </div>
  );
}
