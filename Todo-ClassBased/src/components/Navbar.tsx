// import { Row, Flex } from 'antd';
import { Component } from 'react'
import { SiTodoist } from "react-icons/si";
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div style={{
        display:'grid', 
        gridTemplateColumns:'2fr 1fr', 
        padding:'10px', 
        backgroundColor:'white', 
        alignItems:'center', 
        justifyContent:'space-between', 
        gap:'10px',
        fontSize:'20px'
      }}>
        <div><SiTodoist  style={{width:'50px', height:'50px'}}/></div>
        <div style={{ display:"flex", flexDirection:"row", gap: "10px" }}>
            <Link to={"/"}><span>Home</span></Link>
            <Link to={"/lists"}><span>Lists</span></Link>
            <Link to={"/chart"}><span>Chart</span></Link>
            <Link to={"/about"}><span>About</span></Link>
            <Link to={"/contact"}><span>Contact</span></Link>
        </div>
      </div>
    )
  }
}
