import axios from "axios";

const API = {
  // Retrieves all quotes from the db
  getQuotes: function() {
    return axios.get("/api/quotes");
  },
  // Saves a new quote to the db
  saveQuote: function(text) {
    return axios.post("/api/quotes", { text });
  },
  // Deletes a quote from the db
  deleteQuote: function(id) {
    return axios.delete(`/api/quotes/${id}`);
  },
  // Toggles a quote's favorite property in the db
  favoriteQuote: function(quote) {
    quote.favorited = !quote.favorited;
    const { _id, favorited } = quote;
    return axios.patch(`/api/quotes/${_id}`, { favorited });
  },
  // save new course
  saveCourse: function(text) {
    const { _id, body } = text;
    return axios.post("/api/courses", { course_name: "test", parent: 0, parent_course: "test2", body: text })
    .then(function(response){
    console.log('saved successfully')
  }); 
  },
  //get courses or default course
  getCourses: function() {
    return axios.get("/api/courses");
  },

};

export default API;
