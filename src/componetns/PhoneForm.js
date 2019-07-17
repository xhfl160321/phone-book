import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.onCreate(this.state);
      this.setState({
        name: '',
        phone: ''
      })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange} //input의 텍스트 값이 바뀔 때마다 발생하는 이벤트
          name="name"
          maxLength = "5"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange} //input의 텍스트 값이 바뀔 때마다 발생하는 이벤트
          name="phone"
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;