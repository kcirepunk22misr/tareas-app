import './styles.css';
import { TodoList } from './classes';
import { crearTodoHtml } from './js/component';
export const todoList = new TodoList();
todoList.todos.forEach(crearTodoHtml);
