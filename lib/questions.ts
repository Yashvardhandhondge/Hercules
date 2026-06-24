export interface QuestionOption {
  v: number;
  l: string;
}

export interface Question {
  prompt: string;
  options: QuestionOption[];
}

const freq: QuestionOption[] = [
  { v: 5, l: "Almost always or always" },
  { v: 4, l: "Most times (much more than half)" },
  { v: 3, l: "Sometimes (about half the time)" },
  { v: 2, l: "A few times (much less than half)" },
  { v: 1, l: "Almost never or never" },
];

export const questions: Question[] = [
  {
    prompt:
      "How do you rate your confidence that you could get and keep an erection?",
    options: [
      { v: 5, l: "Very high" },
      { v: 4, l: "High" },
      { v: 3, l: "Moderate" },
      { v: 2, l: "Low" },
      { v: 1, l: "Very low" },
    ],
  },
  {
    prompt:
      "When you had erections with stimulation, how often were they hard enough for penetration?",
    options: freq,
  },
  {
    prompt:
      "During intercourse, how often were you able to maintain your erection after penetration?",
    options: freq,
  },
  {
    prompt:
      "During intercourse, how difficult was it to maintain your erection to completion?",
    options: [
      { v: 5, l: "Not difficult" },
      { v: 4, l: "Slightly difficult" },
      { v: 3, l: "Difficult" },
      { v: 2, l: "Very difficult" },
      { v: 1, l: "Extremely difficult" },
    ],
  },
  {
    prompt:
      "When you attempted intercourse, how often was it satisfactory for you?",
    options: freq,
  },
];
