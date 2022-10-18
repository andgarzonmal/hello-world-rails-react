import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayGreetings } from './Redux/appReducer'

const Greeting = () => {

  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(displayGreetings());
  }, [dispatch]);

  console.log(greeting)

  return (
    <div>
      <h1>Hello!! this is the 'greeting {greeting}'</h1>
    </div>
  );
};

export default Greeting;

