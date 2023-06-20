import { ClientInterface } from 'interfaces/client';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  email: string;
  client_id?: string;
  inviter_id?: string;
  created_at?: any;
  updated_at?: any;

  client?: ClientInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  email?: string;
  client_id?: string;
  inviter_id?: string;
}
