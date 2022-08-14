import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import Sound from "./assets/「えい！」.mp3";
import Sound2 from "./assets/「攻撃開始、突撃せよ！」.mp3";

export default function MySound() {
    const [play, { stop, pause }] = useSound(Sound);
    const [play2, { stop2, pause2 }] = useSound(Sound2);
    
    const [ posts, setPosts ] = useState([]);
    const addPost = post => setPosts(allPosts => [post, ...allPosts]);

    const [val, set] = useState("");
    const [phrase, setPhrase] = useState("example phrase");

    const createPhrase = () => {
        setPhrase(val);
        set("");
    }

    const newsFeed = {
        subscribe: (x) => x,
        unsubscribe: (y) => y
    };  

    useEffect(() => {
        newsFeed.subscribe(addPost);
        return () => newsFeed.unsubscribe(addPost);
    }, []);

    useEffect(() => {
        play();
        return () => play2();
    }, [val]);

    return (
        <>
            <label>Favorite phrase</label>
            <input
                value={val}
                placeholder={phrase}
                onChange={e => set(e.target.value)}
            />
            <button onClick={createPhrase}>send</button>
        </>
    );
}

