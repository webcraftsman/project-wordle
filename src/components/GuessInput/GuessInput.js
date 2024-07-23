import React from 'react';

function GuessInput() {
  const [guessTerm, setGuessTerm] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guessTerm });
    setGuessTerm('')
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
          value={guessTerm}
          required
          minLength={5}
          maxLength={5}
          onChange={(event) => {
            setGuessTerm(event.target.value.toUpperCase());

          }}

        />
      </form>

    </>
  )

}

export default GuessInput;
