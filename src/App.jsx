import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { inc , dec} from "./redux/slice/counterSlice";
import "./App.css";

function App() {
	// Dot Env

	// const apiUrl = import.meta.env.VITE_APP_API_URL;
	// const apiKey = import.meta.env.VITE_APP_API_KEY;

	// console.log(apiUrl); // Outputs: https://api.example.com
	// console.log(apiKey); // Outputs: YOUR_API_KEY

    const count = useSelector((state) => state.counter.val)
    const dispatch = useDispatch()

	return (
		<>
			<div className="div">
				<p className="text-3xl font-bold custom">Hello world!</p>
			</div>

            {/* For store redux */}
			<div>
				<div>
					<button
						aria-label="Increment value"
						onClick={() => dispatch(inc())}
					>
						Increment
					</button>
					<span>{count}</span>
					<button
						aria-label="Decrement value"
						onClick={() => dispatch(dec())}
					>
						Decrement
					</button>
				</div>
			</div>

			{/* React ROuter DOm */}
			<Routes>
				<Route path="/" element={<div>Home</div>} />
				<Route path="/about" element={<div>About</div>} />
				<Route path="*" element={<div>Not Found</div>} />
			</Routes>
		</>
	);
}

export default App;
