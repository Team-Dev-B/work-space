//HTMLの見た目を作る(innerHTML)
//ランダム関数で配列をそれぞれランダムに取得
//配列の要素を取得する共通の関数
function ranNum(arrayLength) {
  const num = Math.floor(Math.random * arrayLength);
}

//空の配列を作ってランダムに取得した要素を配列に格納する(res)
//格納した配列を変数に代入してinnerHTMLに入れる
