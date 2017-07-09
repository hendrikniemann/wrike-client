/* @flow */
import type { Axios } from 'axios';
import type { Comment } from './getCommentsFromTask';

export default function createCommentOnTask(
  instance: Axios,
  taskId: string,
  content: string,
): Promise<Comment> {
  return instance
    .post(`tasks/${taskId}/comments`, `text=${content}`)
    .then(response => response.data.data);
}
