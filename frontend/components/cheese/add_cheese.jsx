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

    let data = new FormData();
    let id = this.props.match.params.cheeseId;
    console.log("cheeseId",id);

    data.append('cheese_pic', this.state.cheese_pic);
    data.append("category", this.state.category);
    data.append("name", this.state.name);
    data.append("brand", this.state.brand);
    data.append("origin", this.state.origin);
    data.append("description", this.state.description);
    console.log("cheeseId2",id);
    this.props.action(data,id).then(() =>
    this.props.history.push('/cheeseboard'));
  }

  handleFile(e) {
    this.setState({"cheese_pic": e.target.files[0]});
  }

  render () {
    let category = <div>
        <select
          className="form-text2"
          value={this.state.category}
          onChange={this.update('category')}
        >
          <option disabled>
            Select Category
          </option>
            {CHZ_TYPES.map((t, i) => {
              return <option value={t} key={i}>{t}</option>;
            })}
        </select>
      </div>;
    let welcomeSign = <div><h3>Edit Cheese</h3></div>;
    if(this.props.formType === 'new') {
      category = <div>
          <select
            className="form-text2"
            onChange={this.update('category')}
          >
            <option disabled selected>
              Select Category
            </option>
              {CHZ_TYPES.map((t, i) => {
                return <option value={t} key={i}>{t}</option>;
              })}
          </select>
        </div>;
      welcomeSign =
      <div>
        <h3>Add New Cheese</h3>
        <h5>Didn't find what you were looking for? Use this form to add a new cheese.</h5>
        <h4>Cheese Creation Guidelines</h4>
        <ul className="chz-creation-rules">
          <li>Don't include the brand or the store where you bought it in the cheese name.</li>
          <li>Please make your cheese proper name case.</li>
          <li>Do you have questions about which category your cheese belongs in? Please refer to this guide.</li>
          <li>Please note that non-adherence to the guidelines may results in revoking of your Cheese Creation privileges.</li>
        </ul>
      </div>
    }
    const text = this.props.formType === 'new' ? "Add Cheese" : "Update Cheese";
    const state = this.state;
    return (
      <div>
        {state &&
          <div className="add-cheese-div">
            <div className="UGH">{welcomeSign}</div>
            <form className="add-cheese-form" onSubmit={this.handleSubmit}>
              <input
                className="form-text"
                type="text"
                value={this.state.name}
                placeholder="Name"
                onChange={this.update('name')}
              />
              <input
                className="form-text"
                type="text"
                value={this.state.brand}
                placeholder="Brand"
                onChange={this.update('brand')}
              />
              <div className="form-text-sect">
                <input
                  className="form-text1"
                  type="text"
                  value={this.state.origin}
                  placeholder="Origin"
                  onChange={this.update('origin')}
                />
              {category}
              </div>
              <textarea
                className="chz-description"
                rows="5"
                value={this.state.description}
                placeholder="Description"
                onChange={this.update('description')}
              />

              <input onChange={this.handleFile.bind(this)}
                id="fileupload" name="myfile" type="file" />

              <input type="submit" id="chz-submit" value={text} />
            </form>
          </div>
        }
      </div>
    );
  }
}
export default AddCheese;
