export interface Study {
  id?: number;
  studyname?: string;
  description?: string;
  highestScore?: number;
  created_at?: string;
  updated_at?: string;
  quiz?: string;
  attempts?: [];
}
