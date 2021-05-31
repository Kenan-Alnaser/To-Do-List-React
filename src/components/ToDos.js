const ToDos = (props) => {
  const userTodos = props.list.map((toDo, i) => (
    <li class="listItem" key={i}>
      <input
        type="checkbox"
        defaultChecked={toDo.done}
        onChange={() => props.check(toDo.id)}
      />
      {toDo.title}
      <i
        onClick={() => {
          props.remove(toDo.id);
        }}
      >
        🗑
      </i>
    </li>
  ));
  return <ul class="listContainer">{userTodos}</ul>;
};

export default ToDos;
