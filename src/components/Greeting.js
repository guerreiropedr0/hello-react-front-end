import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import fetchGreetings from '../redux/greetings/greetings';

const Greeting = () => {
  const message = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);

  return (
    <h1>
      {message}
    </h1>
  );
};

export default Greeting;
