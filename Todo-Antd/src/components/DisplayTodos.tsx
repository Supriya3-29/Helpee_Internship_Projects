import { useState } from "react";
import { Button, Card, Col, Row, Tag, Empty, Space, Select } from "antd";
import useTodoStore from "../store/todoStore";
import { MdDeleteOutline } from "react-icons/md";
import type { Task } from "../store/todoStore";
import { statusArr, priorityArr } from "./AddTodo";

export const DisplayTodos = () => {
  const tasks = useTodoStore((state) => state.tasks) as Task[];
  const removeTask = useTodoStore((state) => state.removeTask);
  const updateTaskStatus = useTodoStore((state) => state.updateTaskStatus);

  const [selectedTag, setSelectedTag] = useState('');

  const allTags = Array.from(new Set(tasks.flatMap((task) => task.tags)));

  const filteredTasks = selectedTag
    ? tasks.filter((task) => task.tags.includes(selectedTag))
    : tasks;

  return (
    <div style={{ padding: '20px', width: '100%' }}>

      {/* Tag Filter Section */}
      <Space wrap style={{ marginBottom: 20 }}>
        <Tag
          color={selectedTag === '' ? 'blue' : 'default'}
          onClick={() => setSelectedTag('')}
          style={{ cursor: 'pointer' }}
        >
          All
        </Tag>

        {allTags.map((tag) => (
          <Tag
            key={tag}
            color={selectedTag === tag ? 'blue' : 'default'}
            onClick={() => setSelectedTag(tag)}
            style={{ cursor: 'pointer' }}
          >
            {tag}
          </Tag>
        ))}
      </Space>

      {/* Tasks Grid */}
      <Row gutter={[24, 24]}>
        {filteredTasks.map((task: Task) => (
          <Col key={task.id} xs={24} sm={12} md={8}>
            <Card
              title={task.name}
              extra={
                <Button
                  type="text"
                  danger
                  icon={<MdDeleteOutline />}
                  onClick={() => removeTask(task.id)}
                />
              }
            >
              <p style={{ marginBottom: 10 }}>{task.description}</p>

              {/* Tags */}
              {task.tags && task.tags.length > 0 && (
                <Space wrap style={{ marginBottom: 10 }}>
                  {task.tags.map((tag) => (
                    <Tag color="green" key={tag}>
                      {tag}
                    </Tag>
                  ))}
                </Space>
              )}

              {/* Status */}
              <div style={{ marginBottom: 5 }}>
                <strong>Status: </strong>
                <Select
                  value={task.status}
                  onChange={(value) => updateTaskStatus(task.id, value)}
                  options={statusArr.map((status, index) => ({
                    value: index,
                    label: status,
                  }))}
                  style={{ width: 150 }}
                />
              </div>

              {/* Priority */}
              <div style={{ marginBottom: 5 }}>
                <strong>Priority:</strong> {priorityArr[task.priority]}
              </div>

              {/* Date */}
              <div style={{ marginBottom: 0 }}>
                <strong>Date:</strong> {task.date}
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Empty State */}
      {filteredTasks.length === 0 && (
        <div style={{ marginTop: 50, textAlign: "center" }}>
          <Empty description="No tasks found" />
        </div>
      )}
    </div>
  );
};
