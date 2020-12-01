import { useState, useEffect } from 'react';

import { ProductForm } from "./ProductForm";

import ProductService from '../services/ProductService';

export const EditProduct = ({ match, history }) => {
	const [product, setProduct] = useState(null);
	const [loaded, setLoaded] = useState(false);
	const { productId } = match.params;
	// const { productId } = useParams();

	const goBack = () => {
		history.goBack();
	};

	const handleSubmit = (newProduct) => {
		ProductService.updateProduct({ ...newProduct, id: productId })
			.then(() => {
				history.replace('/');
			});
	};

	useEffect(() => {
		// ProductService.getProductById(productId)
		// 	.then(response => {
		// 		setProduct(response.data);
		// 	})
		// 	.catch(err => {
		// 		console.log('Error >', err);
		// 	});
		(async () => {
			try {
				const { data } = await ProductService.getProductById(productId);
				setProduct(data);
				setLoaded(true);
			} catch (err) {
				console.log('Error >', err);
			}
		})();
	}, []);

	return (
		<div className="content">
			<h2 className="has-text-centered m-5">Actualizar Producto</h2>
			<div className="columns">
				<div className="column is-three-fifths is-offset-one-fifth">
					{loaded ? (
						<ProductForm
							onSubmit={handleSubmit}
							onCancel={goBack}
							product={product}
						/>
					): null}
				</div>
			</div>
		</div>
	);
};
