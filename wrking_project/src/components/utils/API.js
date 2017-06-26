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
    return axios.post("/api/courses", { course_name: "test", parent: 0, parent_course: "test2", content: JSON.stringify(text) })
    .then(function(response){
    console.log('saved successfully')
  }); 
  },
  //get courses or default course
  getCourses: function() {
    return axios.get("/api/courses");
  },
  //get courses with id
  getLessons: function(lesson) {
    
  //  const {_id} = lesson;
  //  return axios.get(`/api/courses/${_id}`);
  },

  // save new course
  saveLesson: function(text) {
    return axios.post("/api/lessons", { course_name: "test", parent: 1, editing: 0, body: JSON.stringify(text) })
    .then(function(response){
    console.log('saved successfully')
  }); 
},
  // Toggles a courses assigned to user property in the db
  assignedCourses: function(quote) {
    quote.favorited = !quote.favorited;
    const { _id, favorited } = quote;
    return axios.patch(`/api/quotes/${_id}`, { favorited });
  },
  
};

export default API;
