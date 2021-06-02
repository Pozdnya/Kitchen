import React from 'react'

import style from '../Kitchen/style.module.css'
import KitchenTable from '../KitchenTable/Kitchentable'
import Refrigerator from '../Refrigerator/Refrigerator'
import Dish from '../Dish/Dish'

const Kitchen = ({ products }) => {
	return (
		<>
			<div className={style.container}>
				<div className={style.wrapper}>
					<Refrigerator products={products} />
					<KitchenTable />
				</div>
				<Dish />
			</div>
		</>
	)
}

export default Kitchen