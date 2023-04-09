export const getAllPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json()) //jsonファイルのデータを取得
      .then((data) => resolve(data)); //最終的なデータをreturnでjsonで返却
  });
};