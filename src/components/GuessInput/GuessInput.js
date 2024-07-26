import React from 'react';

function GuessInput({ handleSubmitGuess, status, answer }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <>
      <form
        className='guess-input-wrapper'
        onSubmit={handleSubmit}
      >
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          type="text"
          id="guess-input"
          value={tentativeGuess}
          required
          minLength={5}
          maxLength={5}
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setTentativeGuess(nextGuess);
          }}

        />
      </form>

    </>
  )

}

export default GuessInput;
