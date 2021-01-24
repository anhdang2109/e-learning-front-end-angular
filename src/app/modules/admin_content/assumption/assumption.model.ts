import {UserAnswer} from './user-answer.model';
import {Question} from '../questions/questions.model';

export interface Assumption {
  id?: number;
  guessNumber?: number;
  point: string;
  status?: string;
  isCorrect?: boolean;
  isFlag?: boolean;
  type?: string;
  level?: string;
  content?: string;
  explanation?: string;
  question: Question;
  userAnswers?: UserAnswer[];
}
