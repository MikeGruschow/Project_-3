import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <>
      <Fade>
        <div id='HomeBody'>
          <div id='Home-Text'>Some cool text will be here</div>
        </div>
      </Fade>

      <div className='buttons'>
        <Link to='/register' className='btn btn-primary'>
          Sign Up
        </Link>
        <Link to='/login' className='btn btn-light'>
          Login
        </Link>
      </div>
    </>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);