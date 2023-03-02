import renderer from 'react-test-renderer';
import Pad from '../Pad';

describe('Pad Component', () => {
  test('Tree', () => {
    const tree = renderer.create(<Pad />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
