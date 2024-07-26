import React from 'react';

function EndGame({ status, guesses, answer }) {
  return (
    <>
      {status == 'won' && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in <strong>{guesses.length} {guesses.length > 1 ? 'guesses' : 'guess'}</strong>.
          </p>
        </div>
      )}

      {status == 'lost' && (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      )}

    </>

  );
}

export default EndGame;
