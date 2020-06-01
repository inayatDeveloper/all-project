import React from 'react';
import { useStore } from 'store';

const Reward = ({ user }) => {
  const [{ auth }] = useStore();
  return (
    <>
      <div className='main-header reward-header'>
        <div className='content-bg-wrap bg-rewards'></div>
        <div className='bg-rewards-inner'>
          <div className='container'>
            <div className='row'>
              <div className='col col-lg-6 col-md-8 col-sm-12 col-12'>
                <div className='rewards-content'>
                  <h1>rewards</h1>
                  <p>
                    You will be rewarded for doing what you love to do; sharing
                    your favorite avocado shots, indulging in a scrumptious
                    avocado dish, and collecting the most useful avocado health
                    and wellness tips so you can live your best life ever! Learn
                    more about our rewards system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='point-wrap'>
              <ul>
                <li>your points</li>
                <li>{!auth ? '0' : auth.user.totalPoints}</li>
                <button className='btn btn-redeem' disabled='disabled'>
                  REDEEM
                </button>
              </ul>
            </div>
            <div className='point-system'>
              <h3>points system</h3>
              <p>
                Here is a breakdown of which actions acquire points and how much
                each action is worth.
              </p>
              <div className='row point-row'>
                <div className='col-lg-12'>
                  <div className='point-inner-wrap'>
                    {/* <h4>0-9 POINTS</h4> */}
                    <ul>
                      <li>
                        <span>Like a post</span>
                        <h6>1</h6>
                      </li>
                      {/* <li>
                        <span>Rank in Top Posts and/or Top Users two weeks in a row</span>
                        <h6>10</h6>
                      </li> */}
                      <li>
                        <span>Comment on someone’s post</span>
                        <h6>1</h6>
                      </li>
                      <li>
                        <span>Submit an idea to Selma in the form</span>
                        <h6>5</h6>
                      </li>
                      {/* <li>
                        <span>Visit the site 3 or more times per week</span>
                        <h6>5</h6>
                      </li> */}
                      <li>
                        <span>Register your account</span>
                        <h6>10</h6>
                      </li>
                      <li>
                        <span>Create a post</span>
                        <h6>5</h6>
                      </li>
                      {/* <li>
                        <span>Share on social media</span>
                        <h6>15</h6>
                      </li> */}
                      <li>
                        <span>
                          Your friend creates an account from your referral link
                        </span>
                        <h6>40</h6>
                      </li>
                      <li>
                        <span>Selma implements your idea</span>
                        <h6>50</h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reward;
