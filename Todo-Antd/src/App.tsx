// import { Row, Col, Layout } from "antd";
import { Col, Row } from "antd";
import { AddTodo } from "./components/AddTodo";
import { Chart } from "./components/Chart";
import { DisplayTodos } from "./components/DisplayTodos";


const App = () => {
  return (
      <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
        <Row gutter={[24, 24]} align="middle" >
        <Col xs={24} md={16}>
          <AddTodo/>
        </Col>
        <Col xs={24} md={8} style={{marginLeft: -20}}>
          <Chart/>
        </Col>
        </Row>
    
    <DisplayTodos/>
    </div>
  );
};

export default App;
