//HTMLの見た目を作る(innerHTML)
const topPage = document.getElementById("topPage");
const resultPage = document.getElementById("resultPage");

//ボタンの機能追加
function buttonClick() {
  //トップページを非表示にする
  topPage.classList.remove("d-block");
  topPage.classList.add("d-none");

  resultPage.innerHTML = `
  <div class="container">
    <div class="pt-5 d-flex justify-content-center text-center">
      <div class="col-3">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="border-bottom">ソフトウェア開発みくじ</h5>
            <h1>${result[1]}</h1>
            <p class="border-bottom">${result[0]}</p>
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

//ランダム関数で配列をそれぞれランダムに取得
//配列の要素を取得する共通の関数
function ranNum(arrayLength) {
  const num = Math.floor(Math.random * arrayLength);
}

//空の配列を作ってランダムに取得した要素を配列に格納する(res)
//格納した配列を変数に代入してinnerHTMLに入れる
