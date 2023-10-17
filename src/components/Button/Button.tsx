import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger',
}
export interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, WithTestId {
  variant?: ButtonVariant;
}

const dangerButtonStyles = css`
  background: ${(props) => props.theme.components.button.colors.danger};
`;

const secondaryButtonStyles = css`
  background: ${(props) => props.theme.components.button.colors.secondary};
`;

export const buttonStyles = css`
  border-radius: ${(props) => props.theme.components.button.borderRadius};
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${(props) => props.theme.components.button.colors.primary};
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: ${(props) => props.theme.components.button.hover.borderColor};
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

const Button = styled(
  ({
    variant = ButtonVariant.primary,
    className = '',
    testId = 'btn',
    children,
    ...props
  }: Props) => {
    return (
      <button className={`${className} ${variant}`} data-testid={testId} {...props}>
        {children}
      </button>
    );
  },
)`
  ${buttonStyles};

  &.${ButtonVariant.danger} {
    ${dangerButtonStyles};
  }

  &.${ButtonVariant.secondary} {
    ${secondaryButtonStyles};
  }
`;

export default Button;
