import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import { Products } from './components/Products';
import { EditProduct } from './components/EditProduct';
import { NewProduct } from './components/NewProduct';

import PrivateRoute from './PrivateRoute';
import Login from './components/Login';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<PrivateRoute exact path="/">
					<Products />
				</PrivateRoute>

				<PrivateRoute path="/products/new">
					<NewProduct />
				</PrivateRoute>

				<PrivateRoute path="/products/:productId" component={EditProduct} />

				<Route path="/login" component={Login} />
			</Switch>
		</Router>
	)
};

export default Routes
