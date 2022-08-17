import Renderer from 'react-test-renderer';
import Calculator from '../Calculator';

it('Renders Calculator component', () => {
  const tree = Renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
