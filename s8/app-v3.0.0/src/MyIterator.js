import { useIterator } from "./hooks";

export default function MyIterator() {
    const [letter, previous, next] = useIterator([
        "a",
        "b",
        "c"
    ]);

    return (
        <>
            <button onClick={previous}>{`<<`}</button>
            <button onClick={next}>{`>>`}</button>
            <p>{letter && letter}</p>
        </>
    )
}