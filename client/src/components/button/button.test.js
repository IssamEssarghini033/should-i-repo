import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders with the given label', () => {
    render(<Button label="Test Button" />);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  test('applies the default variant class when no variant is provided', () => {
    render(<Button label="Default Variant Button" />);
    const buttonElement = screen.getByText('Default Variant Button');
    expect(buttonElement).toHaveClass('button');
    expect(buttonElement).toHaveClass('primary');
  });

  test('applies the correct variant class when a variant is provided', () => {
    render(<Button label="Secondary Variant Button" variant="secondary" />);
    const buttonElement = screen.getByText('Secondary Variant Button');
    expect(buttonElement).toHaveClass('secondary');
  });

  test('calls the onClick handler when clicked', () => {
    const mockOnClick = jest.fn();
    render(<Button label="Clickable Button" onClick={mockOnClick} />);
    const buttonElement = screen.getByText('Clickable Button');
    
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('renders as a button element with the correct type', () => {
    render(<Button label="Submit Button" type="submit" />);
    const buttonElement = screen.getByText('Submit Button');
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });

  test('applies as a button element with the correct type', () => {
    render(<Button label="Submit Button" type="submit" />);
    const buttonElement = screen.getByText('Submit Button');
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });
});
