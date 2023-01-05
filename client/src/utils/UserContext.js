import React, { useState, createContext, useContext } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export default function UserProvider(props) {
	const [user, setUser] = useState(true);
	const [loggedIn, setLoggedIn] = useState(false);
	const [position, setPosition] = useState("Pedestal");
}
