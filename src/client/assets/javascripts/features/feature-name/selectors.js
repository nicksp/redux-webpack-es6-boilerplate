// todos/selectors.js
import { createSelector } from 'reselect';
import _ from 'lodash';
import { NAME } from './constants';
import { filterActive, filterCompleted } from './model';

export const getAll = state => state[NAME];

export const getCompleted = _.compose(filterCompleted, getAll);

export const getActive = _.compose(filterActive, getAll);

export const getCounts = createSelector(
  getAll,
  getCompleted,
  getActive,
  (allTodos, completedTodos, activeTodos) => ({
    all: allTodos.length,
    completed: completedTodos.length,
    active: activeTodos.length
  })
);


///

Here’s an example of a TODO list component.
import { createStructuredSelector } from 'reselect';
import { getAll } from '../selectors';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (
  <div>
    todos.map(t => <TodoItem todo={t}/>)
  </div>
);

export default connect(
  createStructuredSelector({
    todos: getAll
  })
)(TodoList);
