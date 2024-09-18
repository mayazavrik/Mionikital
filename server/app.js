

require("dotenv").config();
const express = require("express");
const path = require("path");
const serverConfigServer = require("./config/serverConfigServer");
const indexRoutes = require("./routes/index.routes");

const app = express();
serverConfigServer(app);

// Указываем папки для статических файлов
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../client/dist')));

// Подключаем маршруты
app.use("/", indexRoutes);

// Обработка всех запросов к клиентскому приложению
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App has been started on port ${PORT}...`);
});
