import React, { useState } from 'react';
import WelcomeHeader from 'pages/Welcome/WelcomeHeader';

import { Form, Button, Col, InputGroup, Dropdown } from 'react-bootstrap';

const FeedbackForm = ({ isAuth }) => {
  const feedbackEndpoint = `${process.env.REACT_APP_API_URL}`;
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    feedback: '',
    feedbackReason: null,
  });

  const { firstName, lastName, email, feedback, feedbackReason } = values;

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  const handleFeedbackReasonChange = (eventKey, eventObject) => {
    setValues({ ...values, ['feedbackReason']: eventKey });
  };

  const submitFeedbackForm = async feedback => {
    const mutation = `
      mutation {
        submitFeedbackForm(input: {
          firstName: "${feedback.firstName}",
          lastName: "${feedback.lastName}",
          email: "${feedback.email}",
          feedback: "${feedback.feedback}",
          feedbackReason: "${feedback.feedbackReason}"
        }){
          message
        }
      }
    `;

    try {
      const response = await fetch(feedbackEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `${process.env.REACT_APP_API_AUTH_KEY}`,
        },
        body: JSON.stringify({ query: mutation }),
      });
      const resp = await response.json();
      console.log(resp.data.submitFeedbackForm.message);
    } catch (error) {
      console.log(
        'There was a problem submitting your feedback: ',
        error.message
      );
    }
  };

  const handleSubmit = async event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      await submitFeedbackForm({
        firstName: firstName,
        lastName: lastName,
        email: email,
        feedback: feedback,
        feedbackReason: feedbackReason,
      });
    }
    setValidated(true);
  };

  const dropdownLabel = () => {
    if (feedbackReason) {
      switch (feedbackReason) {
        case 'general':
          return 'General Feedback';
        case 'idea':
          return 'Idea Submission';
        case 'bug':
          return 'Bug Report / Feature Request';
        case 'report':
          return 'Report User';
        default:
          return 'Select Feedback Reason';
      }
    } else {
      return 'Select Feedback Reason';
    }
  };

  return (
    <>
      {!isAuth && (
        <div className='page-has-left-panels page-has-right-panels pr-0'>
          <WelcomeHeader />
        </div>
      )}

      <div className='stunning-header bg-primary-opacity'>
        <div className='header-spacer--standard'></div>
        <div className='stunning-header-content'>
          <h1 className='stunning-header-title'>
            Avocado Nation Feedback Form
          </h1>
          <ul className='breadcrumbs'>
            <li className='breadcrumbs-item active'>
              <span>CONTACT</span>
            </li>
          </ul>
        </div>
        <div className='content-bg-wrap stunning-header-bg1'></div>
      </div>

      <section className='mb60'>
        <div className='container'>
          <div className='row'>
            <div className='col col-xl-10 m-auto col-lg-12 col-md-12 col-sm-12 col-12'>
              <div className='detail-content bg-white p-4 p-sm-5 ui-block feedback-form'>
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                  netlify
                >
                  <Form.Row>
                    <Form.Group as={Col} md='6' controlId='validationCustom01'>
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type='text'
                        placeholder='john'
                        name='firstName'
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type='invalid'>
                        Please enter first name
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md='6' controlId='validationCustom02'>
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type='text'
                        placeholder='smith'
                        name='lastName'
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type='invalid'>
                        Please enter last name
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md='12'
                      controlId='validationCustomEmail'
                    >
                      <Form.Label>Email</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type='email'
                          placeholder='your@email.com'
                          name='email'
                          aria-describedby='inputGroupPrepend'
                          required
                          onChange={handleChange}
                        />
                        <Form.Control.Feedback type='invalid'>
                          Please enter an email.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md='12'
                      controlId='validationSelection'
                    >
                      <InputGroup>
                        <Dropdown
                          name='feedbackReason'
                          onSelect={handleFeedbackReasonChange}
                        >
                          <Dropdown.Toggle
                            className='btn btn-sm'
                            id='dropdown-basic'
                          >
                            {dropdownLabel()}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item eventKey='general'>
                              General Feedback
                            </Dropdown.Item>
                            <Dropdown.Item eventKey='idea'>
                              Idea Submission
                            </Dropdown.Item>
                            <Dropdown.Item eventKey='bug'>
                              Bug Report / Feature Request
                            </Dropdown.Item>
                            <Dropdown.Item eventKey='report'>
                              Report User
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md='12' controlId='validationCustom03'>
                      <Form.Label>Feedback</Form.Label>
                      <Form.Control
                        as='textarea'
                        rows='3'
                        placeholder='your feedback here...'
                        required
                        name='feedback'
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type='invalid'>
                        Please provide us reason for contact.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Button className='btn btn-lg' type='submit'>
                    Submit form
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeedbackForm;
