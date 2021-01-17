import {Assumption} from '../assumption/assumption.model';
import {Study} from '../studies/model/study.model';

export interface Attempt {
  id?: number;
  name?: string;
  status?: string;
  averageScore?: number;
  study?: Study;
  assumptions?: Assumption[];
}
