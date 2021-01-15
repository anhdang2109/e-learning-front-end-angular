export interface Study {
  id?: string;
  studyname?: string;
  description?: string;
  highestScore?: string;
  created_at?: string;
  updated_at?: string;
  quiz?: string;
  attempts: [];
}
