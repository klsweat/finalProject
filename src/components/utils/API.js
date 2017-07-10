import axios from 'axios'

const API = {

  signIn: function() {
    return axios.post("/api/login");
  },
  signUp: function() {
    return axios.post("/api/signup");
  },
  signUP: function() {
    return axios.get("/api/signup");
  },
  signOut: function() {
    return axios.post("/api/signout");
  },
  // Retrieves all quotes from the db
  getQuotes: function () {
    return axios.get('/api/quotes')
  },
  // Saves a new quote to the db
  saveQuote: function (text) {
    return axios.post('/api/quotes', { text})
  },
  // Deletes a quote from the db
  deleteQuote: function (id) {
    return axios.delete(`/api/quotes/${id}`)
  },
  // Toggles a quote's favorite property in the db
  favoriteQuote: function (quote) {
    quote.favorited = !quote.favorited
    const { _id, favorited } = quote
    return axios.patch(`/api/quotes/${_id}`, { favorited})
  },

  /*=====================================================
  CRUD COURSES TABLE - COURSES CONTROLLER
  ======================================================*/
  saveCourse: function (text) {
    if (text.course_id == '') {
      return axios
        .post('/api/courses', {
          course_name: text.course_name,
          is_parent: text.isParent,
          parent_id: text.parent_id
        })
        .then(function (response) {
          console.log(
            'saved successfully: post courses: ' + JSON.stringify(response)
          )
          return response.data._id
        })
    }
  },
  updateCourse: function (text) {
    console.log(text.content)
    const _id = text.course_id
    console.log(_id)
    const body = text.content
    return axios
      .patch(`/api/courses/${_id}`, {
        body: JSON.stringify(body)
      })
      .then(function (response) {
        console.log('saved successfully')
      })
  },

  // get courses or default course
  getCourses: function () {
    return axios.get('/api/courses')
  },

  // get courses or default course
  getParentCourse: function (user_id) {
    return axios.get('/api/parentcourses')
  },

  /*=====================================================
  CRUD COURSES TABLE - LESSONS CONTROLLER
  ======================================================*/
  // get lessons based off parent course id
  getLessons: function (parentCourseId) {
    //  const {_id} = lesson
    //  return axios.get(`/api/courses/${_id}`)
    // return axios.get(`/api/lessons/${parentCourseId}`)
    console.log(parentCourseId);
    return axios.get(`/api/lessons/${parentCourseId}`)

      .then(function (response) {
        //   console.log(parentCourseId)
       console.log(response)
        return response
      })
  },


  // get lessons based off parent course id
  getLessonContent: function (lessonContent) {

    return axios.get(`/api/lessons/content/${lessonContent}`)

      .then(function (response) {
        //   console.log(parentCourseId)
       console.log(response)
        return response
      })
  },

  // save new course
  saveLesson: function (text) {
    return axios
      .post('/api/lessons', {
        course_name: 'test',
        parent: 1,
        editing: 0,
        body: JSON.stringify(text)
      })
      .then(function (response) {
        console.log('saved successfully')
      })
  },
  // Toggles a courses assigned to user property in the db
  assignedCourses: function (quote) {
    quote.favorited = !quote.favorited
    const { _id, favorited } = quote
    return axios.patch(`/api/quotes/${_id}`, { favorited})
  },

  /*=====================================================
  CRUD FILES TABLE - FILE CONTROLLER
  ======================================================*/
  // Saves a new File to the db
  saveFile: function (imageFile) {
    let imageFormData = new FormData();

    console.log("imageFile", imageFile);
    console.log(imageFile.file.type);
    console.log(imageFile.file.name)
    
    return axios
      .post('/api/file', {data: imageFile.imagePreviewUrl, contentType: imageFile.file.type})
      .then(function (response) {
        console.log('saved successfully')
        console.log(response);
        return response;
        

      })

    

  },
  // Retrieves all quotes from the db
  getFiles: function () {
    return axios
      .get('/api/file')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

export default API
