import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

// QuoteForm Component
//     ✓ renders without crashing (45ms)
//     ✓ always renders a form tag
//     9) always renders a textarea[name="content"] tag for quote content
//     10) always renders a input[name="author"] tag for quote author
//     11) should control its inputs based on internal state
//     12) should handleOnSubmit and preventDefault()
//     13) should reset state after form handleOnSubmit
//     14) should modify the store on handleOnSubmit

class QuoteForm extends Component {

  state = {
    //set up a controlled form with internal state
    quote: {
      id: uuid(),
      content: '',
      author: ''
    }
  }

  handleOnChange = event => {
    // Handle Updating Component State
    const key = event.target.name
    this.setState({
      quote: {
        key: event.target.value
      }
    })
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
    event.preventDefault()

    this.setState({
      quote: {
        content: '',
        author: ''
      }
    })
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

const mapDispatchToProps = () => {
  
}

//add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);
