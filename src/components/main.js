import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Container, Board } from './styles';

export default function Main() {
  const [checkIsEmpty, setCheckIsEmpty] = useState(true);
  const [word, setWord] = useState('');
  const [secretWord, setSecretWord] = useState([]);
  const [hiddenSecretWord, setHiddenSecretWord] = useState([]);
  const cleanWordField = '';

  function handleWord(event) {
    setCheckIsEmpty(false);
    setWord(event.target.value.toUpperCase());
  }

  function salveSecretWord() {
    const arr = [];
    for (let i = 0; i < word.length; i += 1) {
      arr.push('_ ');
    }
    setSecretWord(word.split(''));
    setHiddenSecretWord(arr);
    setCheckIsEmpty(true);
  }

  function checkLetter() {
    const copyHiddeSecretWord = [...hiddenSecretWord];

    for (let letter = 0; letter < secretWord.length; letter += 1) {
      if (secretWord[letter] === word) {
        copyHiddeSecretWord[letter] = word;
      }
    }

    if (!secretWord.includes(word))
      toast.error(`A letra '${word}' não existe na palavra!`);

    setHiddenSecretWord(copyHiddeSecretWord);
    setCheckIsEmpty(true);
  }

  return (
    <Container>
      <Board>
        <p>{hiddenSecretWord}</p>

        <input
          type="text"
          value={checkIsEmpty ? cleanWordField : word}
          onChange={event => handleWord(event)}
        />

        <button type="button" onClick={salveSecretWord}>
          Salvar Palavra
        </button>
        <button type="button" onClick={checkLetter}>
          Verificar
        </button>
        <button type="button">Finalizar</button>
      </Board>
    </Container>
  );
}
