import React, { Component } from 'react'
import Panel from './common/Panel'
import QuoteForm from './common/QuoteForm'
import API from './utils/API'

class AdminDashBorad extends Component {
  constructor () {
    super()
    this.state = {
      quotes: []
    }
    // Binding getQuotes to our component since we'll be passing this
    // method to child components
    this.getQuotes = this.getQuotes.bind(this)
  }
  // Getting all quotes when the component mounts
  componentDidMount () {
    this.getQuotes()
  }
  getQuotes () {
    API.getQuotes().then((res) => {
      this.setState({ quotes: res.data })
    })
  }

  render () {
    return (
      <div>
          <div className="row">
      <div className="col-md-8 col-lg-8 col-xl-4">
        <div className="activity-block success">
          <div className="media">
            <div className="media-body">
              <h5>$ <span className="spincreament">72548</span></h5>
              <p>Total Profit</p>
            </div>
            <i className="fa fa-cubes"></i> </div>
          <br />
          <div className="media">
            <div className="media-body"><span className="progress-heading">Monthly progress</span></div>
            <span><span className="dynamicsparkline">Loading..</span> </span> </div>
          <div className="row">
            <div className="progress ">
              <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={seventy}><span className="trackerball"></span></div>
            </div>
          </div>
          <i className="bg-icon text-center fa fa-cubes"></i> </div>
      </div>
      <div className="col-md-8 col-lg-8 col-xl-4">
        <div className="activity-block danger">
          <div className="media">
            <div className="media-body">
              <h5><span className="spincreament">72548</span></h5>
              <p>Active Users</p>
            </div>
            <i className="fa fa-users"></i> </div>
          <br />
          <div className="media">
            <div className="media-body"><span className="progress-heading">Monthly progress</span></div>
            <span><span className="dynamicsparkline">Loading..</span> </span> </div>
          <div className="row">
            <div className="progress ">
              <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={sixty}><span className="trackerball"></span></div>
            </div>
          </div>
          <i className="bg-icon text-center fa fa-users"></i> </div>
      </div>
      <div className="col-md-8 col-lg-8 col-xl-4">
        <div className="activity-block warning">
          <div className="media">
            <div className="media-body">
              <h5><span className="spincreament">2548</span></h5>
              <p>New Orders</p>
            </div>
            <i className="fa fa-cart-arrow-down"></i> </div>
          <br />
          <div className="media">
            <div className="media-body"><span className="progress-heading">Monthly progress</span></div>
            <span><span className="dynamicsparkline">Loading..</span> </span> </div>
          <div className="row">
            <div className="progress ">
              <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={fortyfive}><span className="trackerball"></span></div>
            </div>
          </div>
          <i className="bg-icon text-center fa fa-cart-arrow-down"></i> </div>
      </div>
      <div className="col-md-8 col-lg-8 col-xl-4">
        <div className="activity-block primary">
          <div className="media">
            <div className="media-body">
              <h5><span className="spincreament">1548</span></h5>
              <p>New Comments</p>
            </div>
            <i className="fa fa-comments"></i> </div>
          <br />
          <div className="media">
            <div className="media-body"><span className="progress-heading">Monthly progress</span></div>
            <span><span className="dynamicsparkline">Loading..</span> </span> </div>
          <div className="row">
            <div className="progress ">
              <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={eighty}><span className="trackerball"></span></div>
            </div>
          </div>
          <i className="bg-icon text-center fa fa-comments"></i> 
          </div>
      </div>
    </div>
    
    

</div>


    )
  }
}

const sixty = {
  width: 60
}

const seventy = {
  width: 70
}

const fortyfive = {
  width: 45
}

const eighty = {
  width: 80
}

export default AdminDashBorad
