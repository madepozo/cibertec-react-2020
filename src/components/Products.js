import { useState, useEffect } from 'react';

import { Product } from './Product';

import ProductService from '../services/ProductService';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export const Products = () => {
	const [openModal, setOpenModal] = useState(false);
	const [productId, setProductId] = useState('');
	const [products, setProducts] = useState([]);

	useEffect(() => {
		ProductService.getProducts()
			.then(response => {
				setProducts(response.data);
			});
	}, []);

	const deleteProduct = (id) => {
		ProductService.deleteProduct(id)
			.then(() => {
				setProducts((products => {
					return products.filter(prod => prod.id !== id);
				}));
				closeModal();
			});
	};

	const handleDelete = (id) => {
		setProductId(id);
		setOpenModal(true);
	};

	const confirmDelete = () => {
		deleteProduct(productId);
	};

	const closeModal = () => {
		setOpenModal(false);
		setProductId('');
	};

	return (
		<div>
			<div className={clsx('modal', { 'is-active': openModal })}>
				<div className="modal-background"></div>
				<div className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title">Eliminar Producto</p>
					</header>
					<section className="modal-card-body">
						<p>
							¿Estas seguro de eliminar el producto con ID (
								<strong>{productId}</strong>
							)?
						</p>
					</section>
					<footer className="modal-card-foot">
						<button
							className="button is-danger"
							onClick={confirmDelete}
						>
							Eliminar
						</button>
						<button
							className="button"
							onClick={closeModal}
						>
							Cancelar
						</button>
					</footer>
				</div>
			</div>
			<h2>Lista de Productos</h2>
			<Link to="/products/new" className="button is-link m-2">
				Crear Producto
			</Link>
			<div className="container">
				<table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
				<thead>
					<tr>
						<td>#</td>
						<td>Nombre</td>
						<td>Detalle</td>
						<td>stock</td>
						<td>Precio</td>
						<td>Acciones</td>
					</tr>
				</thead>
				<tbody>
					{products.map((product, index) => (
						<Product
							key={`Products-list-${product.id}`}
							product={product}
							index={index + 1}
							deleteFn={handleDelete}
						/>
					))}
				</tbody>
			</table>
			</div>
		</div>
	);
};
