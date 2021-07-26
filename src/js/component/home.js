import React, { useState } from "react";

export const Home = () => {
	let [tasks, setTasks] = useState([""]);
	let [inputValue, setInputValue] = useState("");

	const addTask = e => {
		if (e.keyCode === 13 && inputValue !== "") {
			const newTask = [tasks.length + 1, inputValue];
			setTasks([...tasks, newTask]);
			setInputValue("");
		}
	};

	const deleteTask = k => {
		const newTasks = tasks.filter(task => task[0] !== k);
		setTasks(newTasks);
	};

	return (
		<div className="container">
			<input
				className="col align-self-center"
				type="text"
				onChange={e => setInputValue(e.target.value)}
				value={inputValue}
				onKeyDown={addTask}
				placeholder={inputValue === "" ? "Add a new task..." : ""}
			/>

			<ul className="p-2">
				{tasks.map(task => (
					<>
						<li
							className="card bg-success text-center"
							onClick={() => deleteTask(task[0])}
							key={task[0]}
							style={{ listStyleType: "none" }}>
							{task[1]}
						</li>
						<hr />
					</>
				))}
			</ul>
			<hr style={{ borderTop: "1px dashed" }} />
			<small className="col-12">
				{tasks.length > 0 ? (
					<b>{tasks.length} tasks pendings!!</b>
				) : (
					<b>Nothing to do!!</b>
				)}
			</small>
		</div>
	);
};
