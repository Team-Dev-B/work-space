//HTMLの見た目を作る(innerHTML)
//ランダム関数で要素をそれぞれランダムに取得
function getResult(){
  const resFortune = fortune[ranNum(fortune)];
  const resPicture = picture[ranNum(picture)];
  const resMessage = message[ranNum(message)];
  const resLuckyLanguage = luckyLanguage[ranNum(luckyLanguage)];
  const resLuckyDB = luckyDB[ranNum(luckyDB)];
  const resLuckyEditor = luckyEditor[ranNum(luckyEditor)];

  const result = [resFortune, resPicture, resMessage, resLuckyLanguage, resLuckyDB, resLuckyEditor];
  return result;
}

//配列の要素を取得する共通の関数
function ranNum(array) {
  const num = Math.floor(Math.random * array.length);
  return num;
}

