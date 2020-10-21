import React, { Component } from 'react';
import fire from './fire'
import 'bootstrap/dist/css/bootstrap.min.css';


class FormInputIn extends Component {
    
  constructor() {
    super();
      this.state = {
      imports: [],
      import_id: '',
      date: '',
      name: '',
      bill_num: '',
      item_num: '',
      color: '',
      width: '',
      size: '',
      number: '',
      weight: '',
      price: '',
      note: ''
    }

    //ส่วนการเปลี่ยนแปลงข้อมูล แอดข้อมูลและส่งข้อมูล
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

}


componentDidMount() {
    const importRef = fire.database().ref('imports'); // อ้างอิงไปยังตัวแปราชื่อ  items เมื่อเพิ่มข้อมูลไปยัง firebase จะเพิ่มไปยังล็อกที่ชื่อ items
    importRef.on('value', (snapshot) => {
      let imports = snapshot.val();
      let newState = [];
      for (let index in imports) {
        newState.push({
          import_id: index,
          date: imports[index].date,
          bill_num: imports[index].bill_num,
          item_num: imports[index].item_num,
          color: imports[index].color,
          width: imports[index].width,
          size: imports[index].size,
          number: imports[index].number,
          weigth: imports[index].weigth,
          price: imports[index].price,
          note: imports[index]. note,
        })
      }
      this.setState({
        imports: newState
      })
    })
  }

  //รับข้อความ
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //ส่งข้อมูล
  handleSubmit(e) {
    e.preventDefault();

    if (this.state.import_id != '') {
      return this.updateItem();
    }

    //ส่วนการดึงข้อมูลมาจาก firtebase มาแสดงค่า
    const importsRef = fire.database().ref('imports')
    const import_data = {
      date: this.state.date,
      name: this.state.name,
      bill_num: this.state.bill_num,
      item_num: this.state.item_num,
      color: this.state.color,
      width: this.state.width,
      size: this.state.size,
      number: this.state.number,
      weigth: this.state.weigth,
      price: this.state.price,
      note: this.state.note
    }

    importsRef.push(import_data)
    this.setState({
      import_id: '',
      date: '',
      name: '',
      bill_num: '',
      item_num: '',
      color: '',
      width: '',
      size: '',
      number: '',
      weight: '',
      price: '',
      note: ''
    })
  }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-8">
                            <div className="form-row">
                                <div className="col-6">
                                    <input type="text" name="date" className="form-control" placeholder="Input Date" onChange={this.handleChange} value={this.state.date} />
                                </div>
                                <div className="col-6">
                                    <input type="text" name="name" className="form-control" placeholder="Input Size" onChange={this.handleChange} value={this.state.naem} />
                                </div>
                                <div className="col-6">
                                    <input type="text" name="bill_num" className="form-control" placeholder="Input Bill Number" onChange={this.handleChange} value={this.state.bill_num} />
                                </div>
                                <div className="col-6">
                                    <input type="text" name="item_num" className="form-control" placeholder="Item Number" onChange={this.handleChange} value={this.state.item_num} />
                                </div>
                                <div className="col-6">
                                    <input type="text" name="color" className="form-control" placeholder="Input Color" onChange={this.handleChange} value={this.state.color} />
                                </div>
                                <div className="col-6">
                                    <input type="text" name="width" className="form-control" placeholder="Input Width" onChange={this.handleChange} value={this.state.width} />
                                </div>
                                <div className="col-6">
                                    <input type="text" name="size" className="form-control" placeholder="Input Size" onChange={this.handleChange} value={this.state.size} />
                                </div>
                                <div className="col-6">
                                    <input type="text" name="number" className="form-control" placeholder="Input Number" onChange={this.handleChange} value={this.state.number} />
                                </div>
                                <div className="col-6">
                                    <input type="text" name="weight" className="form-control" placeholder="Input Weight" onChange={this.handleChange} value={this.state.weight} />
                                </div>
                                <div className="col-6">
                                    <input type="text" name="price" className="form-control" placeholder="Input Price" onChange={this.handleChange} value={this.state.price} />
                                </div>
                                <div className="col-6">
                                    <input type="text" name="note" className="form-control" placeholder="Input Note" onChange={this.handleChange} value={this.state.note} />
                                </div>
                                <div className="col-6">
                                    <button class="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormInputIn