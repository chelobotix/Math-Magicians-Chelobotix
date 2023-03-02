import renderer from 'react-test-renderer';
import Display from '../Display';

describe('Display Component', () => {
  test('Tree', () => {
    const tree = renderer.create(<Display calcObj={{}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
