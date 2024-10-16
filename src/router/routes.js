import { createBrowserRouter } from 'react-router-dom';
import { pages } from '../config' 
import RewardsListing from '../pages/RewardsListing';
import BrokenPage from '../pages/BrokenPage'

const Routes = createBrowserRouter([
  {
    path: pages.rewardsListing,
    element: <RewardsListing />,
    errorElement: <BrokenPage />,
  }
]);

export default Routes;
