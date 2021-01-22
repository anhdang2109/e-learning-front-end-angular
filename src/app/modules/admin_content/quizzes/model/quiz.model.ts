import {Question} from '../../questions/questions.model';

export interface Quiz {
  id?: number;
  quizname?: string;
  description?: string;
  randomNumber?: number;
  questions?: Question[];
  studyId?: any;
}
