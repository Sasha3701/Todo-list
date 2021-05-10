import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TodoListItem from "./TodoListItem";
import './TodoList.css'

let TodoList = () => {
  const list = useSelector((state) => state.list);

  return (
      <TransitionGroup component={'ul'} className="list-unstyled w-50">
        {list.map((item) => (
          <CSSTransition key={item.id} timeout={500} classNames='item'>
            <TodoListItem
              text={item.text}
              status={item.isReady}
              name={item.id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
  );
};

export default TodoList;
