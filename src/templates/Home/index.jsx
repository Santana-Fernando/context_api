import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContext } from '../../Contexts/CounterContext';
import './styles.css';

function Home() {
  const [state, actions] = useCounterContext()

  const handleError = () => {
    actions.asyncError().then(r => console.log(r)).catch((e) => console.log(e));
  }

  return (
    <div>
      <Heading/>

      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
        <Button onButtonClick={actions.decrease}>decrease</Button>
        <Button onButtonClick={actions.reset}>reset</Button>
        <Button onButtonClick={() => actions.setCounter({counter: 10})}>set 10</Button>
        <Button onButtonClick={() => actions.setCounter({counter: 100})}>set 100</Button>
        <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>async Increase</Button>
        <Button disabled={state.loading} onButtonClick={actions.asyncError}>async Error</Button>
      </div>
    </div>
  );
}

export default Home;
