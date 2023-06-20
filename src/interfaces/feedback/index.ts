import { UserInterface } from 'interfaces/user';
import { TrackInterface } from 'interfaces/track';
import { GetQueryInterface } from 'interfaces';

export interface FeedbackInterface {
  id?: string;
  content: string;
  user_id?: string;
  track_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  track?: TrackInterface;
  _count?: {};
}

export interface FeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  track_id?: string;
}
