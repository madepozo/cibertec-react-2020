import { useFormik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

export const ProductForm = ({ onSubmit, onCancel, product }) => {
	const formik = useFormik({
		initialValues: {
			name: product.name || '',
			description: product.description || '',
			stock: product.stock || '',
			price: product.price || '',
		},
		onSubmit: (values) => {
			onSubmit(values);
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.max(15, 'El maximo de caracteres es 15')
				.required('El nombre es requerido'),
			description: Yup.string()
				.max(30, 'El maximo de caracteres es 30')
				.required('La descripción es requerida'),
			stock: Yup.number()
				.min(1, 'El stock minimo es 1 unid.')
				.max(10, 'El stock maximo es 10 unid.'),
			price: Yup.number()
				.min(0, 'El precio minimo es 0')
				.required('El precio es requerido')
		})
	});

	const {
		errors,
		handleBlur,
		handleChange,
		handleSubmit,
		isValid,
		touched,
		values,
	} = formik;

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="field">
					<label className="label">Nombre</label>
					<div className="control">
						<input
							className={
								clsx(
									'input',
									{
										'is-danger': errors.name && touched.name,
										'is-success': !errors.name && touched.name
									}
								)
							}
							type="text"
							name="name"
							value={values.name}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</div>
					{errors.name && touched.name ? (
						<p className="help is-danger">
							{errors.name}
						</p>
					) : null}
				</div>
				<div className="field">
					<label className="label">Detalle</label>
					<div className="control">
						<textarea
							className={
								clsx(
									'textarea',
									{
										'is-danger': errors.description && touched.description,
										'is-success': !errors.description && touched.description
									}
								)
							}
							name="description"
							value={values.description}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</div>
					{errors.description && touched.description ? (
						<p className="help is-danger">
							{errors.description}
						</p>
					) : null}
				</div>
				<div className="field">
					<label className="label">Stock</label>
					<div className="control">
						<input
							className={
								clsx(
									'input',
									{
										'is-danger': errors.stock && touched.stock,
										'is-success': !errors.stock && touched.stock
									}
								)
							}
							type="text"
							name="stock"
							value={values.stock}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</div>
					{errors.stock && touched.stock ? (
						<p className="help is-danger">
							{errors.stock}
						</p>
					) : null}
				</div>
				<div className="field">
					<label className="label">Precio</label>
					<div className="control">
						<input
							className={
								clsx(
									'input',
									{
										'is-danger': errors.price && touched.price,
										'is-success': !errors.price && touched.price
									}
								)
							}
							name="price"
							value={values.price}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</div>
					{errors.price && touched.price ? (
						<p className="help is-danger">
							{errors.price}
						</p>
					) : null}
				</div>
				<div className="field is-grouped">
					<div className="control">
						<button
							type="submit"
							className="button is-link"
							disabled={!isValid}
						>
							Submit
						</button>
					</div>
					<div className="control">
						<button
							type="button"
							className="button is-link is-light"
							onClick={onCancel}
						>
							Cancelar
						</button>
					</div>
				</div>
			</form>
		</div>
	)
};
