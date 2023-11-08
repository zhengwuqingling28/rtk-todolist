import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoListSlice } from "../../slices/TodoList";

interface Todo {
  name: string;
  priority: string;
  completed: boolean;
  id: number;
}

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export const Todo: React.FC<Todo> = ({ name, priority, completed, id }) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoListSlice.actions.toggleTodoStatus(id));
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
};
