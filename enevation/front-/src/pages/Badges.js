import React from 'react';
const Badges = () => {
  return (
    <>
      <div className='main-header'>
        <div className='content-bg-wrap bg-badges'></div>
        <div className='container'>
          <div className='row'>
            <div className='col col-lg-7 col-md-8 col-sm-12 col-12 m-auto'>
              <div className='main-header-content'>
                <h1>Collect your Badges!</h1>
                <p>
                  Show Off Your Avo Flair Collect all these badges to show how
                  truly obsessed you are with avocados. Here, you'll find how to
                  unlock these and show them off on your profile for your
                  friends to see. How many can you collect?
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <img className='img-bottom' src='img/badges-bottom.png' alt='friends' /> */}
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='ui-block'>
              <div className='birthday-item inline-items badges'>
                <div className='author-thumb'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576788606/static/badge2_kmjarm.png'
                    alt='author'
                  />
                </div>
                <div className='birthday-author-name'>
                  <a href='1#' className='h6 author-name'>
                    Trailblazer
                  </a>
                  <div className='birthday-date'>First 500 sign</div>
                </div>
                <div className='skills-item'>
                  <div className='skills-item-meter'>
                    <span
                      className='skills-item-meter-active'
                      style={{ width: '100%' }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='ui-block'>
              <div className='birthday-item inline-items badges'>
                <div className='author-thumb'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576788606/static/badge3_gzdubj.png'
                    alt='author'
                  />
                  <div className='label-avatar bg-blue'>4</div>
                </div>
                <div className='birthday-author-name'>
                  <a href='1#' className='h6 author-name'>
                    Explorer
                  </a>
                  <div className='birthday-date'>
                    User has visited all sections of the platform
                  </div>
                </div>
                <div className='skills-item'>
                  <div className='skills-item-meter'>
                    <span
                      className='skills-item-meter-inactive'
                      style={{ width: ' 52%' }}
                    ></span>
                  </div>
                </div>
              </div>
            </div> */}
            <div className='ui-block'>
              <div className='birthday-item inline-items badges'>
                <div className='author-thumb'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576788607/static/badge4_orr4ba.png'
                    alt='author'
                  />
                </div>
                <div className='birthday-author-name'>
                  <a href='1#' className='h6 author-name'>
                    Avo Guru
                  </a>
                  <div className='birthday-date'>
                    Users that are most advising others with avocado tips and
                    recommendations; users that are proven avocado experts in
                    terms of how much they spread their knowledge with other
                    users - 100 posts with accurate information
                  </div>
                </div>
                <div className='skills-item'>
                  <div className='skills-item-meter'>
                    <span
                      className='skills-item-meter-inactive'
                      style={{ width: ' 100%' }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <div className='ui-block'>
              <div className='birthday-item inline-items badges'>
                <div className='author-thumb'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576788607/static/badge5_ammdxc.png'
                    alt='author'
                  />
                </div>
                <div className='birthday-author-name'>
                  <a href='1#' className='h6 author-name'>
                    Ambassador
                  </a>
                  <div className='birthday-date'>
                    Friend Referrals and signups – you refer your friends and if
                    5 amount sign up from your referral you receive.
                  </div>
                </div>
                <div className='skills-item'>
                  <div className='skills-item-meter'>
                    <span
                      className='skills-item-meter-inactive'
                      style={{ width: ' 70%' }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <div className='ui-block'>
              <div className='birthday-item inline-items badges'>
                <div className='author-thumb'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576788606/static/badge1_ngqyt5.png'
                    alt='author'
                  />
                  <div className='label-avatar bg-primary'>2</div>
                </div>
                <div className='birthday-author-name'>
                  <a href='1#' className='h6 author-name'>
                    Avocado Badge
                  </a>
                  <div className='birthday-date'>
                    Badge of badges- user must receive at least 10 badges to
                    attain this badge
                  </div>
                </div>
                <div className='skills-item'>
                  <div className='skills-item-meter'>
                    <span
                      className='skills-item-meter-inactive'
                      style={{ width: '76%' }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>

            <div className='ui-block'>
              <div className='birthday-item inline-items badges'>
                <div className='author-thumb'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576788607/static/badge6_xzvi1x.png'
                    alt='author'
                  />
                </div>
                <div className='birthday-author-name'>
                  <a href='1#' className='h6 author-name'>
                    Shining Star
                  </a>
                  <div className='birthday-date'>
                    Accumulate 1,000 combined likes & comments on content from
                    others
                  </div>
                </div>
                <div className='skills-item'>
                  <div className='skills-item-meter'>
                    <span
                      className='skills-item-meter-inactive'
                      style={{ width: ' 23%' }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <div className='ui-block'>
              <div className='birthday-item inline-items badges'>
                <div className='author-thumb'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576788607/static/badge7_mvxvif.png'
                    alt='author'
                  />
                </div>
                <div className='birthday-author-name'>
                  <a href='1#' className='h6 author-name'>
                    Selma’s Pick
                  </a>
                  <div className='birthday-date'>
                    Content gets selected by Selma and highlighted by AFM for a
                    weeks time. Badge will be rotated amongst selected content
                    on a weekly basis. - Selmas discretion
                  </div>
                </div>
                <div className='skills-item'>
                  <div className='skills-item-meter'>
                    <span
                      className='skills-item-meter-inactive'
                      style={{ width: ' 100%' }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <div className='ui-block'>
              <div className='birthday-item inline-items badges'>
                <div className='author-thumb'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576788607/static/badge8_ey2a1o.png'
                    alt='author'
                  />
                </div>
                <div className='birthday-author-name'>
                  <a href='1#' className='h6 author-name'>
                    Good Neighbor
                  </a>
                  <div className='birthday-date'>
                    User that has given a combination of 1,000 likes, comments,
                    shares 
                  </div>
                </div>
                <div className='skills-item'>
                  <div className='skills-item-meter'>
                    <span
                      className='skills-item-meter-inactive'
                      style={{ width: ' 100%' }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='ui-block'>
              <div className='birthday-item inline-items badges'>
                <div className='author-thumb'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576788607/static/badge9_fduvdg.png'
                    alt='author'
                  />
                </div>
                <div className='birthday-author-name'>
                  <a href='1#' className='h6 author-name'>
                    Avo Gamer
                  </a>
                  <div className='birthday-date'>
                    Plays on a weekly basis our rotating games must play 20
                    games to attain
                  </div>
                </div>
                <div className='skills-item'>
                  <div className='skills-item-meter'>
                    <span
                      className='skills-item-meter-inactive'
                      style={{ width: '69%' }}
                    ></span>
                  </div>
                </div>
              </div>
            </div> */}
            <div className='ui-block'>
              <div className='birthday-item inline-items badges'>
                <div className='author-thumb'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576788608/static/badge10_zzyfxr.png'
                    alt='author'
                  />
                </div>
                <div className='birthday-author-name'>
                  <a href='1#' className='h6 author-name'>
                    Avo Fit
                  </a>
                  <div className='birthday-date'>
                    Users sharing large amounts of content health and wellness
                    related (sports, fitness, nutrition, weightloss) 100+ posts
                  </div>
                </div>
                <div className='skills-item'>
                  <div className='skills-item-meter'>
                    <span
                      className='skills-item-meter-inactive'
                      style={{ width: ' 33%' }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='ui-block'>
              <div className='birthday-item inline-items badges'>
                <div className='author-thumb'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576788608/static/badge11_gulkwa.png'
                    alt='author'
                  />
                </div>
                <div className='birthday-author-name'>
                  <a href='1#' className='h6 author-name'>
                    Social Butterfly
                  </a>
                  <div className='birthday-date'>
                    User sharing large amounts of content to other social
                    platforms- User shares 50+ pieces of content
                  </div>
                </div>
                <div className='skills-item'>
                  <div className='skills-item-meter'>
                    <span
                      className='skills-item-meter-inactive'
                      style={{ width: ' 100%' }}
                    ></span>
                  </div>
                </div>
              </div>
            </div> */}
            <div className='ui-block'>
              <div className='birthday-item inline-items badges'>
                <div className='author-thumb'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576788608/static/badge12_slmoxp.png'
                    alt='author'
                  />
                </div>
                <div className='birthday-author-name'>
                  <a href='1#' className='h6 author-name'>
                    Top Fan
                  </a>
                  <div className='birthday-date'>
                    One of the top 10 users to like/comment in Avocado Nation -
                    rotated every month
                  </div>
                </div>
                <div className='skills-item'>
                  <div className='skills-item-meter'>
                    <span
                      className='skills-item-meter-inactive'
                      style={{ width: ' 65%' }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <div className='ui-block'>
              <div className='birthday-item inline-items badges'>
                <div className='author-thumb'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576788606/static/badge13_byzmff.png'
                    alt='author'
                  />
                  <div className='label-avatar bg-breez'>2</div>
                </div>
                <div className='birthday-author-name'>
                  <a href='1#' className='h6 author-name'>
                    Conversation Starter
                  </a>
                  <div className='birthday-date'>
                    User to create 10 threads that receive at least 5 posts/
                    interactions
                  </div>
                </div>
                <div className='skills-item'>
                  <div className='skills-item-meter'>
                    <span
                      className='skills-item-meter-inactive'
                      style={{ width: ' 100%' }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='ui-block'>
              <div className='birthday-item inline-items badges'>
                <div className='author-thumb'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576788606/static/badge14_nptb0m.png'
                    alt='author'
                  />
                </div>
                <div className='birthday-author-name'>
                  <a href='1#' className='h6 author-name'>
                    Super Foodie
                  </a>
                  <div className='birthday-date'>
                    User that shares large amounts of recipes on the platform -
                    must share 25 recipes to receive badge
                  </div>
                </div>
                <div className='skills-item'>
                  <div className='skills-item-meter'>
                    <span
                      className='skills-item-meter-inactive'
                      style={{ width: ' 80%' }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>*/}
            <div className='ui-block'>
              <div className='birthday-item inline-items badges'>
                <div className='author-thumb'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576788606/static/badge15_mlnwdu.png'
                    alt='author'
                  />
                </div>
                <div className='birthday-author-name'>
                  <a href='1#' className='h6 author-name'>
                    Photobomber
                  </a>
                  <div className='birthday-date'>
                    User that shares large amounts of avocado pictures - must
                    share 25 to receive badge
                  </div>
                </div>
                <div className='skills-item'>
                  <div className='skills-item-meter'>
                    <span
                      className='skills-item-meter-inactive'
                      style={{ width: '100%' }}
                    ></span>
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
export default Badges;
