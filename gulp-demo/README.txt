###############�w�ˤ覡###############
<�覡�@>
step1: �w��node js�A�M��}�ҩR�O�C�A�ñN���|������Ӹ�Ƨ�

step2:
  ����w��gulp
  �R�O:
    npm install -g gulp

step3:
  ���a�w�ˮM�� gulp�Bsass�Bpug�Bautoprefixer�Bbrowser-sync
  �R�O:
    npm install gulp gulp-sass gulp-pug gulp-autoprefixer browser-sync --save

step4:
  �b�M�׮ڥؿ��s�Wgulp���]�w�� gulpfile.js
  ���c:
    �M�׸�Ƨ�
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
  �Ұ�gulp
  �R�O:
    gulp

<�覡�G>

step1: �w��nodejs�A�M��}�ҩR�O�C�A�ñN���|������Ӹ�Ƨ�

step2:
  ����package.json�A�]�w�M�׬�������T
  �R�O:
    npm init

step3:
  �bdependencies���K�W�M��W�٤Ϊ���

  "browser-sync": "^2.24.7",
  "gulp": "^3.9.1",
  "gulp-autoprefixer": "^6.0.0",
  "gulp-pug": "^4.0.1",
  "gulp-sass": "^4.0.1"

ste4:
  �w�ˮM��
  �R�O:
    npm install

step5:
  �b�M�׮ڥؿ��s�Wgulp���]�w�� gulpfile.js
  ���c:
    �M�׸�Ƨ�
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
  �Ұ�gulp
  �R�O:
    gulp
