import { FeedbackInterface } from 'interfaces/feedback';
import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface TrackInterface {
  id?: string;
  title: string;
  file: string;
  client_id?: string;
  created_at?: any;
  updated_at?: any;
  feedback?: FeedbackInterface[];
  client?: ClientInterface;
  _count?: {
    feedback?: number;
  };
}

export interface TrackGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  file?: string;
  client_id?: string;
}
