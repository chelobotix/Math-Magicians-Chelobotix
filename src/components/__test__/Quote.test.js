import renderer from 'react-test-renderer';
import Quote from '../Quote';

describe('Quote Component', () => {
  test('Tree', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
