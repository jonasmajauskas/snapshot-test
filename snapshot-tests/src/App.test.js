import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'

test('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot() //compares the new snapshot in tree to the saved snapshot if one already exists
})


