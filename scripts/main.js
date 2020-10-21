const myHeading = document.querySelector("h1")
myHeading.textContent = "ドローポーカーについて";
let roleDescription = document.querySelector("p")

document.getElementById("role1").onclick = function() {
    document.getElementById("roleDescription").innerHTML = "スートが全て同じで、10,11,12,13,1が揃った手札のこと。単に「ロイヤルストレートフラッシュ」という。"
};

document.getElementById("role2").onclick = function() {
    document.getElementById("roleDescription").innerHTML = "スートが全て同じで、数字が全て連なっている手札のこと。この時、数字が最大が1の物をロイヤルストレートフラッシュという。滅多に揃わないので単に「ストレートフラッシュ」と呼ぶことが多いように感じる。"
};

document.getElementById("role3").onclick = function() {
    document.getElementById("roleDescription").innerHTML = "同じ数字が4枚揃った手札のこと。「nのフォーカード」という。"
};

document.getElementById("role4").onclick = function() {
    document.getElementById("roleDescription").innerHTML = "ワンペアとスリーカードが混在した手札のこと。それぞれの役の説明はそれぞれの欄を参照してほしい。また、この時3枚揃ってる数字nをとって「nのフルハウス」という。"
};

document.getElementById("role5").onclick = function() {
    document.getElementById("roleDescription").innerHTML = "スートが全て同じ手札のことであり、数字は関係ない。この時、スートをsとして「sのフラッシュ」という。単にフラッシュということもある。"
};

document.getElementById("role6").onclick = function() {
    document.getElementById("roleDescription").innerHTML = "手札全ての数字が連番になっている手札(4, 5, 6, 7, 8など)。13と1、1と2はそれぞれ繋がるが13と2が混在した連番は役として成立しないので注意。この時、連番のうち最も強い数字nをとり「nのストレート」という。"
};

document.getElementById("role7").onclick = function() {
    document.getElementById("roleDescription").innerHTML = "3枚同じ数字が含まれる手札。他2枚がワンペアだった時はフルハウスとなる。この時、「nのスリーカード」という。"
};

document.getElementById("role8").onclick = function() {
    document.getElementById("roleDescription").innerHTML = "ワンペアが2つ含まれる手札のこと。この時、大きい数字nをとって「nのツーペア」という"
};

document.getElementById("role9").onclick = function() {
    document.getElementById("roleDescription").innerHTML = "同じ数字が2枚だけあったときの手札。「nのワンペア」という。"
};

document.getElementById("role10").onclick = function() {
    document.getElementById("roleDescription").innerHTML = "数字、スートが全てバラバラのもの。「ブタ」ともいう。"
};
