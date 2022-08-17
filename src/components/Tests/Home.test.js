import Renderer from 'react-test-renderer';
import Home from '../Home';

it('Renders Home component', () => {
  const tree = Renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
