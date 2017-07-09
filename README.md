# WrikeClient

A JavaScript API wrapper for the [Wrike _for developers_ API](https://developers.wrike.com/).

## Usage
```js
import WrikeClient from 'wrike-client';

const token = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Your Wrike API token
const wrike = new WrikeClient(token);
```

## Documentation

### getTaskInfo(id: string): Promise<?Task>

Returns information for a single task.

### getTasksInfo(ids: string[]): Promise<Array<?Task>>

Returns information for a list of tasks.

### getCommentsFromTask(task: string | Task): Promise<Array<Comment>>

Returns all comments for a specific task.

### createCommentOnTask(task: string | Task, content: string): Promise<Comment>

Creates a comment with the given content underneath the specified task.

### getUserInfo(id: string): Promise<?User>

Gets information about a specified user.

### transformOldId(id: string): Promise<?string>

Transforms an old v2 id into a v3 id.

### transformOldIds(id: string[]): Promise<Array<?string>>

Transforms multiple old v2 ids into v3 ids.
