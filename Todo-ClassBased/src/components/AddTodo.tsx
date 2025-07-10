import { Component } from 'react'
import useTodoStore from '../store/todoStore';
import { Flex, Typography, Input, Select, DatePicker, Button } from 'antd';
// import { useNavigate } from 'react-router-dom';

interface Todo {
    todoName: string,
    description: string,
    status: number,
    tags: string,
    priority: number,
    date: string,
}

interface Props {
    navigate: (path: string) => void;
  }

export const statusArr = ['Select Status', 'Completed', 'On-Hold', 'In-Process', 'Yet-To-Start'];
export const priorityArr = ['Select Priority', 'Low', 'Medium', 'High'];

export default class AddTodo extends Component<Props, Todo> {
    addTodo = useTodoStore.getState().addTask;

    constructor(props: Props) {
        super(props);
        this.state = {
            todoName: "",
            description: "",
            status: 0,
            tags: "",
            priority: 0,
            date: ""
        }
    }

    handleSubmit = () => {
        const { todoName, status, tags, priority, description } = this.state;

        if (!todoName) {
            return alert("Please add a task");
        }
        if (status === 0) {
            return alert("Please select a valid status");
        }

        const id = Math.ceil(Math.random() * 1000000);

        this.addTodo({
            id,
            name: todoName,
            description: description,
            status: status,
            tags: tags ? tags.split(",").map((t) => t.trim()) : [],
            priority: priority,
            date: new Date().toDateString()
        });
        console.log("task added");

        this.setState({
            todoName: "",
            description: "",
            status: 0,
            tags: "",
            priority: 0,
            date: ""
        });

        this.props.navigate(`/lists?id=${id}`);
    }

    render() {
        return (
            <Flex vertical align="center" >
                <Typography.Title level={2} >
                    My Todo List
                </Typography.Title>

                <Flex vertical gap={16} style={{ border: '1px solid #d9d9d9', borderRadius: 8, padding: 24, backgroundColor: 'white', width: '100%', maxWidth: 400 }}>
                    {/* Task Name */}
                    <Input
                        placeholder="Enter the task"
                        value={this.state.todoName}
                        onChange={(e) => this.setState({ todoName: e.target.value })}
                    />

                    {/* Description */}
                    <Input.TextArea
                        rows={4}
                        placeholder="Write description..."
                        value={this.state.description}
                        onChange={(e) => this.setState({ description: e.target.value })}
                    />

                    {/* Status */}
                    <Select
                        value={this.state.status}
                        onChange={(value) => this.setState({ status: value })}
                        options={statusArr.map((status, index) => ({ value: index, label: status }))}
                        placeholder="Select Status"
                    />

                    {/* Tags */}
                    <Input
                        placeholder="Tags (comma separated)"
                        value={this.state.tags}
                        onChange={(e) => this.setState({ tags: e.target.value })}
                    />

                    {/* Priority */}
                    <Select
                        value={this.state.priority}
                        onChange={(value) => this.setState({ priority: value })}
                        options={priorityArr.map((priority, index) => ({ value: index, label: priority }))}
                        placeholder="Select Priority"
                    />

                    {/* Date */}
                    <DatePicker
                        onChange={(_date, dateString) => {
                            if (typeof dateString === 'string') {
                                this.setState({ date: dateString });
                            }

                        }}
                        style={{ width: '100%' }}
                    />

                    {/* Submit Button */}
                    <Button
                        type="primary"
                        danger
                        block
                        onClick={this.handleSubmit}
                    >
                        Add
                    </Button>
                </Flex>
            </Flex>
        )
    }
}
