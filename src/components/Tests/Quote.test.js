import Renderer from 'react-test-renderer';
import Quote from '../Quote';

it('Renders Quote component', () => {
  const tree = Renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
