import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import {
  MainPageRoute,
  LoginPageRoute,
  GatewayPageRoute,
  PostDetailsPageRoute,
  NotFoundPageRoute,
} from 'components/pages';

export const Routes = () => {
  return (
    <Fragment>
      <LoginPageRoute />
      <GatewayPageRoute />
      <MainPageRoute />
      <PostDetailsPageRoute />
      <NotFoundPageRoute />
    </Fragment>
  );
};
