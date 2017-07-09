/* @flow */
import type { Axios } from 'axios';

export type Comment = {
  id: string,
  authorId: string,
  text: string,
  createdDate: string,
  taskId: ?string,
  folderId: ?string,
};

export default function getCommentsFromTask(instance: Axios, id: string): Promise<Array<Comment>> {
  return instance.get('tasks/' + id + '/comments').then(response => response.data.data);
}
