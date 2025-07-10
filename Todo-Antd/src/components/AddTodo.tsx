import { Button, DatePicker, Flex, Input, Select, Typography } from "antd";
import { useState } from "react";
import useTodoStore from "../store/todoStore";

export const statusArr = ['Select Status', 'Completed', 'On-Hold', 'In-Process', 'Yet-To-Start'];
export const priorityArr = ['Select Priority', 'Low', 'Medium', 'High'];


export const AddTodo = () => {
  const addTodo = useTodoStore((state) => state.addTask);

  const [todoName, setTodoName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(0);
  const [tags, setTags] = useState("");
  const [priority, setPriority] = useState(0);
  const [_date, setDate] = useState('');

  const handleSubmit = () => {
    if (!todoName) {
      return alert("Please add a task");
    }
    if (status === 0) {
      return alert("Please select a valid status");
    }

    addTodo({
      id: Math.ceil(Math.random() * 1000000),
      name: todoName,
      description: description,
      status: status,
      tags: tags ? tags.split(",").map((t) => t.trim()) : [],
      priority: priority,
      date: new Date().toDateString()
    });

    console.log("task added");

    // Clear form
    setTodoName("");
    setDescription("");
    setStatus(0);
    setTags("");
    setPriority(0);
    setDate("");
  }

  return (
    <Flex vertical align="center" >
      <Typography.Title level={2} >
        My Todo List
      </Typography.Title>

      <Flex vertical gap={16} style={{ border: '1px solid #d9d9d9', borderRadius: 8, padding: 24, backgroundColor: 'white', width: '100%', maxWidth: 400 }}>
        {/* Task Name */}
        <Input
          placeholder="Enter the task"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />

        {/* Description */}
        <Input.TextArea
          rows={4}
          placeholder="Write description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Status */}
        <Select
          value={status}
          onChange={(value) => setStatus(value)}
          options={statusArr.map((status, index) => ({ value: index, label: status }))}
          placeholder="Select Status"
        />

        {/* Tags */}
        <Input
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        {/* Priority */}
        <Select
          value={priority}
          onChange={(value) => setPriority(value)}
          options={priorityArr.map((priority, index) => ({ value: index, label: priority }))}
          placeholder="Select Priority"
        />

        {/* Date */}
        <DatePicker
          onChange={(_date, dateString) => {
          if (typeof dateString === 'string') {
            setDate(dateString);
          }
        }}
        style={{ width: '100%' }}
        />

        {/* Submit Button */}
        <Button
          type="primary"
          danger
          block
          onClick={handleSubmit}
        >
          Add
        </Button>
      </Flex>
    </Flex>
  );
}
