import React, { useState } from "react";
import Section  from "./Section/Section";
import Statistics  from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Container from "./Container/Container";
import Notification from "./Notification/Notification";

export default function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = { good, neutral, bad };

 const onLeaveFeedback = (e) => {
   const BtnClickTarget = e.target.textContent.toLowerCase();
   switch (BtnClickTarget) {
     case "good":
       return setGood((prev) => prev + 1);
     case "neutral":
       return setNeutral((prev) => prev + 1);
     case "bad":
       return setBad((prev) => prev + 1);
     default:
       return
   }
  }

   const countTotalFeedback = () => {
    return Object.values(state).reduce((total, item) => total + item, 0);
  };
  
  const countPositiveFeedbackPercentage = () => {
    return Math.ceil(((state.good) / (state.good + state.neutral + state.bad)) * 100);
  }

  const total = countTotalFeedback();

  return (
    <Container>

 <Section title={'Please leave feedback'}>
   <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={onLeaveFeedback} />
   </Section>
    
       <Section title={'Statistics'}>
         {total === 0 ? <Notification message="There is no feedback" />
        : <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />} 
         </Section>
         </Container>
  )
}



