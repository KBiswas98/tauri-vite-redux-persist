// import { useState } from "react";
// import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { CountFeatureMain } from "./feature/counter";
// import "./notification";
function App() {
	// const [greetMsg, setGreetMsg] = useState("");
	// const [name, setName] = useState("");

	// async function greet() {
	// 	// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
	// 	setGreetMsg(await invoke("greet", { name }));
	// }

	return (
		<main className="container">
			<h1>Welcome to Tauri + React</h1>

			<CountFeatureMain />
		</main>
	);
}

export default App;
