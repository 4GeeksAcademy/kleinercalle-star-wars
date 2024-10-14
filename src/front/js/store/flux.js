const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [{title: "FIRST", background: "white", initial: "white"},
				  	 {title: "SECOND", background: "white", initial: "white"}],
			cohorte: 'Inicio',
			host: 'https://playground.4geeks.com/contact',
			user: 'kleinercalle',
			number: 1,
			isLogin: false,
			isAdmin: false,
			contacts: [],
			currentContact: {},
			characters: [],
			currentCharacter: {},
			favorites: [{name: 'tierra', type: 'planet'}, {name: 'Luke', type: 'character'}]
		},
		actions: {
			setUser: ( text ) => { setStore({ user: text })},
			setIsLogin: ( value ) => { setStore({ isLogin: value }) },
			setCurrentContact: (contact) => { setStore({ currentContact: contact}) },
			setCurrentCharacter: (value) => { setStore({ currentCharacter: value})},
			addFavorites: (newFavorite) => {
				// verificar si el favorito ya está cargado
				setStore({ favorites: [...getStore().favorites, newFavorite]} )
			},
			removeFavorites: (noFavorite) => {
				// verificar ...
				const resultado = getStore().favorites.filter((item) => item.name !== noFavorite);
				setStore({ favorites: resultado})
			},
			exampleFunction: () => {getActions().changeColor(0, "green");},  // Use getActions to call a function within a fuction
			getMessage: async () => {
					// fetching data from the backend
					const uri = process.env.BACKEND_URL + "/api/hello"
					const options = { 
						method: 'GET',
						headers: { "Content-Type": "application/json"}
					}
					const response = await fetch(uri, options)
					if (!response.ok) {
						console.log("Error loading message from backend", response.status, response.statusText)
						return
					}
					const data = await response.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
			},
			getContact: async () => {
				const uri = `${getStore().host}/agendas/` + getStore().user;
				console.log(uri);
				const options = { method: 'GET'};
				const response = await fetch(uri, options);
				console.log(response);
				if (!response.ok) {
					// Tratamos el error
					if (response.status == 404 ) {
						console.log('Ejectamos el POST para crear una agenda');
					}
					return
				}
				const data = await response.json()
				console.log(data);
				setStore({ contacts: data.contacts })
			},
			addContact: async (newContact) => {
				const uri = `${getStore().host}/agendas/` + getStore().user + '/contacts';
				const options = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newContact)
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					// Tratar el error
					return;
				}
				// const data = await response.json()
				getActions().getContact()
			},
			editContact: async (id, contact) => {
				const uri = `${getStore().host}/agendas/${getStore().user}/contacts/${id}`;
				const options = {
					method: 'PUT',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(contact)
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					// Tratar el error
					return;
				}
				// const data = await response.json()
				getActions().getContact()
			},
			deleteContact: async (id) => {
				const uri = `${getStore().host}/agendas/${getStore().user}/contacts/${id}`;
				const options = {
					method: 'DELETE'
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					// Tratar el error
					return;
				}
				// const data = await response.json()
				getActions().getContact()
			},
			getCharacters: async () => {
				if (localStorage.getItem('characters')) {
					setStore( { characters: JSON.parse(localStorage.getItem('characters'))} );
					console.log('characters estaba en el localStorage');
					
					return
				}
				const response = await fetch('https://www.swapi.tech/api/people');
				if (!response.ok) {
					// tratamos el error
					return;
				}
				const data = await response.json();
				setStore( { characters: data.results} );
				localStorage.setItem('characters', JSON.stringify(data.results))
			},
			getCharacterDetails: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
				if (!response.ok) { return };
				const data = await response.json()
				setStore( { currentCharacter: data.result.properties} )
			},
			changeColor: (index, color) => {
				const store = getStore();  // get the store
				// we have to loop the entire demo array to look for the respective index
				// and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });  //reset the global store
			},
			login: async (dataToSend) => {
				const uri = `${process.env.BACKEND_URL}/api/login`
				const options = {
					method: 'POST',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify(dataToSend)
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					// tratar el error
					if (response.status === 401) {
						// usuario y contraseña errronea
						return
					}
					return
				}
				const data = await response.json()
				localStorage.setItem('token', data.access_token);
				setStore({user: data.user.email, isLogin: true, isAdmin: data.user.is_admin})
			},
			getAuthors: async (id) => {
				const token = localStorage.getItem('token')
				const uri = `${process.env.BACKEND_URL}/api/authors/${id}`
				const options = {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`
					}
				}
				console.log(uri);
				console.log(options);
				const response = await fetch(uri, options)
				if (!response.ok) {
					// tratamos el error
					console.log(response.status, response.statusText);
					return
				}
				const data = await response.json()
				console.log(data);
				
			}
		}
	};
};

export default getState;