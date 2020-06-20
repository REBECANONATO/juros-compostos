import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  padding: 20px 10px;
  margin: 1.5em auto 5.5em auto;
  background-color: #3e00b3;
  color:#fff;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;

