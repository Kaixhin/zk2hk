var hankaku = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~¢£¬¯¦¥₩';
var zenkaku = '１２３４５６７８９０ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ　！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝〜￠￡￢￣￤￥￦';

var trim = function(word) {
  return word.replace(/^\s+|\s+$/g, '');
};

var zenkakuToHankaku = function(word) {
  for (var i = 0, n = zenkaku.length; i < n; i++) {
    word = word.replace(new RegExp(zenkaku[i], 'gm'), hankaku[i]);
  }
  return word;
};

process.argv.splice(2).forEach(function (val) {
  console.log(trim(zenkakuToHankaku(val)));
});
