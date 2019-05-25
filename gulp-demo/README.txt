###############安裝方式###############
<方式一>
step1: 安裝node js，然後開啟命令列，並將路徑切換到該資料夾

step2:
  全域安裝gulp
  命令:
    npm install -g gulp

step3:
  本地安裝套件 gulp、sass、pug、autoprefixer、browser-sync
  命令:
    npm install gulp gulp-sass gulp-pug gulp-autoprefixer browser-sync --save

step4:
  在專案根目錄新增gulp的設定檔 gulpfile.js
  結構:
    專案資料夾
    |
    --pug
    |--index.pug
    |
    --sass
    |--main.sass
    |
    --gulpfile.js
    --package.json
    --package.json.lock
    --README.txt

step5:
  啟動gulp
  命令:
    gulp

<方式二>

step1: 安裝nodejs，然後開啟命令列，並將路徑切換到該資料夾

step2:
  產生package.json，設定專案相關的資訊
  命令:
    npm init

step3:
  在dependencies內貼上套件名稱及版本

  "browser-sync": "^2.24.7",
  "gulp": "^3.9.1",
  "gulp-autoprefixer": "^6.0.0",
  "gulp-pug": "^4.0.1",
  "gulp-sass": "^4.0.1"

ste4:
  安裝套件
  命令:
    npm install

step5:
  在專案根目錄新增gulp的設定檔 gulpfile.js
  結構:
    專案資料夾
    |
    --pug
    |--index.pug
    |
    --sass
    |--main.sass
    |
    --gulpfile.js
    --package.json
    --package.json.lock
    --README.txt

step6:
  啟動gulp
  命令:
    gulp
