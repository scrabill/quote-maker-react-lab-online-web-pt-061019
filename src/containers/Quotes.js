import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { addQuote, removeQuote, upvoteQuote, downvoteQuote } from '../reducers/quotes.js'

class Quotes extends Component {

  renderQuotes = (quotes) => {
    return quotes.map(quote => (
        <QuoteCard
          key={quote.id}
          id={quote.id}
          upvoteQuote={upvoteQuote}
          downvoteQuote={downvoteQuote}
          removeQuote={removeQuote}
          quote={quote}
         />
    )

  )}

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {this.renderQuotes(this.props)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect()(Quotes);
