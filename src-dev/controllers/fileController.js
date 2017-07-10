var File = require('../models/file')
var grid = require('gridfs-stream')
var fs = require('fs')
var formidable = require('formidable')
var path = require('path')
let multiparty = require('multiparty')
var multer = require('multer')

module.exports = {
  // This method handles retrieving quotes from the db
  index: function (req, res) {
    var query
    if (req.query) {
      query = req.query
    } else {
      query = req.params.id ? { _id: req.params.id } : {}
    }
    File.find(query)
      .then(function (doc) {
        // console.log(doc)
        // doc.content = JSON.parse(doc.content)
        res.json(doc)
      })
      .catch(function (err) {
        res.json(err)
      })
  },

  // This method handles creating new quotes
  create: function (req, res) {
    console.log(req.body);
    console.log(req.body);
      File.create(req.body)
      .then(function (doc) {
        console.log(doc);
        // doc.content = JSON.parse(doc.content)
        res.json(doc)
      })
      .catch(function (err) {
        res.json(err)
      })
     
    
  },
  // This method handles updating quotes
  update: function (req, res) {
    File.update(
      {
        _id: req.params.id
      },
      req.body
    )
      .then(function (doc) {
        res.json(doc)
      })
      .catch(function (err) {
        res.json(err)
      })
  },
  // This method handles deleting quotes
  destroy: function (req, res) {
    File.remove({
      _id: req.params.id
    })
      .then(function (doc) {
        res.json(doc)
      })
      .catch(function (err) {
        res.json(err)
      })
  }
}
