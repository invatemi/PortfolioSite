const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

// Middleware для обработки JSON
app.use(express.json());

// Подключение к PostgreSQL
const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "2003tomi3",
});

// Разрешаем CORS (чтобы браузер не блокировал запросы)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Обработчик формы
app.post("/submit-form", async (req, res) => {
  try {
    const { name_application, phone_application, email_application } = req.body;

    console.log("Получены данные:", req.body);

    // Вставляем в базу данных
    const result = await pool.query(
      "INSERT INTO applications (name_applications, phone_applications, email_applications) VALUES ($1, $2, $3) RETURNING *",
      [name_application, phone_application, email_application]
    );

    console.log("Данные сохранены:", result.rows[0]);
    res.json({ success: true, message: "Данные сохранены" });
  } catch (error) {
    console.error("Ошибка сервера:", error);
    res.status(500).json({ success: false, message: "Ошибка сервера" });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${port}`);
});
