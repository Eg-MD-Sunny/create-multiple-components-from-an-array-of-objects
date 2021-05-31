import "./App.css";

function App() {
	/*=====>>Fake Product Data [Start]<<=====*/
		const products = [
			{
				name: 'Photoshop',
				price: '$90.99'
			},
			{
				name: 'Illustrator',
				price: '$60.99'
			},
			{
				name: 'PDF Reader',
				price: '$6.99'
			},
			{
				name: 'Premiere Element',
				price: '$249.99'
			},
		]
	/*=====>>Fake Product Data [End]<<=====*/	

	/*=====>>Array of Object Data Maping [Start]<<=====*/	
		let productNames = products.map(product => product.name);
		console.log(productNames);

		let productPrices = products.map(product => product);
		console.log(productPrices);
	/*=====>>Array of Object Data Maping [End]<<=====*/	

	/*=====>>Fake Nayok Info Data [Start]<<=====*/
		const nayoks = ['Razzak','Jasim','Alomgir','Salman','Bappi','Shuvo'];
	/*=====>>Fake Nayok Info Data [End]<<=====*/

	/*=====>>Single Array Element Data Maping [Start]<<=====*/	
		const nayoksNames = nayoks.map(nayok => nayok);
		console.log(nayoksNames);
	/*=====>>Single Array Element Data Maping [End]<<=====*/	

	
	return (
		<div className="App">
			{/*====>>1st Way Data Show In UI [Start]<<====*/}
				<h3>This is 1st Way of Dynamic Data Load</h3>
				<ul>
					<li>{nayoks[0]}</li>
					<li>{nayoks[1]}</li>
					<li>{nayoks[2]}</li>
					<li>{nayoks[3]}</li>
				</ul>
			{/*====>>1st Way Data Show In UI [End]<<====*/}

			{/*====>>2nd Way Data Show In UI [Start]<<====*/}
				<h3>This is 2nd Way of Dynamic Data Load</h3>
					{
						nayoks.map(nayok => <li>{nayok}</li>)
					}

				{/*===>>When Array of object Dynamic Data Load*/}
				<h3>Product Name Listing</h3>
					{
						products.map(product => <div>
													<li>{product.name}</li>
													<li>{product.price}</li>
												</div>
						)
					}
			{/*====>>2nd Way Data Show In UI [End]<<====*/}
		</div>
	);
}
export default App;
