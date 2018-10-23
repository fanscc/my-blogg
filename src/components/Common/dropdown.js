import React, {Component} from 'react';
import { Menu, Dropdown, Icon, Button } from 'antd';




class dropdown extends Component {
    constructor(props) {
      super(props);
      this.state = {
             type: '',
             typeName: '所有分类',
             disabled: true
          }
          this.changeItem = this.changeItem.bind(this);      
    }
    componentDidMount() {
      this.setState({disabled: !this.props.disabled})
    }
    changeItem(e) {
      debugger
      let typeObj = {
        '0': 'javascript',
        '1': '人工智能',
        '2': '区域链'
      }
      let typeName = typeObj[e.key]
      this.setState({type: e.key,typeName: typeName});
      let obj = {
        typeName: typeName,
        type: e.key
      }
      this.props.childrenClick(obj)
    }
    render() {
      const menu = (
        <Menu  onClick={this.changeItem}>
          <Menu.Item key="0">
            <a href="##">javascript</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="##">人工智能</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="2">区域链</Menu.Item>
        </Menu>
      );
      return (
              <Dropdown overlay={menu} trigger={['click']} disabled={!this.state.disabled}>
                  <Button style={{ marginLeft: 8 }}>
                      {this.props.typeName? this.props.typeName : '所有分类'} <Icon type="down" />
                  </Button>
              </Dropdown>
      )
	  }
}
   
export default dropdown; 