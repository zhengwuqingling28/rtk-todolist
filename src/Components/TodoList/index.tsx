import { Col, Row, Input, Button, Select, Tag } from "antd";
import { Todo } from "../Todo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoListSlice } from "../../slices/TodoList";
import { v4 as uuidv4 } from "uuid";
import { todoRemainingSelector } from "../../selectors";

export const TodoList = () => {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todoRemainingSelector);

  const dispatch = useDispatch();

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo: any) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              priority={todo.priority}
              completed={todo.completed}
            />
          );
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={(value) => {
              setPriority(value);
            }}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button
            type="primary"
            onClick={() => {
              dispatch(
                todoListSlice.actions.addTodo({
                  id: uuidv4(),
                  name: name,
                  priority: priority,
                  completed: false,
                })
              );
              setName("");
              setPriority("Medium");
            }}
          >
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
};
