import { Typography } from 'antd'
import { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <Typography.Title level={1} style={{display:'flex', justifyContent:'center', textAlign:'center', marginTop:'20px'}}>About</Typography.Title>
    )
  }
}
