import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import RewardCard from '../../components/RewardCard';
import Footer from '../../components/Footer';
import gift from '../../assets/icons/gift.png'
import data from '../../data';
import './index.scss';

const RewardsListing = () => {

  const [purchaseGift, setPurchaseGift] = useState(false);
  const [rewardData, setRewardData] = useState(data.rewardListing);

  useEffect(() => {
    const filteredData = purchaseGift ? data.rewardListing.filter(({ isAppExclusive }) => !isAppExclusive) : data.rewardListing;
    setRewardData(filteredData);
  }, [purchaseGift]);

  return (
    <div className='rewardListing'>
      <Header />
      <div className='rewardListing__content'>
        <div className='rewardListing__content__title'> San Dollars </div>
        <div className='rewardListing__content__description'> Pay now, eat more later! Earn a bonus when you buy a food upfront. Tap now to purchase. </div>
      </div>
      <div className="rewardListing__purchaseGift">
        <div className="rewardListing__purchaseGift__container">
          <div className="rewardListing__purchaseGift__img__container">
            <img className="rewardListing__purchaseGift__img" src={gift} alt="App Exclusive" />
          </div>
          Purchase as gift
          <label className="rewardListing__switch">
            <input type="checkbox" checked={purchaseGift} onChange={e => setPurchaseGift(e.target.checked)} />
            <span className="rewardListing__slider rewardListing__round" />
          </label>
        </div>
      </div>
      <div className="rewardListing__listing-container">
        {rewardData.map(({ buyPrice, bonusAmount, isAppExclusive }, rewardId) => 
          <RewardCard key={rewardId} buyPrice={buyPrice} bonusAmount={bonusAmount} isAppExclusive={isAppExclusive} />)}
      </div>
      <Footer />
    </div>
  )
};

export default RewardsListing;
