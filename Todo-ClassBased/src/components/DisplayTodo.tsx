import { Component } from 'react';
import useTodoStore, { type Task } from '../store/todoStore';
import { MdDeleteOutline } from "react-icons/md";
import { Space, Tag, Row, Col, Card, Button, Select, Empty, Typography } from 'antd';
import { statusArr, priorityArr } from './AddTodo';

export interface displayTodo {
  selectedTag: string;
  tasks: Task[];
}

interface Props {
  id?: string;
}

export default class DisplayTodo extends Component<Props, displayTodo> {
  unsubscribe: () => void = () => { };

  constructor(props: Props) {
    super(props);

    this.state = {
      selectedTag: "",
      tasks: useTodoStore.getState().tasks
    };
  }

  componentDidMount(): void {
    this.unsubscribe = useTodoStore.subscribe((state) => {
      this.setState({ tasks: state.tasks });
    });
  }

  componentWillUnmount(): void {
    this.unsubscribe();
  }

  handleTagFilter = (tag: string) => {
    this.setState({ selectedTag: tag });
  };

  render() {
    const { selectedTag, tasks } = this.state;
    const { removeTask, updateTaskStatus } = useTodoStore.getState();
    const { id } = this.props;

    const filteredTasks = id
      ? tasks.filter(task => task.id.toString() === id)
      : selectedTag
        ? tasks.filter((task) => task.tags.includes(selectedTag))
        : tasks;

    const allTags = Array.from(new Set(tasks.flatMap(task => task.tags)));

    return (
      <div style={{ padding: '20px', width: '100%' }}>

        {id && (
          <>
            <Typography.Title level={3}>Task ID from URL: <code>{id}</code></Typography.Title>
            <br />
          </>
        )}

        {!id && (
          <Space wrap style={{ marginBottom: 20 }}>
            <Tag
              color={selectedTag === '' ? 'blue' : 'default'}
              onClick={() => this.setState({ selectedTag: "" })}
              style={{ cursor: 'pointer' }}
            >
              All
            </Tag>

            {allTags.map((tag) => (
              <Tag
                key={tag}
                color={selectedTag === tag ? 'blue' : 'default'}
                onClick={() => this.setState({ selectedTag: tag })}
                style={{ cursor: 'pointer' }}
              >
                {tag}
              </Tag>
            ))}
          </Space>
        )}

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
            <Empty description={id ? "No task found for this ID" : "No tasks found"} />
          </div>
        )}
      </div>
    );
  }
}
