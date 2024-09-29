const getAJoke = async () => {
  const jokeResponse = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart');
  const joke = await jokeResponse.json();

  console.log('Joke Data:', joke);
};

export default getAJoke;
