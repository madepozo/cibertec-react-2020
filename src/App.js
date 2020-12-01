

import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Routes from './Routes';

function App() {
  return (
    <div>
		<Header title={'Productos CRUD'} />
		<div className="container">
			<Routes />
		</div>
		{/* <Footer /> */}
    </div>
  );
}

export default App;
