export const getAllPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json()) //jsonファイルのデータを取得
      .then((data) => resolve(data)); //最終的なデータをreturnでjsonで返却
  });
};

//引数に渡ってくるurlをもとに、各pokemonの詳細を取得するメソッド
export const getPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
};