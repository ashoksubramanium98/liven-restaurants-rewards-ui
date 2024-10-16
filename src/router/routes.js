import { createBrowserRouter } from 'react-router-dom';
import { pages } from '../config' 
import RewardsListing from '../pages/rewards-listing';

const Routes = createBrowserRouter([
  {
    path: pages.rewardsListing,
    element: <RewardsListing />
  }
]);

export default Routes;
