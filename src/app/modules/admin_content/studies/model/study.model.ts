import {Quiz} from '../../quizzes/model/quiz.model';
import {User} from '../../users/user.model';

export interface Study {
  id?: number;
  description?: string;
  highestScore?: number;
  created_at?: string;
  updated_at?: string;
  quiz?: Quiz;
  user?: User;
  userID?: number;
  username?: string;
  quizname?: string;
  email?: string;
  attempts?: [];
}
