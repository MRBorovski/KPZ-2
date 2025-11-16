# KPZ-2 История версий библиотеки

## Семантическое версионирование (видимое в истории)

### 0.1.0 — Начальная версия

- Добавлены базовые функции (`add`, `capitalize`) с использованием `any`.
- Минимальная функциональность, без строгой типизации.

### 0.2.0 — Базовая типизация

- `add` и `capitalize` получили корректные TypeScript-типы.
- Обратная совместимость сохранена.

### 0.3.0 — Усложнение API

- Добавлена функция `formatNumber` со сложным типом `NumberFormatOptions`.
- API остается совместимым.

### 0.4.0 — Интерфейсы и generics

- Добавлен интерфейс `User`.
- Добавлена универсальная функция `groupBy<T>`.
- TypeScript теперь защищает от неправильных ключей.
- Полная совместимость сохранена.

### 0.5.0 — Классы и .env конфигурация

- Добавлен класс `Logger` с литеральным типом уровня логирования.
- Поддержка `.env` через `dotenv` + валидация через `zod`.
- `formatNumber` теперь берет значение точности из `APP_PRECISION`.
- API совместим.

### 1.0.0 — Стабилизация публичного API

- Добавлены `exports` в `package.json` для корректного импорта библиотеки.
- Запрещено использование `any` через правило ESLint.
- Сборка через `tsup`, корректные типы `.d.ts`.
- Установлена единая точка входа — `src/index.ts`.
- Это **стабильный API**, готовый к использованию.

### 2.0.0 — Breaking Change

- Изменена сигнатура `add`:
  **Было:** `add(a: number, b: number)`  
  **Стало:** `add(values: number[])`
- Нарушена обратная совместимость.
- В `demo.ts` показан неправильный вызов → ошибка → исправленный вызов.

## Інструкція з запуску

### 1. Встановити залежності:

npm install

### 2. Запустити демонстраційний скрипт:

npm run demo

### 3. Зібрати бібліотеку:

npm run build

### 4. Перевірка типів, lint і форматування:

npm run typecheck  
npm run lint  
npm run format:check

## Приклад використання функцій (add, capitalize, formatNumber, groupBy, Logger).

import { add, capitalize, formatNumber, groupBy, Logger, type LogLevel } from 'pz2';
import { config } from './config.js';

// Сума чисел
console.log(add([2, 3, 4]));

// Капіталізація рядка
console.log(capitalize('hello'));

// Форматування числа
console.log(formatNumber(123.456));

// Групування об’єктів
const users = [
{ id: 1, name: 'Alice' },
{ id: 2, name: 'Bob' },
];
console.log(groupBy(users, 'name'));

// Логування
const logger = new Logger(config.LOG_LEVEL as LogLevel);
logger.info('Application started');
logger.debug('Debug info');

## Нотатка про .env

### Бібліотека очікує наступні ключі

APP_PRECISION=2 # точність форматування числа
LOG_LEVEL=info # рівень логування: silent | info | debug

### Посилання на реліз (я не зрозумів де його дістати)

https://github.com/MRBorovski/KPZ-2.git
