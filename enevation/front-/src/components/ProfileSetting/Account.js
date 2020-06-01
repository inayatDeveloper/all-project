import React, { useEffect } from 'react';
import bootstrap from 'bootstrap';
const jQuery = require('jquery');
window.jQuery = jQuery;
import('bootstrap-select/dist/css/bootstrap-select.min.css');
require('bootstrap-select');
const AccountSetting = () => {
  useEffect(() => {
    jQuery('.selectpicker').selectpicker();
    return () => {};
  }, []);
  return (
    <>
      <div className='ui-block-title block-title-bg'>
        <h6 className='title'>Account Settings</h6>
      </div>
      <div className='ui-block-content'>
        <form>
          <div className='row'>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
              <div className='form-group label-floating is-select'>
                <label className='control-label' htmlFor='privacy'>
                  Who Can Friend You?
                </label>
                <select className='selectpicker form-control'>
                  <option value='EO'>Everyone</option>
                  <option value='NO'>No One</option>
                </select>
              </div>
            </div>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
              <div className='form-group label-floating is-select'>
                <label className='control-label' htmlFor='post privacy'>
                  Who Can View Your Posts
                </label>
                <select className='selectpicker form-control'>
                  <option value='US'>Friends Only</option>
                  <option value='EO'>Everyone</option>
                </select>
              </div>
            </div>
            <div className='col-12'>
              <div className='description-toggle'>
                <div className='description-toggle-content'>
                  <div className='h6'>Notifications Email</div>
                  <p>
                    We’ll send you an email to your account each time you
                    receive a new activity notification
                  </p>
                </div>
                <div className='togglebutton'>
                  <label>
                    <input type='checkbox' checked={true} />
                    <span className='toggle'></span>
                  </label>
                </div>
              </div>
              <div className='description-toggle'>
                <div className='description-toggle-content'>
                  <div className='h6'>Friend’s Birthdays</div>
                  <p>
                    Choose whether or not receive notifications about your
                    friend’s birthdays on your newsfeed
                  </p>
                </div>
                <div className='togglebutton'>
                  <label>
                    <input type='checkbox' checked={false} />
                    <span className='toggle'></span>
                  </label>
                </div>
              </div>
            </div>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
              <button className='btn btn-secondary btn-lg full-width'>
                Restore all Attributes
              </button>
            </div>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
              <button className='btn btn-primary btn-lg full-width'>
                Save all Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default AccountSetting;
