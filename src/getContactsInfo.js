/* @flow */
import type { Axios } from 'axios';
import type { User } from './getUserInfo';

export default function getContactsInfo(instance: Axios, ids: string[]): Promise<Array<?User>> {
  if (ids.length === 0) {
    return Promise.resolve([]);
  }
  return instance
    .get('contacts/' + ids.join(','))
    .then(response => ids.map(id => response.data.data.find((contact: User) => contact.id === id)));
}
