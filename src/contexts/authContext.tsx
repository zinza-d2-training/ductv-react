import React, { createContext, useEffect, useReducer } from 'react'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import Loading from '../components/Loading/Loading'
import { myToken, CounterState, CounterAction, CountActionType, UserCtx } from '../types'

const initialState = {
	isAuthenticated: false,
	isInitialized: false,
	user: null
}

const isValidToken = (accessToken: string) => {
	if (!accessToken) {
		return false
	}

	const decodedToken = jwtDecode<myToken>(accessToken);
	const currentTime = new Date().getTime() / 1000;
	const exp = new Date(decodedToken.exp).getTime() / 1000;
	return exp > currentTime
}

const setSession = (accessToken: string) => {
	if (accessToken) {
		localStorage.setItem('accessToken', accessToken)
		axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
	} else {
		localStorage.removeItem('accessToken')
		delete axios.defaults.headers.common.Authorization
	}
}

const reducer = (state: CounterState, action: CounterAction) => {
	const { type, payload } = action;
	switch (type) {
		case CountActionType.INIT: {
			const { isAuthenticated, user } = payload

			return {
				...state,
				isAuthenticated,
				isInitialized: true,
				user,
			}
		}
		case CountActionType.LOGIN: {
			const { user } = payload

			return {
				...state,
				isAuthenticated: true,
				user,
			}
		}
		default:
			return state;
	}
}

const AuthContext = createContext<UserCtx>({
	...initialState,
	method: "JWT",
	login: () => Promise.resolve()
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const login = async (email: string, password: string) => {
		const response = await axios.post('/api/auth/login', {
			email,
			password,
		})
		const { accessToken, user } = response.data

		setSession(accessToken)

		dispatch({
			type: CountActionType.LOGIN,
			payload: {
				user,
			},
		})
	}

	useEffect(() => {
		(async () => {
			const accessToken = window.localStorage.getItem('accessToken')

			try {
				if (accessToken && isValidToken(accessToken)) {
					setSession(accessToken)
					const response = await axios.get('/api/auth/profile')
					const { user } = response.data
					dispatch({
						type: CountActionType.INIT,
						payload: {
							isAuthenticated: true,
							user,
						},
					})
				} else {
					dispatch({
						type: CountActionType.INIT,
						payload: {
							isAuthenticated: false,
							user: null,
						},
					})
				}
			} catch (err) {
				dispatch({
					type: CountActionType.INIT,
					payload: {
						isAuthenticated: false,
						user: null,
					},
				})
			}
		})();

	}, []);

	if (!state.isInitialized) {
		return <Loading />
	}

	return (
		<AuthContext.Provider
			value={{
				...state,
				method: 'JWT',
				login,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContext;
