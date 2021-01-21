import {Quiz} from "../quizzes/model/quiz.model";

export interface Category {
  id?: number;
  name?: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
  quizzes?: Quiz[];
}
