import React from 'react';

class AddCheese extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.cheese;
  }

  componentDidMount() {
    if (this.props.match.params.cheeseId) {
      this.props.requestACheese(this.props.match.params.cheeseId);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.cheese);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() =>
      this.props.history.push('/cheeseboard'));
  }

  render () {
    const text = this.props.formType === 'new' ? "Add Cheese" : "Update Cheese";
    return (
      <div className="add-cheese-div">
        <form className="add-cheese-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            placeholder="Name"
            onChange={this.update('name')}
          />
          <input
            type="text"
            value={this.state.brand}
            placeholder="Brand"
            onChange={this.update('brand')}
          />
          <input
            type="text"
            value={this.state.origin}
            placeholder="Origin"
            onChange={this.update('origin')}
          />
          <select
            value={this.state.category}
            defaultValue="Select cheese style"
            onChange={this.update('category')}
          >
            {CHZ_TYPES.map((t, i) => {
              return <option value={t} key={i}>{t}</option>;
            })}
          </select>
          <input
            type="textarea"
            value={this.state.description}
            placeholder="Description"
            onChange={this.update('description')}
          />
          <input type="submit" value={text} />
        </form>
      </div>
    );
  }
}
export default AddCheese;
