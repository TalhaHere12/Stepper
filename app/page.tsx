"use client"
import WhizFlow from 'whizflow';
import { Step } from 'whizflow/dist/types';
const workflow: Step[] = [
  {
    id: 'step1',
    questions: [
      {
        id: 'question1',
        prompt: 'What is your name?',
        inputType: 'text',
      },
    ],
    next: (answers) => 'step2',
  },
  {
    id: 'step2',
    questions: [
      {
        id: 'question2',
        prompt: 'What is your favorite color?',
        inputType: 'text',
      },
    ],
    next: (answers) => 'done',
  },
];

const questionTypes = {
  text: (question, answers, setAnswers) => (
    <div key={question.id}>
      <label htmlFor={question.id}>{question.prompt}</label>
      <input
        id={question.id}
        type="text"
        value={answers[question.id] || ''}
        onChange={(e) =>
          setAnswers({ ...answers, [question.id]: e.target.value })
        }
      />
    </div>
  ),
  // Add more question types and their render functions here
};

const YourComponent = () => {
  return (
    <WhizFlow workflow={workflow} questionTypes={questionTypes}>
      {({ step, answers, setAnswers, handleNext, renderQuestion }) => (
        <div>
          {step.questions.map((question) => renderQuestion(question.id))}
          <button onClick={handleNext}>Next</button>
        </div>
      )}
    </WhizFlow>
  );
};

export default YourComponent;