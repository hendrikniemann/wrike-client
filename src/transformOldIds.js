/* @flow */
import type { Axios } from 'axios';

export default function transformOldIds(instance: Axios, ids: string[]): Promise<Array<?string>> {
  return instance
    .get(`ids?ids=[${ids.join(',')}]&type=ApiV2Task`)
    .then(response => ids.map(id => (response.data.data.find(res => res.apiV2Id === id) || {}).id));
}
