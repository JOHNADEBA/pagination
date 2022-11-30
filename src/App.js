import "./App.css";
import Pages from "./components/Pages";
import { useGlobalContext } from "./services/context";

function App() {
	const { set, getUsers, index, loading } = useGlobalContext();
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div className="App">
			<header className="App-header">
				<h2>{loading ? "Loading..." : "Pagination"}</h2>
				<div className="head-btn"></div>
			</header>
			<div className="page-cont">
				{set.map((person) => {
					return <Pages key={person.id} {...person} />;
				})}
			</div>
			<div className="btn-cont">
				<button onClick={() => getUsers("prev")} className="prev">
					Prev
				</button>
        <div>
				{numbers.map((number, i) => {
					return (
						<button
							onClick={() => getUsers(number)}
							className={index + 1 === number ? "active" : "btn"}
							key={i}
						>
							{number}
						</button>
					);
				})}</div>
				<button onClick={() => getUsers("next")} className="next">
					Next
				</button>
			</div>
		</div>
	);
}

export default App;
