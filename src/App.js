import Home from './pages/home/Home';
import Error from './pages/error/Error';
import About from './pages/about/About';
import Housing from './pages/housing/Housing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/Kasa/",
		element: <Home />
	},
	{
		path: "/housing/:id",
		element: <Housing />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: "*",
		element: <Error />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;




