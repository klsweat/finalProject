import React, { Component } from "react";
import Panel from "./common/Panel";
import QuoteForm from "./common/QuoteForm";
import API from "./utils/API";

class EDashboard extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    };
    // Binding getQuotes to our component since we'll be passing this
    // method to child components
    this.getQuotes = this.getQuotes.bind(this);
  }
  // Getting all quotes when the component mounts
  componentDidMount() {
    this.getQuotes();
  }
  getQuotes() {
    API.getQuotes().then((res) => {
      this.setState({ quotes: res.data });
    });
  }
  // A helper method for rendering one panel for each quote
  renderQuotes() {
    return this.state.quotes.map(quote => (
      <Panel
        quote={quote}
        key={quote._id}
        getQuotes={this.getQuotes}
      />
    ));
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-16">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Blank</h6>
            </div>
            <div className="card-block">
              <div className="row">
                <QuoteForm getQuotes={this.getQuotes} />
              </div>
              <div className="row">
                <hr />
                {this.renderQuotes()}
              </div>

            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default EDashboard;
