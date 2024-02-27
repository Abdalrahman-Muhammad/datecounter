import { useState } from 'react';
import './index.css';
export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const increase = (setState, step) => {
    setState((pre) => pre + step);
  };
  const decrease = (setState, step) => {
    setState((pre) => pre - step);
  };

  let date = new Date();
  date.setDate(date.getDate() + count);
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  return (
    <>
      <div className='container'>
        <button
          className='button-30'
          onClick={() => decrease(setStep, 1)}
          disabled={step === 0}
        >
          &#8722;
        </button>
        <input
          type='range'
          value={step}
          onChange={(e) => setStep(e.target.valueAsNumber)}
        />
        <span className='span'> {step} </span>{' '}
        <button className='button-30' onClick={() => increase(setStep, 1)}>
          &#43;
        </button>
      </div>
      <div className='container'>
        <button className='button-30' onClick={() => decrease(setCount, step)}>
          &#8722;
        </button>

        <input
          type='number'
          name='count'
          value={count}
          onChange={(e) => setCount(e.target.valueAsNumber)}
        />
        <button className='button-30' onClick={() => increase(setCount, step)}>
          &#43;
        </button>
      </div>
      <p className='paragraph'>
        {count === 0
          ? 'Today is'
          : count > 0
          ? `${count} days from today is`
          : `${Math.abs(count)} days ago was`}{' '}
        {formattedDate}
      </p>
      {(count !== 0 || step !== 1) && (
        <button
          className='button-30'
          onClick={() => {
            setCount(() => 0);
            setStep(() => 1);
          }}
        >
          Reset
        </button>
      )}
    </>
  );
}
