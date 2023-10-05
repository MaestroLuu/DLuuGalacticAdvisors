export default function AvgScore() {

    let questionsSum = 8;
    let questionsCount = 8;
    let avgScore = (questionsSum/questionsCount)*100;
    let Insurability;
    switch (avgScore) {
        case avgScore < 50:
            Insurability = "Low"
        case avgScore >= 50 & avgScore < 75:
            Insurability = "Average"
        default:
            Insurability = "High"
            break;
    }
    return (
    <div>
      <h1>{avgScore}% Overall Insurability Score - {avgScore}% - {Insurability}</h1>
    </div>
  );
}
