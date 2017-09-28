// beginning of some js fiddle
import React from 'react';
import {render} from 'react-dom';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import SampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component
{
	constructor(){
		super();
		//inital state for when the app loads
		this.addFishes=this.addFishes.bind(this);
		this.loadSamples=this.loadSamples.bind(this);
		this.addToOrder=this.addToOrder.bind(this);
		this.state={
			fishes: {},
			orders: {},
		}
	}

	loadSamples(event)
	{
		event.preventDefault();
		//load sample data for the inventory
		this.setState({fishes:SampleFishes});
	}

	addFishes(fish)
	{
		const fishes={...this.state.fishes}
		//add new stuff to the state
		const timestamp=Date.now();
		//generates a key onclick
		fishes[`fish-${timestamp}`]=fish;

		//update the state
		this.setState({fishes});
	}

	addToOrder(key)
	{
		const orders={...this.state.orders}
		orders[key]=orders[key]+1 || 1;
		//update the state
		this.setState({orders});
	}
	render()
	{
		return (
				<div className="catch-of-the-day">
					<div className="menu">
						<Header tagline="Fresh food Market"/>

						<ul className="list-of-fishes">
							{
								Object
									.keys(this.state.fishes)
									.map(key=> <Fish key={key} index={key} addToOrder={this.addToOrder} details={this.state.fishes[key]}/>)
							}
						</ul>
					</div>

					<Order fishes={this.state.fishes} order={this.state.orders}/>
					<Inventory addFish={this.addFishes} loadSamples={this.loadSamples}/>
				</div>
			);
	}	
}

export default App;
