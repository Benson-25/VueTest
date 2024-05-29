const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'VueTest'
//     ? '/https://github.com/Benson-25/VueTest/'
//     : '/'
// } 

// set -e


// npm run build

// # 進入構建輸出的目錄
// cd dist

// # 如果你是要部署到自定義域名
// # echo 'www.example.com' > CNAME

// git init
// git add -A
// git commit -m 'deploy'

//  https://<USERNAME>.github.io
//  git push -f git@github.com:Benson-25/VueTest.github.io.git master

// # 如果你要部署到 https://Benson-25.github.io/VueTest
// git push -f git@github.com:Benson-25/VueTest.git master:gh-pages

// cd -