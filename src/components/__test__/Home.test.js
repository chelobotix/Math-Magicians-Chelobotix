import renderer from 'react-test-renderer';
import Home from '../Home';

describe('Home Component', () => {
  test('Tree', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
