/* @flow */
import type { Axios } from 'axios';

export type UserRole = 'User' | 'Collaborator';

export type UserProfile = {
  accountId: string,
  email: string,
  role: UserRole,
  external: boolean,
  admin: boolean,
  owner: boolean,
};

export type User = {
  id: string,
  firstName: string,
  lastName: string,
  type: string,
  profiles: UserProfile[],
  avatarUrl: string,
  timezone: string,
  locale: string,
  deleted: boolean,
  me: boolean,
  memberIds?: string[],
  myTeam?: boolean,
  title?: string,
  companyName?: string,
  phone?: string,
  location?: string,
};

export default function getUserInfo(instance: Axios, id: string): Promise<User> {
  return instance.get('users/' + id).then(response => response.data.data[0]);
}
