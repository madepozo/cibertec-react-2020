import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Product = ({ product, index, deleteFn }) => {
	if (!product) {
		return null;
	}

	const handleClick = () => {
		deleteFn(product.id);
	};

	return (
		<tr>
			<td>{index}</td>
			<td>{product.name}</td>
			<td>{product.description}</td>
			<td>{product.stock}</td>
			<td>{product.price}</td>
			<td>
				<Link to={{
					pathname: `/products/${product.id}`,
					state: {data: 'testing'}
				}} className="button is-small is-info mr-2">
						Editar
				</Link>
				<button className="button is-small is-danger" onClick={handleClick}>
					Eliminar
				</button>
			</td>
		</tr>
	)
};

Product.propTypes = {
	product: PropTypes.object.isRequired,
	index: PropTypes.number,
	deleteFn: PropTypes.func.isRequired
};

Product.defaultProps = {
	product: {},
	index: 1,
	deleteFn: () => {}
}
