import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';


class QuoteForm extends Component {

  // state = {
  //   //set up a controlled form with internal state
  //   quote: {
  //     id: uuid(),
  //     content: '',
  //     author: '',
  //     votes: 0
  //   }
  // }

  state = {
    //set up a controlled form with internal state
    content: '',
    author: ''
    // votes: 0
  }

  handleOnChange = event => {
    // Handle Updating Component State
    let key = event.target.name
    let newValue = event.target.value
    this.setState({
        [key]: newValue
    })
  }

  // handleOnSubmit = event => {
  //   // Handle Form Submit event default
  //   // Create quote object from state
  //   // Pass quote object to action creator
  //   // Update component state to return to default state
  //   event.preventDefault()
  //   let quoteObj = {
  //     ...this.state,
  //     id: uuid()
  //   }
  //
  //   // Updating, with teh action creator
  //   this.props.addQuote(quoteObj)
  //
  //   // Resetting to blank
  //   this.setState({
  //     ...this.state,
  //       content: '',
  //       author: ''
  //   })
  // }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const quote = {...this.state, id: uuid() };
    this.props.addQuote(quote);
    this.setState({
      content: '',
      author: ''
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        name="content"
                        className="form-control"
                        value={this.state.content}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        name="author"
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//  return {
//    addQuote: quoteObj => dispatch(addQuote(quoteObj))
//  }
// }

//add arguments to connect as needed
export default connect(null, {addQuote})(QuoteForm);
