import { describe, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
// import { toBeInTheDocument } from 'vitest/assertions';
// import '@testing-library/jest-dom'

import Button from './Button';

describe('Button', () => {
  test('renders button with correct text', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<Button>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);
    // expect(getByText('Click me').toBeInTheDocument())
    // console.log({buttonElement});
    // screen.debug()
    expect(buttonElement).toBeInTheDocument();
  });

  // test('calls onClick function when clicked', () => {
  //   const onClickMock = jest.fn();
  //   const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
  //   const buttonElement = getByText('Click me');
  //   fireEvent.click(buttonElement);
  //   expect(onClickMock).toHaveBeenCalledTimes(1);
  // });

  // test('has default type "button"', () => {
  //   const { getByText } = render(<Button>Click me</Button>);
  //   const buttonElement = getByText('Click me');
  //   expect(buttonElement).toHaveAttribute('type', 'button');
  // });

  // test('adds custom class name to button', () => {
  //   const customClassName = 'custom-button';
  //   const { container } = render(<Button className={customClassName}>Click me</Button>);
  //   const buttonElement = container.querySelector('button');
  //   expect(buttonElement).toHaveClass(customClassName);
  // });

  // test('renders primary variant button', () => {
  //   const { container } = render(<Button variant="primary">Click me</Button>);
  //   const buttonElement = container.querySelector('button');
  //   expect(buttonElement).toHaveClass('btn', 'btn-primary');
  // });

  // test('renders secondary variant button', () => {
  //   const { container } = render(<Button variant="secondary">Click me</Button>);
  //   const buttonElement = container.querySelector('button');
  //   expect(buttonElement).toHaveClass('btn', 'btn-secondary');
  // });

  // test('renders link variant button', () => {
  //   const { container } = render(<Button variant="link">Click me</Button>);
  //   const buttonElement = container.querySelector('button');
  //   expect(buttonElement).toHaveClass('text-blue-500', 'hover:text-blue-700');
  // });

  // test('renders disabled button', () => {
  //   const { getByText } = render(<Button disabled>Click me</Button>);
  //   const buttonElement = getByText('Click me');
  //   expect(buttonElement).toBeDisabled();
  // });
});