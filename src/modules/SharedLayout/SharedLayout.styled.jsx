import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  width: 1200px;
  margin: 0 auto;

  background: #FFF;
  /* color: ${({ theme }) => theme.text}; */
  color: rgba(18, 20, 23, 0.05);
  transition: all 0.25s linear;
`;