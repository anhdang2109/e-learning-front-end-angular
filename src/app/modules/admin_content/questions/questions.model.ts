import {QuestionAnswer} from '../questions-answer/questions-answer.model';

export class Question {
  id?: number;
  code?: string;
  type?: string;
  level?: string;
  content?: string;
  explanation?: string;
  questionAnswers?: QuestionAnswer[];
}
