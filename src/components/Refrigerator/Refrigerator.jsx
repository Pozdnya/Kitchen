import React from 'react'
import { connect } from 'react-redux'
import style from '../Refrigerator/style.module.css'

import { deleteProduct, getProduct, showConsole } from '../Redux/actions'

const Refrigerator = ({ products, getProduct }) => {

	const handleGetProduct = e => {
		e.preventDefault()
		showConsole()
		const deletedProducts = products.filter((product) => product !== e.target.textContent)
		getProduct(e.target.textContent)
		//deleteProduct(deletedProducts)

	}

	// const handleDeleteProductFromRefrigerator = e => {
	// 	const deletedProducts = products.filter((product) => product !== e.target.textContent)
	// 	//console.log(products, deletedProducts)
	// 	deleteProductFromRefrigerator(deletedProducts)
	// }

	// const productsHandler = e => {
	// 	e.preventDefault()
	// 	handleGetProduct(e)
	// 	handleDeleteProductFromRefrigerator(e)
	// }



	return (
		<div className={style.wrapper}>
			<h2>Продукты к холодильнике: </h2>
			<ul>
				{products.map((product, index) => <li
					key={index}
					className={style.product}
					name={product}
					value={product}
					onClick={handleGetProduct}>
					{product}
				</li>
				)}
			</ul>
		</div>
	)
}
// const mapStateToProps = state => {
// 	console.log(state)
// 	return {
// 		// deleteProduct: state.productReducer.products
// 	}
// }

const mapDispatchToPros = {
	getProduct,
	//deleteProduct,
	showConsole,
}

export default connect(null, mapDispatchToPros)(Refrigerator)