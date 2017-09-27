import React from 'react';
import {render} from 'react-dom';



class AddFishForm extends React.Component
{
	createFish(event)
	{
		event.preventDefault();
		const data={
			name: this.name.value,
			price: this.price.value,
			status: this.status.value,
			desc: this.desc.value,
			image: this.image.value
		}

		this.props.addFish(data);
		this.fishForm.reset();
	}
	render()
	{
		return (
				<form ref={(input)=>{this.fishForm=input}} className="fish-edit" onSubmit={this.createFish.bind(this)}>
					<input ref={(input)=>{this.name=input}} type="text" placeholder="Fish Name" />
					<input ref={(input)=>{this.price=input}} type="text" placeholder="Fish Price" />
					<select ref={(input)=>{this.status=input}}>
						<option value="Available">Fresh!</option>
						<option value="Unavailable">Sold Out!</option>
					</select>
					<textarea ref={(input)=>{this.desc=input}} type="text" placeholder="Fish Desc" ></textarea>
					<input type="text" ref={(input)=>{this.image=input}} placeholder="Fish Image" />
					<button type="submit">+ Add Item</button>

				</form>
			);
	}	
}

export default AddFishForm;
