import { useInput } from "./hooks";

export default function SearchForm({ value, onSearch }) {
    const [target, reset] = useInput("");

    const submit = e => {
        e.preventDefault();
        onSearch(target.value);
        reset("");
    }

    return (
        <form onSubmit={submit}>
            <input 
                {...target}
                type="text"
                placeholder="Github Username"
                required
            />
            <button>Search</button>
        </form>
    );
}