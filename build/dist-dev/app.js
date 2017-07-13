/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	import React from 'react';
	import ReactDOM from 'react-dom';
	import routes from "../src/config/routes";
	import "./bootswatch.less";
	import "./styles.css";
	
	import {Editor, Content} from '../src/index';
	
	ReactDOM.render(routes, document.getElementById("content"));
	
	
	/*
	
	import React from 'react';
	import ReactDOM from 'react-dom';
	import {Editor, Content} from 'react-content-builder';
	
	let save = (c)=>{
	  alert(
	    "This can be saved in the backend (e.g. via REST): "+ JSON.stringify(c)
	  );
	}
	
	ReactDOM.render(
	  <Editor content={content} save={save} />,
	  document.getElementById("content")
	);
	
	*/


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map