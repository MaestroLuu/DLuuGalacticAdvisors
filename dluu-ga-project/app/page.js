"use client";
import React, {useState} from "react";
import Header from "./components/Header";
import AvgScore from "./components/AvgScore";
import Section from "./components/Section";
import data from "./data/questions.json";

export default function Home() {
  //calculate avg for assessment
  const [average, setAverage] = useState(0);

  // gets count of all questions
  function sectionAndQuestionCounts() {
    let questionCount = 0;
    data.Sections.map((section) => {
      questionCount += section.questions.length;
    });
    return questionCount;
  }

  //gets sum of all question vals
  function sumOfQuestion(event) {
    let sum = 0;
    data.Sections.map((section, i) => {
      section.questions.map((question, j) => {
        // values can be decimal - remove spacing to prevent possible issues
        let answer = parseFloat(
          event.target[section.sectionTitle.replace(/\s/g, "") + j].value
        );
        sum += answer;
      });
    });
    return sum;
  }

  //submit calculates avg
  function onSubmit(event) {
    console.log(event.target);
    event.preventDefault();
    let sum = sumOfQuestion(event);
    let questionCount = sectionAndQuestionCounts();
    let result = Math.round(100 * (sum / questionCount));
    setAverage(result);
  }

  return (
    <main>
      <form onSubmit={onSubmit}>
        <input type="text" name="name"/>
        <Header />
        <AvgScore average={average} />
        {data.Sections.map((section, i) => (
          <Section key={i} section={section} />
        ))}
        <AvgScore average={average} />
        <button type="submit">Submit</button> <br/>
        <button
          onClick={(e) => {
            e.preventDefault();
            print();
            location.reload();
          }}
        >
          Print
        </button>
      </form>
    </main>
  );
}
