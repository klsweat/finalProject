import React from 'react';

import ElementConfig from '../config.elements';
import Handle from './Handle';
import Row from './Row'
import Col from './Col'
import SidebarRight from './common/SidebarRight'

export default ()=>(

	   <div className="sidebar-rightright ">
                      <div className="col-md-16 col-lg-16 col-xl-16">
                        <div className="card full-screen-container .editor-tools-container">
                       
                         
                          
                    
	<div className="toolbox editorTools editorContainer rowContainer colContainer">
		<div className="toolbox-hl">Elements:</div>
		{	
			Object.keys(ElementConfig).map(function (type) {
				let Element = ElementConfig[type];

				
				return (
					<div key={type} className="toolbox-element elementhandle" data-data={JSON.stringify({type:type})}>
						{Element.name}
					</div>
				);
			})
		}
		<div className="toolbox-element rowhandle" data-data="{}" >
			Row
		</div>
		<div className="toolbox-element-col colhandle" data-data={JSON.stringify({width:"third"})} >
			Column
		</div>
	</div>
	


</div>
</div>
</div>


);

