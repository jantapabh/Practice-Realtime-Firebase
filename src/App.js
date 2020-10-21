import React, { Component } from 'react';
import fire from './fire'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import FormInputIn from './FormInputIn'


class App extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     items: [],
  //     item_id: '',
  //     width: '',
  //     size: '',
  //     color: '',
  //     number: ''
  //   }

  //   //ส่วนการเปลี่ยนแปลงข้อมูล แอดข้อมูลและส่งข้อมูล
  //   this.handleChange = this.handleChange.bind(this)
  //   this.handleUpdate = this.handleUpdate.bind(this)
  //   this.handleSubmit = this.handleSubmit.bind(this)

  // }

  // componentDidMount() {
  //   const itemsRef = fire.database().ref('1'); // อ้างอิงไปยังตัวแปราชื่อ  items เมื่อเพิ่มข้อมูลไปยัง firebase จะเพิ่มไปยังล็อกที่ชื่อ items
  //   itemsRef.on('value', (snapshot) => {
  //     let items = snapshot.val();
  //     let newState = [];
  //     for (let item in items) {
  //       newState.push({
  //         item_id: item,
  //         width: items[item].width,
  //         size: items[item].size,
  //         color: items[item].color,
  //         number: items[item].number
  //       })
  //     }
  //     this.setState({
  //       items: newState
  //     })
  //   })
  // }

  // //รับข้อความ
  // handleChange(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  // //ส่งข้อมูล
  // handleSubmit(e) {
  //   e.preventDefault();

  //   if (this.state.item_id != '') {
  //     return this.updateItem();
  //   }

  //   //ส่วนการดึงข้อมูลมาจาก firtebase มาแสดงค่า
  //   const itemsRef = fire.database().ref('items')
  //   const item = {
  //     width: this.state.width,
  //     size: this.state.size,
  //     color: this.state.color,
  //     number: this.state.number
  //   }

  //   itemsRef.push(item)
  //   this.setState({
  //     item_id: '',
  //     width: '',
  //     size: '',
  //     color: '',
  //     number: ''
  //   })
  // }

  // //ส่วนของการอัพเดพข้อมูล
  // handleUpdate = (item_id = null, width = null, size = null, color = null, number = null) => {
  //   this.setState({ item_id, width, size, color, number })
  // }

  // updateItem() {

  //   var obj = { width: this.state.width, size: this.state.size, color: this.state.color, number: this.state.number }

  //   const itemsRef = fire.database().ref('/items')

  //   itemsRef.child(this.state.item_id).update(obj);

  //   this.setState({
  //     item_id: '',
  //     width: '',
  //     size: '',
  //     color: '',
  //     number: ''
  //   })

  // }

  // //ส่วนการลบข้อมูล
  // removeItem(itemId) {
  //   const itemsRef = fire.database().ref('/items');
  //   itemsRef.child(itemId).remove();
  // }

  render() {
    return (
      <div className="app">
     <FormInputIn />
      </div >
    );
  }
}

export default App;