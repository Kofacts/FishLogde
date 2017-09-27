// beginning of some js fiddle
import React from 'react';
import {render} from 'react-dom';
import {getFunName} from '../helpers';


class StorePicker extends React.Component
{
	goToStore(event){
		event.preventDefault();
		console.log(this.storeInput.value);
		const storeID=this.storeInput.value;
		//custom function to redirect the user to another page on submit
		//
		this.context.router.transitionTo(`store/${storeID}`);
	}

	render()
	{
		return (
				<form className="store-selector" onSubmit={this.goToStore.bind(this)}>
					<h3>Please Enter a Store Title</h3>
					<input className="storeInput" type="text" ref={(input)=>{this.storeInput=input}} required placeholder="Enter the title of store" defaultValue={getFunName()}/>
					<button type="submit" className="">Visit Store</button>
				</form>
			);
	}	
}

StorePicker.contextTypes={
	router: React.PropTypes.object
}
export default StorePicker;
