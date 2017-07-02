/* @flow */
import axios, { type Axios } from 'axios';
import { type Task, getTasksInfo, getTaskInfo } from './getTaskInfo';
import getUserInfo from './getUserInfo';
import transformOldIds from './transformOldIds';

export default class WrikeAPI {
  instance: Axios;

  constructor(token: string) {
    this.instance = axios.create({
      baseURL: 'https://www.wrike.com/api/v3/',
      headers: { authorization: `bearer ${token}` },
    });
  }

  getTaskInfo(id: string): Promise<Task> {
    return getTaskInfo(this.instance, id);
  }

  getTasksInfo(ids: string[]): Promise<Array<?Task>> {
    return getTasksInfo(this.instance, ids);
  }

  getUserInfo(id: string) {
    return getUserInfo(this.instance, id);
  }

  transformOldId(id: string) {
    return transformOldIds(this.instance, [id]).then(res => res[0]);
  }

  transformOldIds(id: string[]) {
    return transformOldIds(this.instance, id);
  }
}
