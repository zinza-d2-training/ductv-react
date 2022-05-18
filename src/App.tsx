import './fake-data'
import React from 'react';
import { AllPages } from './routes';
import { useRoutes } from 'react-router-dom';
import { AuthProvider } from "./contexts/authContext";

function App() {
	const allPages = useRoutes(AllPages);
	return (
		<AuthProvider>{allPages}</AuthProvider>
	);
}

export default App;
