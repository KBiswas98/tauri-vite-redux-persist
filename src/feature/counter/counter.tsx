import { useAppDispatch, useAppSelector } from "@/store/store-hook";
import { decrement, increment } from "./slices/counter.slice";

function Counter() {
	// The `state` arg is correctly typed as `RootState` already
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	return (
		<div>
			<div>
				 <button type="button" onClick={() => dispatch(increment())}>+</button>
				<span>{count}</span>
				 <button type="button" onClick={() => dispatch(decrement())}>-</button>
			</div>
		</div>
	);
}

export default Counter;
