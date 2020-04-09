export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id != action.quoteId)

    // case 'UPVOTE_QUOTE':
    //   return state.map(quote => {
    //     if (quote.id === action.quoteId) {
    //       return {...quote, votes: quote.votes + 1}
    //     }
    //   })

    case 'UPVOTE_QUOTE':
    let index
    let quote

     index = state.findIndex(quote => quote.id === action.quoteId);
     quote = state[index];

     return [
       ...state.slice(0, index),
       Object.assign({}, quote, { votes: quote.votes += 1 }),
       ...state.slice(index + 1)
     ];

    case 'DOWNVOTE_QUOTE':
      return state.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0)  {
          return {...quote, votes: quote.votes - 1}
        } else {
          return quote
        }
      });

    default:
      return state;
  }

}
