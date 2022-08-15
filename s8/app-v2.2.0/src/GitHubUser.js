import React from "react";
import Fetch from "./Fetch";
import LoadingSpinner from "./LoadingSpinner";

function GitHubUser({ login }) {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}`}
            loadingFallback={<LoadingSpinner />}
            renderError={error => {
                return <p>Something went wrong... {error.message}</p>
            }}
            renderSuccess={UserDetails}
        />
    );
}

function UserDetails({ data }) {
    return (
        <div className="githubUser">
            <img
                src={data.avatar_url}
                alt={data.login}
                style={{ width: 200 }}
            />
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
        </div>
    );
}

export default GitHubUser;