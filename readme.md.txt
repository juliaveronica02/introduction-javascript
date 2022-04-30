## Backend
1. Initialisasi project -> express --no-view [folder_name]
2. npm i / npm install -> untuk instalasi package bawaan dari express
3. npm i sequelize mysql2 -> package koneksi database. lalu "npm i body-parser dotenv" -> body parser untuk passing data sedangkan dotenv untuk secure data config database di file .env
4. ke folder bin -> file www -> change port 3000 jdi apa aja biar ndak conflict ama frontend (reactjs)
4. jalankan xampp -> phpmyadmin.
5. sequelize init -> generate sequelize folder
6. setup database -> .sequelizerc
7. sequelize db:create -> buat database berdasarkan config.
7. sequelize model:generate --name Company --attributes name:STRING -> buat table di sequelize.
8. sequelize db:migrate -> migrate database ke database phpmyadmin or yang lainnya
9. buat folder controllers
10. buat file routes berdasarkan file controllers
11. update app.js dengan initialisasi body-parser, import file route
note:
folder config boleh pakai config.json atau ganti jadi config.js