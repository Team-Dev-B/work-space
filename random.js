//おみくじの結果を配列に格納
//運勢
const fortune = {'大吉','吉','中吉','小吉','末吉','凶','大凶'};

//画像
const picture = {
    '大吉':'https://3.bp.blogspot.com/-ytT-_QfQo4I/W64DkeEHHwI/AAAAAAABPH0/DvHXqf0fZoU1gRiUy6KE-Gl3XOsqB-GOwCLcBGAs/s800/hime_takabisya_laugh.png',
    '吉':'https://1.bp.blogspot.com/-SWOiphrHWnI/XWS5x7MYwHI/AAAAAAABUXA/i_PRL_Atr08ayl9sZy9-x0uoY4zV2d5xwCLcBGAs/s1600/pose_dance_ukareru_man.png',
    '中吉':'https://1.bp.blogspot.com/-kb8uB73Cz0Y/XVjgJv4126I/AAAAAAABUMs/lPY9BoDvTcMbmAuQaK7a2N_Mqie5PLhPQCLcBGAs/s1600/kid_seikaku_kachiki_girl.png',
    '小吉':'https://1.bp.blogspot.com/-mc6xS8JPCtyI/XhwqmuTv8FI/AAAAAAABXBw/yKYXbKzhPeI9HKfnriSu1w2ac0G8r87EACNcBGAsYHQ/s1600/pose_warau_kuchi_kakusu_man.png',
    '末吉':'https://1.bp.blogspot.com/-8sMAiPmvFuo/XVjgKN2BXoI/AAAAAAABUM0/IfTQp8hHWRsVk_u7s84OE6yvFJ5ekpnLwCLcBGAs/s1600/kid_seikaku_uchiki_girl.png',
    '凶':'https://2.bp.blogspot.com/-WVHihGGDT8Q/XDXcl4F2g6I/AAAAAAABRLM/26oA7xb8nt4NemT1FX2W8_U76cuyJbhZQCLcBGAs/s800/pose_kuyashii_woman.png',
    '大凶':'https://2.bp.blogspot.com/-1VrUWeLF8gc/W959ugjsTHI/AAAAAAABP4I/vTVKrRMiAtwYHm_V3zZyJ0qgwmCPIkDFwCLcBGAs/s800/pose_koshi_nukeru_kowai_man.png'
};

//説明文
const messsage = {
    '関わっているプロジェクトから何だか香ばしい匂いがします。炎上する前になんとか逃げるのが吉。',
    '開発の要件定義が綿飴のようにふわっふわSです。手遅れにならないうちに手を打っておくのが吉。',
    'リリースしたソフトウェアに深刻なバグが見つかりますが、口八丁な営業のお陰で事無きを得るでしょう。ただし、後日それを理由に無茶振りされるおそれがあるので油断は禁物です。',
    'リリースしたソフトウェアに致命的な欠陥が見つかり、それが原因で顧客の機密情報が派手に流出します。仕様で押し通すにはいささか無理がありますので、潔く腹をくくりましょう。',
    'git でコンフリクトが発生します!! が、今回は上手く解消できるでしょう。今回は・・・',
    'リリースしたソフトウェアにバグが見つかりますが、幸いユーザー企業のお偉方は極度のITオンチです。仕様で押し通すのが吉。'
};

//ラッキー言語
//ラッキーデータベース
//ラッキーエディタ
