import React, { Fragment } from "react";
import withDataFetching from "../withDataFetching/withDataFetching";

function Repositories({ loading, results, error }) {
  if (loading || error) {
    return loading ? "Loading..." : error.message;
  }

  return (
    <Fragment>
      <h1> My repos using HOC </h1>
      <ul>
        {results.map(({ id, html_url, full_name }) => (
          <li key={id}>
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              {full_name}
            </a>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default withDataFetching({
  dataSource: "https://api.github.com/users/royderks/repos"
})(Repositories);