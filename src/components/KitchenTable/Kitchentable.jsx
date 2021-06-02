import React from 'react'
import { connect } from 'react-redux';

import style from '../KitchenTable/style.module.css'
import Product from '../Product/Product';

const KitchenTable = ({ products }) => {
	const handleCook = () => {
		console.log('cook');
	}

	return (
		<div className={style.wrapper}>
			<h2>Кухонный стол: </h2>
			{!products.length ?
				<p>Продуктов на столе нет</p> :
				products.map(
					(product, index) => <Product key={index} product={product} />)
			}
			<button onClick={handleCook}>Готовить</button>
		</div>
	)
}

const mapStateToProps = state => {
	//console.log(state.productReducer.space)
	return {
		products: state.productReducer.space
	}
}

export default connect(mapStateToProps, null)(KitchenTable)