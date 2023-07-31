// 要素の表示を none に設定する関数
function hideElement(element) {
  element.classList.remove('d-block');
  element.classList.add('d-none');
}

// 要素の表示を block に設定する関数
function showElement(element) {
  element.classList.remove('d-none');
  element.classList.add('d-block');
}

// ページ内の要素の参照をオブジェクトにまとめる
const elements = {
  home: document.getElementById('home'),
  result: document.getElementById('result'),
};

// おみくじ結果を表示する関数
function showResult() {
  const omikujiData = randomSet();
  hideElement(elements.home);
  showElement(elements.result);
  elements.result.innerHTML = '';
  elements.result.append(createResultElement(omikujiData));
}

// ホーム画面に戻る関数
function backToHome() {
  showElement(elements.home);
  hideElement(elements.result);
  elements.result.innerHTML = '';
}

// おみくじ結果の要素を作成する関数
function createResultElement(omikujiData) {
  const container = document.createElement('div');
  container.classList.add('overflow-scroll', 'p-2');

  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add(
    'd-flex',
    'vh100',
    'justify-content-center',
    'align-items-center',
    'flex-column'
  );

  const omikuji = document.createElement('div');
  omikuji.classList.add(
    'omikuji',
    'bg-white',
    'd-flex',
    'align-items-center',
    'flex-column',
    'my-3',
  );

  omikuji.innerHTML = `
    <div>
      <h5 class="text-danger yuji-syuku pt-3">
        ソフトウェア開発みくじ
      </h5>
    </div>
    <div>
      <hr class="line-red" />
      <img class="illust" src="${omikujiData["url"]}" />
      <hr class="line-red" />
    </div>
    <div>
      <h1 class="text-danger yuji-syuku text-center p-3">
        ${omikujiData["結果"]}
      </h1>
    </div>
    <div>
      <p class="text-danger yuji-syuku p-3">
        ${omikujiData["詳細"]}
      </p>
    </div>
    <div class="mb-3">
      <hr class="line-red" />
      <p class="text-danger yuji-syuku text-center">✿ ラッキー言語 ✿</p>
      <h5 class="text-danger yuji-syuku text-center">${omikujiData["言語"]}</h5>
      <hr class="line-red" />
      <p class="text-danger yuji-syuku text-center">
        ✿ ラッキーデータベース ✿
      </p>
      <h5 class="text-danger yuji-syuku text-center">${omikujiData["データベース"]}</h5>
      <hr class="line-red" />
      <p class="text-danger yuji-syuku text-center">
        ✿ ラッキーエディタ ✿
      </p>
      <h5 class="text-danger yuji-syuku text-center">
        ${omikujiData["エディタ"]}
      </h5>
    </div>
    <div class="mb-3">
      <button
        id="re-draw-omikuji"
        type="button"
        class="btn btn-danger rounded-pill yuji-syuku"
      >
        もう一度おみくじを引く
      </button>
    </div>
  `;

  // 再度おみくじを引くボタンのクリックイベントを追加
  omikuji
    .querySelectorAll('#re-draw-omikuji')[0]
    .addEventListener('click', function () {
      backToHome();
    });

  contentWrapper.append(container);
  container.append(omikuji);
  return contentWrapper;
}
