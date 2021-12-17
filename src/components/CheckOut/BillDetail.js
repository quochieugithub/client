import React, { Component } from 'react'
import callApi from '../../utils/apiCaller';

export default class BillDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      provinces: null,
      states: null,
      name: '',
      address: '',
      phone: '',
      note: '',
      provinceData: '01',
      stateData: '001',
    }
  }

  async componentDidMount() {
    try {
      const myProvinces = await callApi('provinces', 'GET', null) 
      const myStates = await callApi('provinces/01/states', 'GET', null) //set static 
      this.setState({
        provinces: myProvinces.data,
        states:myStates.data
      })
    } catch (err) {
      console.log(err);
    }
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      [name]: value
    });
  }

  getBillingState = (event) => {
    return this.state; //ref react
  }

  handleChangeSelectProvince = async (event) => {
    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const res = await callApi(`provinces/${value}/states`, 'GET', null)
    this.setState({
      states: res.data,
      provinceData: value,
      stateData: res.data[0].code
    })
  } //get value of province
  handleChangeSelectState = (event) => {
    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      stateData: value
    })
  } // get value of state

  render() {
    const { provinces, states, provinceData, stateData, name, address, phone, note  } = this.state;
    return (
      <div className="col-lg-10 col-12" style={{margin: 'auto'}}>
         <form>
         <div className="checkbox-form">
           <h3>Địa chỉ giao hàng</h3>
           <div className="row">
             <div className="col-md-6">
               <div className="country-select ">
                 <label>Tỉnh/Thành <span className="required">*</span></label>
                 <select 
                 onChange={this.handleChangeSelectProvince} 
                 className="nice-select wide" 
                 name="provinces" value={provinceData}>
                   {
                     (provinces && provinces.length) ? provinces.map((province, index) => {
                       return (
                         <option key={index} value={province.code}>{province.name}</option>
                       )
                     }
                     ) : null
                   }
                 </select>
               </div>
             </div>
             <div className="col-md-6">
               <div className="country-select ">
                 <label>Quận/Huyện <span className="required">*</span></label>
                 <select onChange={this.handleChangeSelectState} className="nice-select wide" name="state" value={stateData} >
                 {
                     (states && states.length) ? states.map((state, index) => {
                       return (
                         <option key={index} value={state.code}>{state.name}</option>
                       )
                     }
                     ) : null
                   }
                 </select>
               </div>
             </div>
             <div className="col-md-6">
               <div className="checkout-form-list">
                 <label>Tên <span className="required">*</span></label>
                 <input onChange={this.handleChange} placeholder="Họ tên" type="text" name="name" value={name} />
               </div>
             </div>
             <div className="col-md-6">
               <div className="checkout-form-list">
                 <label>Số điện thoại <span className="required">*</span></label>
                 <input onChange={this.handleChange} placeholder="Số điện thoại" type="text" name="phone" value={phone} />
               </div>
             </div>
             <div className="col-md-12">
               <div className="checkout-form-list">
                 <label>Địa chỉ <span className="required">*</span></label>
                 <input onChange={this.handleChange} placeholder="Địa chỉ" type="text" name="address" value={address} />
               </div>
             </div>
             <div className="col-md-12">
               <div className="order-notes">
                 <div className="checkout-form-list">
                   <label>Ghi chú đơn hàng</label>
                   <textarea value={note} onChange={this.handleChange} id="checkout-mess" cols="30" rows="10" name="note" placeholder="Ghi chú về đơn đặt hàng của bạn, ví dụ: Những lưu ý đặc biệt khi giao hàng."></textarea>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </form>
      </div>
    )
  }
}
