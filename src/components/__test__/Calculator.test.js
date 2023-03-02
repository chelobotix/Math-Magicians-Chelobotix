import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('Calculator Component', () => {
  test('Tree', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
