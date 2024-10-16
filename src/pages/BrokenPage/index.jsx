import { useRouteError, useNavigate } from "react-router-dom";
import { pages } from '../../config'
import './index.scss';

const BrokenPage = () => {
  const error = useRouteError();
  const navigate = useNavigate()
  console.log(`Error - ${error}`);

  const handleNavigateToRewardsListing = () => {
    navigate(pages.rewardsListing);
  };

  return (
    <div className="brokenPage">
      <div className="brokenPage__container">
        <div className="brokenPage__title__container">
          <h1 className="brokenPage__title brokenPage__title__color">Oops! Page not found</h1>
          <h1 className="brokenPage__title">Let's bring you home</h1>
        </div>
        <p className="brokenPage__description">The page that you're looking for is either missing or already moved to another address. Go back to homepage to access our contents.</p>
        <button className="brokenPage__action" onClick={handleNavigateToRewardsListing}> Go to Rewardspage </button>
      </div>
    </div>
  );
};

export default BrokenPage;
