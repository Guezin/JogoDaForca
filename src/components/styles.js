import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 50px;
    font-size: 36px;
  }

  input {
    margin-top: 20px;
    margin-bottom: 10px;
    width: 320px;
    border: 1px solid #eee;
    border-radius: 4px;
    height: 36px;
    padding: 5px 10px;
    font-size: 26px;
  }

  button {
    margin-bottom: 10px;
    width: 320px;
    height: 36px;
    padding: 0 15px 0 15px;
    border: 0;
    border-radius: 4px;
    background: #7159c1;
    font-size: 16px;
    font-weight: bold;
    color: #fff;

    &:hover {
      background: ${darken(0.05, '#7159C1')};
    }
  }
  button:nth-of-type(1) {
    margin-top: 30px;
  }
`;
