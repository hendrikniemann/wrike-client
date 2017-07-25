/* @flow */
import type { Axios } from 'axios';

export type TaskStatus = 'Active' | 'Completed' | 'Deferred' | 'Cancelled';

export type TaskImportance = 'High' | 'Normal' | 'Low';

export type Task = {
  id: string,
  accountId: string,
  title: string,
  description?: string,
  briefDescription?: string,
  parentIds?: string[],
  superParentIds?: string[],
  sharedIds?: string[],
  responsibleIds?: string[],
  status: TaskStatus,
  importance: TaskImportance,
  createdDate: string,
  updatedDate: string,
  completedDate: string,
  authorIds?: string[],
  customStatusId?: string,
  permalink: string,
  followedByMe?: boolean,
  followerIds?: string[],
};

export default function getTasksInfo(instance: Axios, ids: string[]): Promise<Array<?Task>> {
  if (ids.length === 0) {
    return Promise.resolve([]);
  }
  return instance
    .get('tasks/' + ids.join(','))
    .then(response => ids.map(id => response.data.data.find((task: Task) => task.id === id)));
}
