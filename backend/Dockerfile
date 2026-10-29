# Базовый легковесный образ Python
FROM python:3.12-slim

# Отключаем буферизацию вывода и запись байт-кода
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# Рабочая директория внутри контейнера
WORKDIR /app

# Сначала копируем зависимости для эффективного кэширования слоев
COPY requirements.txt .

# Устанавливаем зависимости
RUN pip install --no-cache-dir -r requirements.txt

# Копируем остальной исходный код бэкенда
COPY . .

# Открываем порт FastAPI
EXPOSE 8000

# Запуск сервера uvicorn (0.0.0.0 обязателен для доступа снаружи контейнера)
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]