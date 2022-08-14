import { useState, useEffect, useMemo } from "react";
import useSound from 'use-sound';
import Sound from "./assets/「えい！」.mp3";
import Sound2 from "./assets/「攻撃開始、突撃せよ！」.mp3";
import Sound3 from "./assets/「まったく、最初から降伏せい」.mp3";

export const useAnyKeyToRender = () => {
    const [, forceRender] = useState();

    useEffect(() => {
        window.addEventListener("keydown", forceRender);
        return () => window.removeEventListener("keydown", forceRender);
    }, []);
}

export const useJazzyNews = () => {
    const [_posts, setPosts] = useState();
    const addPost = post => setPosts(allPosts => [post, ...allPosts]);

    const posts = useMemo(() => _posts, [_posts]);

    const [play] = useSound(Sound);
    const [play2] = useSound(Sound2);
    const [play3] = useSound(Sound3);
    
    const newPostChime = {
        play: () => play
    };

    const welcomeChime = {
        play: () => play2
    };

    const goodbyeChime = {
        play: () => play3
    };

    const newsFeed = {
        subscribe: (x) => x,
        unsubscribe: (y) => y,
    }

    useEffect(() => {
        newPostChime.play();
    }, [posts]);

    useEffect(() => {
        newsFeed.subscribe(addPost);
        return () => newsFeed.unsubscribe(addPost);
    }, []);

    useEffect(() => {
        welcomeChime.play();
        return () => goodbyeChime.play();
    }, []);

    return posts;
}