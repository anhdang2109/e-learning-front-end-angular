import {Question} from '../../questions/questions.model';
import {Category} from '../../category/category.model';

export interface Quiz {
  id?: number;
  quizname?: string;
  description?: string;
  category?: Category;
  randomNumber?: number;
  questions?: Question[];
  studyId?: any;
}
