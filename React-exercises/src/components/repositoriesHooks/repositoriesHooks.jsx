import React, { Fragment } from 'react';

import useDataFetching  from '../useDataFetching/useDataFetching';

const RepositoriesHooks = () => {
  const { loading, results, error } = useDataFetching(
    'https://api.github.com/users/royderks/repos'
  );

    if (loading || error) {
      return loading ? 'Loading...' : error.message;
    }

  return (
    <Fragment>
      <h1>My repos using Hooks</h1>
      <ul>
        {
          results.map(({ id, html_url, full_name }) => (
            <li key={id}>
              <a href={html_url} target='_blank' rel='noopener noreferrer'>
                {full_name}
              </a>
            </li>
          ))
        }
      </ul>
    </Fragment>
  );
};

export default RepositoriesHooks;
