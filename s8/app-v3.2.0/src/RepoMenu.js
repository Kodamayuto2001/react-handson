import { useEffect } from "react";
import { useIterator } from "./hooks";
import RepositoryReadme from "./RepositoryReadme";

// export function RepoMenu({
//     repositories,
//     onSelect = f => f
// }) {
//     const [{ name }, previous, next] = useIterator(repositories);

//     useEffect(() => {
//         if (!name) return;
//         onSelect(name);
//     }, [name]);

//     return (
//         <>
//             <div style={{ display: "flex" }}>
//                 <button onClick={previous}>&lt;</button>
//                 <p>{name}</p>
//                 <button onClick={next}>&gt;</button>
//             </div>
//         </>
//     );
// }

export function RepoMenu({ repositories, onSelect, login }) {
    const [{ name }, previous, next] = useIterator(
        repositories
    );

    useEffect(() => {
        if (!name) return;
        onSelect(name);
    }, [name]);

    return (
        <>
            <div style={{ display: "flex" }}>
                <button onClick={previous}>&lt;</button>
                <p>{name}</p>
                <button onClick={next}>&gt;</button>
            </div>
            <RepositoryReadme login={login} repo={name} />
        </>
    )
}