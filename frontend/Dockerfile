# Базовый образ Node.js
FROM node:20-alpine

# Рабочая директория
WORKDIR /app

# Копируем файлы описания зависимостей
COPY package*.json ./

# Устанавливаем пакеты
RUN npm install

# Копируем исходный код фронтенда
COPY . .

# Открываем порт Vite
EXPOSE 5173

# Запуск dev-сервера Vite с флагом --host, чтобы принимать подключения извне контейнера
CMD ["npm", "run", "dev", "--", "--host"]