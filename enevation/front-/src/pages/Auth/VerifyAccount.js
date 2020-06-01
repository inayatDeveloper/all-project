import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';

import { VERIFY_TOKEN, VERIFY_ACCOUNT } from 'graphql/user';

import * as Routes from 'routes';

/**
 * Reset password page
 */
const VerifyAccount = ({ history, location, refetch }) => {
  const [error, setError] = useState('');

  const handleSubmit = (e, verifyAccount) => {
    e.preventDefault();

    if (!token) {
      setError('Enter token to verify account.');
      return;
    }

    setError('');
    verifyAccount()
      .then(async ({ data }) => {
        localStorage.setItem('token', data.verifyAccount.token);
        await refetch();
        history.push(Routes.HOME);
      })
      .catch(err => {
        setError(err);
      });
  };

  const url = new URLSearchParams(location.search);
  const email = url.get('email');
  const token = url.get('token');

  return (
    <div className='col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12'>
      <div>
        <Query query={VERIFY_TOKEN} variables={{ email, token }}>
          {({ error: apiError }) => {
            if (apiError) {
              return (
                <h1 className='btn-green'>
                  This token is either invalid or expired!
                </h1>
              );
            }
            return (
              <Mutation
                mutation={VERIFY_ACCOUNT}
                variables={{ input: { email, token } }}
              >
                {(verifyAccount, { loading, error: apiError }) => {
                  if (apiError)
                    return <h1 className='btn-green'>{apiError}</h1>;

                  return (
                    // <>
                    <div>
                      <div className='registration-login-form'>
                        <div className='tab-content'>
                          <div
                            className='tab-pane active'
                            id='home'
                            role='tabpanel'
                            data-mh='log-tab'
                          >
                            <div className='title h6'>Verify Account</div>

                            <form
                              className='content'
                              onSubmit={e => handleSubmit(e, verifyAccount)}
                            >
                              <div className='row'>
                                <div className='col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'></div>

                                {error && (
                                  <div bottom='sm' top='sm'>
                                    <p>{error}</p>
                                  </div>
                                )}

                                <button className='btn btn-lg btn-primary full-width'>
                                  Verify Account
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    // </>
                  );
                }}
              </Mutation>
            );
          }}
        </Query>
      </div>
    </div>
  );
};

export default withRouter(VerifyAccount);
