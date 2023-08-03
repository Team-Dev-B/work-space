//おみくじの結果を配列に格納
//運勢
const fortune = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];

//画像
const picture = {
  大吉: "https://3.bp.blogspot.com/-vQSPQf-ytsc/T3K7QM3qaQI/AAAAAAAAE-s/6SB2q7ltxwg/s400/omikuji_daikichi.png",
  吉: "https://2.bp.blogspot.com/-27IG0CNV-ZE/VKYfn_1-ycI/AAAAAAAAqXw/fr6Y72lOP9s/s400/omikuji_kichi.png",
  中吉: "https://3.bp.blogspot.com/-_z-n-7gO3KA/T3K7MU3MdGI/AAAAAAAAE-k/8qs-jxqS4LE/s400/omikuji_chuukichi.png",
  小吉: "https://3.bp.blogspot.com/-nZt5pjGWT9E/T3K7TJ4wEZI/AAAAAAAAE_E/c1X2-N54EYo/s400/omikuji_syoukichi.png",
  末吉: "https://3.bp.blogspot.com/-JLNa8mwZRnU/T3K7StR-bEI/AAAAAAAAE-8/rQrDomz5MSw/s400/omikuji_suekichi.png",
  凶: "https://4.bp.blogspot.com/-qCfF4H7YOvE/T3K7R5ZjQVI/AAAAAAAAE-4/Hd1u2tzMG3Q/s400/omikuji_kyou.png",
  大凶: "https://2.bp.blogspot.com/-h61ngruj0tE/T3K7RDUWmPI/AAAAAAAAE-0/KXtPY8fDwco/s400/omikuji_daikyou.png",
};

//説明文
const message = [
  "関わっているプロジェクトから何だか香ばしい匂いがします。炎上する前になんとか逃げるのが吉。",
  "開発の要件定義が綿飴のようにふわっふわSです。手遅れにならないうちに手を打っておくのが吉。",
  "リリースしたソフトウェアに深刻なバグが見つかりますが、口八丁な営業のお陰で事無きを得るでしょう。ただし、後日それを理由に無茶振りされるおそれがあるので油断は禁物です。",
  "リリースしたソフトウェアに致命的な欠陥が見つかり、それが原因で顧客の機密情報が派手に流出します。仕様で押し通すにはいささか無理がありますので、潔く腹をくくりましょう。",
  "git でコンフリクトが発生します!! が、今回は上手く解消できるでしょう。今回は・・・",
  "リリースしたソフトウェアにバグが見つかりますが、幸いユーザー企業のお偉方は極度のITオンチです。仕様で押し通すのが吉。",
];

//ラッキー言語
const luckyLanguage = [
  "Java",
  "JavaScript",
  "TypeScript",
  "Ruby",
  "C++",
  "C#",
  "Python",
  "PHP",
];
//ラッキーデータベース
const luckyDB = [
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "SQLite",
  "DynamoDB",
  "Oracle Database",
];

//ラッキーエディタ
const luckyEditor = [
  "Sublime",
  "Atom",
  "Visual Studio Code",
  "Xcode",
  "Eclipse",
  "Vim",
  "Emacs",
];
