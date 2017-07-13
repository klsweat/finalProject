import React from 'react';
import MarkDown from './components/MarkDown';


export default {

	Text : {
		name : "Text area",
		fields : [
			{
				type : "TextArea",
				slug : "text",
				hl : "Content"
			}    
		],
		template : ({params})=>(
		  	<div>
		  		<MarkDown>{params.text}</MarkDown>
			</div>
		)
	},


	Headline : {
		name : "Headline",
		fields : [
			{
				type : "Input",
				slug : "hl",
				hl : "Headline"
			}     
		],
		template : ({params})=>(
		  	<div>
		  		<h1>{params.hl}</h1>
			</div>
		)
	},


	TextAndHeadline : {
		name : "Text with headline",
		fields : [
			{
				type : "Input",
				slug : "hl",
				hl : "Headline"
			},
			{
				type : "TextArea",
				slug : "text",
				hl : "Content"
			}
		],
		template : ({params})=>(
		  	<div>
		  		<h1>{params.hl}</h1>
				<MarkDown>{params.text}</MarkDown>
			</div>
		)
	}, 
		File : {
		name : "File",
		fields : [
			{
				type : "File",
				slug : "filename",
				hl : "File Name"		
				}
		],
		template : ({params})=>(
		  	<div>
				<img src={params.src} id={params._id}/>
			</div>
		)
	},

	TextField : {
		name : "Text Field",
		fields : [
			{
				type : "Input",
				slug : "hl",
				hl : "Label"
			}
		],
		template : ({params})=>(
		  	<div>
				<h4>Label</h4>
		  		<h3>{params.hl}</h3>
				<input type="text" id={params.h1} />
			</div>
		)
	}, 
	Select : {
		name : "Select List",
		fields : [
			{
				type : "String",
				slug : "hl",
				hl : "Headline",
				enum: ["option 1", "option 2", "option 3"]

			}
		],
		template : ({params})=>(
		  	<div>
				  <select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
			</div>
		)
	}, 

	Label : {
		name : "Label",
		fields : [
			{
				type : "Input",
				slug : "label",
				hl : "Label"
			}
		],
		template : ({params})=>(
		  	<div>
				<Label><h3>Add Label</h3></Label>
			</div>
		)
	}, 
	
}

