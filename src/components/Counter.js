import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../counterSlice';

const Counter = () => {
    const counter = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    console.log("counter");

    return (
        <div>
            Value: {counter}
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Counter;