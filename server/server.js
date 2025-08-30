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
  database: "db",
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

    // Получаем максимальный ID и увеличиваем на 1
    const maxIdResult = await pool.query(
      "SELECT MAX(id_applications) as max_id FROM applications"
    );

    const nextId = (maxIdResult.rows[0].max_id || 0) + 1;

    const date_applications = new Date().toISOString(); // текущая дата и время в формате ISO

    // Вставляем в базу данных с автоматическими полями
    const result = await pool.query(
      "INSERT INTO applications (id_applications, name_applications, phone_applications, email_applications, date_applications) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        nextId,
        name_application,
        phone_application,
        email_application,
        date_applications,
      ]
    );

    console.log("Данные сохранены:", result.rows[0]);
    res.json({ success: true, message: "Данные сохранены" });
  } catch (error) {
    console.error("Ошибка сервера:", error);
    res.status(500).json({ success: false, message: "Ошибка сервера" });
  }
});

app.get("/get-project", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM project");
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error("Ошибка сервера:", error);
    res.status(500).json({ success: false, message: "Ошибка сервера" });
  }
});

app.get("/get-reviews", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM reviews");
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error("Ошибка сервера:", error);
    res.status(500).json({ success: false, message: "Ошибка сервера" });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${port}`);
});
