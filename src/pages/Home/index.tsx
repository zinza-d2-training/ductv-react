import React from "react";
import useAuth from "../../hooks/useAuth";

const Home = () => {
	const { user } = useAuth();

	return (
		<>
			<h1>Hello {user?.name}</h1>
			<h1>email: {user?.email}</h1>
			<h1>age: {user?.age}</h1>
		</>
	);
}

export default Home;
