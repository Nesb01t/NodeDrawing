const fs = require("fs");

const fileName = "data.txt";

// 获取文件数据的文本列表
function getList(name) {
  const data = fs.readFileSync(fileName, "UTF-8");
  const lines = data.split(/\r?\n/);
  return lines;
}

// 获取幸运观众
function getLuckUser(lines) {
  const minimum = 1;
  const maximum = lines.length;
  const luckNumber =
    Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  const luckData = lines[luckNumber - 1];
  return luckData;
}

// main
try {
  const lines = getList(fileName); // 获取数据列表
  const luckUser = getLuckUser(lines); // 获取幸运观众

  console.log(luckUser); // 获取幸运数字对应的同学
} catch (err) {
  console.error(err);
}
