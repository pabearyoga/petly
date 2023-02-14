import styled from 'styled-components';

export const LogoWrapper = styled.h1`
  margin: 0;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.5;

  letter-spacing: 0.07em;
`;

export const LogoAccent = styled.span`
  color: ${p => p.theme.colors.accent};
`;
