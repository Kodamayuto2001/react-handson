import { useFetch } from "./hooks"

export default function GitHubUser({ login }) {
    const { loading, data, error } = useFetch(
        `https://api.github.com/users/${login}`
    );

        console.log(data);

    if (error)
        return <pre>{JSON.stringify(error, null, 2)}</pre>;

    if (loading) return <h1>loading...</h1>;

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