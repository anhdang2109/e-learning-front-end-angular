import {Quiz} from "../quizzes/model/quiz.model";
import {Study} from '../studies/model/study.model';

export interface Category {
  id?: number;
  name?: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
  quizzes?: Quiz[];
  studies?: Study[];
  study?: Study;
  quantityQuiz?: any;
}
