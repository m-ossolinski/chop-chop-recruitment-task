import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  toggleOpenDescription,
  setPostIdToFetchDetails,
} from 'actions/PostListActions';
import { AuthorDetailsButton } from 'components/AuthorDetailsButton';

import { postDetailsPagePath } from 'components/pages/PostDetailsPage';

export const ListElement = (props) => {
  const { id, title, thumbnail, date, authorId, excerpt, activePostId } = props;

  const dispatch = useDispatch();

  return (
    <>
      <div className='row post__row'>
        <img className='post__row-image col s3' src={thumbnail} alt={title} />
        <span className='col s7'>
          <p>{date}</p>
          <Link
            onClick={() => dispatch(setPostIdToFetchDetails(id))}
            to={postDetailsPagePath.replace(':postId', id)}
          >
            {title}
          </Link>
        </span>
        <span className='col s2'>
          <AuthorDetailsButton authorId={authorId} />
          <button onClick={() => dispatch(toggleOpenDescription(id))}>E</button>
        </span>
      </div>
      {activePostId === id ? (
        <div className='post__row-description'>{excerpt}</div>
      ) : null}
    </>
  );
};