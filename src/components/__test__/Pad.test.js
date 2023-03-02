import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CalcButton from '../Pad';

describe('Pad Component', () => {
  test('Tree', () => {
    const tree = renderer.create(<CalcButton symbol="1" function1={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Click button', () => {
    const handleClick = jest.fn();
    render(<CalcButton symbol="1" function1={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button, {});
    expect(button.textContent).toBe('1');
  });
});
