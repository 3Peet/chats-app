import React, {useContext} from "react";

import {Context} from "../context";

import router, {useRouter} from "next/router";

import axios from "axios";

export default function Auth() {
	const {username, setUsername, secret, setSecret} = useContext(Context);

	const router = useRouter();

	function onSubmit(e) {
		e.preventDefault();
		if (username.length === 0 || secret.length === 0) return;
		axios
			.put(
				"https://api.chatengine.io/users/",
				{username, secret},
				{headers: {"Private-key": "a2d908b2-81d8-4404-8494-616a7fb64859"}}
			)
			.then((r) => router.push("/chats"));
	}
	return (
		<div className="background">
			<div className="auth-container">
				<form className="auth-form" onSubmit={(e) => onSubmit(e)}>
					<div className="auth-title">NexJS Chat</div>

					<div className="input-container">
						<input
							type="text"
							placeholder="Email"
							className="text-input"
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div className="input-container">
						<input
							type="password"
							placeholder="Password"
							className="text-input"
							onChange={(e) => setSecret(e.target.value)}
						/>
					</div>

					<button type="submit" className="submit-button">
						Login / Sign Up
					</button>
				</form>
			</div>
		</div>
	);
}
