let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0
};

const rateColor = (color, rating) => ({
    ...color,
    rating
});

console.log(rateColor(color_lawn, 5).rating);
console.log(color_lawn.rating);