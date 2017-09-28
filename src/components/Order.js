import React from 'react';
import {render} from 'react-dom';
import {formatPrice} from '../helpers';

class Order extends React.Component
{
	constructor()
	{
		super();
		this.renderOrder=this.renderOrder.bind(this);
	}
	renderOrder(key)
	{
		const fish = this.props.fishes[key];
		const count=this.props.orders[key];

		if(!fish || fish.status=='unavailable')
		{
			return <li key={key}>Sorry, {fish? fish.name: 'fish'} is no longer available!</li>

		}

		return (
				<li key={key}>
					<span>{count}lbs {fish.name}</span>
					<span className="price">{formatPrice(count*fish.price)}</span>
				</li>
			); 
	}
	render()
	{
		const orderIDs=Object.keys(this.props.order);
		const total=orderIDs.reduce((prevTotal,key)=>
		{
			const fish=this.props.fishes[key];
			const count=this.props.order[key];
			const isAvailable=fish&& fish.status==='available';
			if(isAvailable)
			{
				return prevTotal+(count*fish.price || 0);
			}

			return prevTotal;
		},0)

		return (
				<div className="order-wrap">
					<h2>Your Orders</h2>
					<ul className="order">
						<li className="total">
							<strong>Total</strong>
							{formatPrice(total)}
						</li>
					</ul>
					
				</div>
			);
	}	
}

export default Order;
