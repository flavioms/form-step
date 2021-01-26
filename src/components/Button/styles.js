import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
  border: none;
  border-radius: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  white-space: nowrap;
  cursor: pointer;
  padding: 0.6rem 2.3rem;
  max-height: 4.8rem;
  font-size: 1.2rem;
  background: #666;
  color: #fff;
  margin: 1rem;

  &:hover {
    background: ${shade(0.2, "#666")};
  }

  &:active {
    transform: scale(0.9);
  }
`;
