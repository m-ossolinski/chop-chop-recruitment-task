import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { dispatchLogout } from 'actions/AuthActions';

export const HeaderComponent = (props) => {
  const {
    history: { push },
  } = props;

  const dispatch = useDispatch();

  return (
    <nav className='app-layout-header nav-wrapper blue'>
      <Link to='/posts' className=''>
        Logo
      </Link>
      <span className='app-layout-header__buttons'>
        <Link to='/posts'>Post list</Link>
        <button
          className='app-layout-header__buttons--logout-btn btn waves-effect waves-light'
          onClick={() => dispatch(dispatchLogout(push))}
        >
          Logout
        </button>
      </span>
    </nav>
  );
};

export const Header = withRouter(HeaderComponent);
