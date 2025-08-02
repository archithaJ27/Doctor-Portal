import styled from 'styled-components';
import { theme } from '../styles/theme';

export const Button = styled.button`
  background-color: ${theme.primary};
  color: white;
  font-weight: bold;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  margin: 0.5rem 0;
  cursor: pointer;
  &:hover {
    background: ${theme.secondary};
    color: ${theme.primary};
  }
`;