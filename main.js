//HTMLの見た目を作る(innerHTML)
const topPage = document.getElementById("topPage");
const resultPage = document.getElementById("resultPage");

//ボタンの機能追加
function buttonClick() {
  //トップページを非表示にする
  topPage.classList.remove("d-block");
  topPage.classList.add("d-none");
  let result = getResult();
  console.log(result);

  resultPage.innerHTML = `
  <div class="container">
    <div class="pt-5 d-flex justify-content-center text-center">
      <div class="col-3">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="border-bottom">ソフトウェア開発みくじ</h5>
            <img src = "${result[1]}">
            <h1 class="border-bottom">${result[0]}</h1>
            <p class="border-bottom">${result[2]}</p>
            <p class="border-bottom">ラッキー言語<br/>${result[3]}</p>
            <p class="border-bottom">ラッキーデータベース<br/>${result[4]}</p>
            <p>ラッキーエディタ<br/>${result[5]}</p>
            <a href = "Index.html">
              <button" class="btn btn-danger mb-5">
                もう一度おみくじを引く
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  //リザルトページを表示する
  resultPage.classList.remove("d-none");
  resultPage.classList.add("d-block");
}

let button = document.getElementById("btn");
button.addEventListener("click", buttonClick);

//ランダム関数で要素をそれぞれランダムに取得
function getResult() {
  const resFortune = fortune[ranNum(fortune)];
  const resPicture = picture[resFortune];
  const resMessage = message[ranNum(message)];
  const resLuckyLanguage = luckyLanguage[ranNum(luckyLanguage)];
  const resLuckyDB = luckyDB[ranNum(luckyDB)];
  const resLuckyEditor = luckyEditor[ranNum(luckyEditor)];
  console.log("getResult");

  const result = [
    resFortune,
    resPicture,
    resMessage,
    resLuckyLanguage,
    resLuckyDB,
    resLuckyEditor,
  ];
  return result;
}

//配列の要素を取得する共通の関数
function ranNum(array) {
  const num = Math.floor(Math.random() * array.length);
  console.log("ranNum" + num);
  return num;
}
