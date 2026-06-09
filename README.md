# Сайт-лендинг ООО «Бугдас Пласт»

Коммерческий лендинг стартап-проекта: спирально-навитые полимерные ПВХ-шланги
для быта, строительства, промышленности и АПК. Сайт представляет продукт,
собирает заявки на консультации, пилотные партии и поставки, а также содержит
обязательный блок поддержки Фонда содействия инновациям и ПУТП.

## Технологии

- **React 18 + TypeScript** — компонентная структура, строгая типизация
- **Vite 5** — сборка и dev-сервер
- **Tailwind CSS 3** — стили и адаптив
- **Framer Motion** — плавные анимации появления и интерактив
- **lucide-react** — иконки
- **react-router-dom** — маршруты главной и юридических страниц

---

## Запуск проекта

Нужен установленный [Node.js](https://nodejs.org/) версии 18 или новее.

```bash
npm install     # установить зависимости (один раз)
npm run dev      # запустить локально → http://localhost:5173
npm run build    # собрать продакшен-версию в папку dist/
npm run preview  # локально посмотреть собранную версию
```

`npm run build` сначала проверяет типы TypeScript, затем собирает сайт.
Готовые файлы появляются в папке **`dist/`** — её и нужно загружать на хостинг.

---

## Выкладка на хостинг

1. Выполните `npm run build`.
2. Загрузите **всё содержимое папки `dist/`** в корень сайта на хостинге.
3. Настройте «SPA-фоллбэк», чтобы прямые ссылки (например, `/privacy`) открывались.
   Нужные конфиги уже включены в сборку:
   - **Обычный хостинг (Apache / ISPmanager, Beget, Reg.ru и т.п.)** — файл
     `.htaccess` уже лежит в `dist/`, дополнительно ничего делать не нужно.
   - **Netlify** — файл `_redirects` уже в `dist/`.
   - **Vercel** — используется `vercel.json` из корня проекта.
   - **Nginx** — добавьте в конфиг: `try_files $uri $uri/ /index.html;`

> Если открыть сайт как простой набор файлов без настройки фоллбэка, главная
> страница и навигация по якорям работают всегда; прямые ссылки на `/privacy`,
> `/consent` и т.п. требуют правила выше.

---

## Куда приходят заявки

Форма отправляется через сервис **FormSubmit** (без бэкенда) на e-mail:

```
bugdaev42@gmail.com
```

### Что нужно подтвердить (обязательно, один раз)

1. После публикации сайта отправьте **первую тестовую заявку** через форму.
2. На почту `bugdaev42@gmail.com` придёт письмо от FormSubmit с кнопкой
   подтверждения — нажмите её. До подтверждения заявки приходить не будут.
3. После активации все заявки будут приходить письмом в виде таблицы с темой
   «Заявка с сайта Бугдас Пласт — …».

### Как сменить адрес или способ доставки

Всё управляется из одного файла — [`src/lib/site.ts`](src/lib/site.ts):

- `formEndpoint` — адрес доставки заявок. Чтобы сменить почту, замените e-mail
  в строке `https://formsubmit.co/ajax/НОВАЯ_ПОЧТА`.
- Для интеграции с **Telegram-ботом, CRM или Google-таблицей** замените
  `formEndpoint` на ваш webhook-URL (логика отправки — в
  [`src/components/sections/ContactForm.tsx`](src/components/sections/ContactForm.tsx)).

Контакты, реквизиты, адрес и телефон тоже меняются в `src/lib/site.ts` —
они автоматически подставятся в шапку, футер, формы и юридические страницы.

---

## Подключённые сервисы

| Сервис | Назначение | Статус |
|--------|------------|--------|
| FormSubmit | Доставка заявок с формы на e-mail | Требует разовой активации (см. выше) |
| Google Fonts (Inter) | Шрифт сайта | Подключён |
| Яндекс.Метрика | Аналитика | **Не подключена** — см. ниже |

### Подключение Яндекс.Метрики (после согласования)

1. Создайте счётчик на [metrika.yandex.ru](https://metrika.yandex.ru/).
2. Вставьте код счётчика перед `</head>` в файле [`index.html`](index.html).
3. Настройте цели на отправку формы и клики по CTA-кнопкам (кнопки имеют
   осмысленные тексты, удобно ловить как «клик по кнопке»).

---

## SEO и индексация

Уже настроено:

- уникальные `title` и `meta description`, теги Open Graph и Twitter Card;
- `favicon.svg` и `og-image.svg`;
- `robots.txt` и `sitemap.xml` (в папке `public/`, попадают в `dist/`);
- canonical-URL и разметка **JSON-LD** (Organization) в `index.html`;
- отдельные страницы: `/privacy`, `/consent`, `/terms`, `/cookie`.

> **Важно про домен.** Сейчас во всех мета-тегах указан домен-заглушка
> `https://bugdas-plast.ru`. После выбора реального домена замените его:
> в [`index.html`](index.html), `public/robots.txt`, `public/sitemap.xml`
> и поле `domain` в `src/lib/site.ts`.

### Рекомендации после публикации

- Добавьте сайт в [Яндекс.Вебмастер](https://webmaster.yandex.ru/) и
  [Google Search Console](https://search.google.com/search-console), подтвердите права.
- Отправьте `sitemap.xml` в обоих сервисах.
- Подключите и проверьте Яндекс.Метрику, настройте цели.

---

## Что нужно заменить на финальные материалы

Сейчас на сайте стоят аккуратные заглушки. После получения официальных
материалов замените:

1. **Логотип компании** — временный wordmark в
   [`src/components/Logo.tsx`](src/components/Logo.tsx) и `public/favicon.svg`.
2. **Логотипы Фонда содействия инновациям и ПУТП** — плейсхолдеры `FundLogo` и
   `PutpLogo` в [`src/components/sections/Partners.tsx`](src/components/sections/Partners.tsx).
   Положите официальные SVG/PNG в `public/` и подставьте их вместо заглушек
   (не искажая пропорции и цвета — это требование договора).
3. **Фото/3D продукта** — при наличии реальных изображений шланга можно заменить
   SVG-визуал в [`src/components/HoseVisual.tsx`](src/components/HoseVisual.tsx).

Дословный текст о поддержке Фонда (в блоке «Партнёры») менять нельзя — он
вынесен в `partnerStatement` в `src/lib/site.ts`.

---

## Структура проекта

```text
public/              # статика: favicon, og-image, robots.txt, sitemap.xml, .htaccess, _redirects
src/
  components/
    ui/              # Button, Container, SectionTitle, Reveal — переиспользуемые элементы
    sections/        # секции главной (Problems, Product, Applications, Partners, FAQ, ContactForm, ...)
    Header.tsx  Footer.tsx  Hero.tsx  Logo.tsx  HoseVisual.tsx  AnimatedBackground.tsx
  data/              # контент: applications, advantages, faq, process, problems, audience, stats
  pages/
    HomePage.tsx
    NotFoundPage.tsx
    legal/           # PrivacyPage, ConsentPage, TermsPage, CookiePage + общий LegalLayout
  lib/site.ts        # ⭐ единый источник: контакты, реквизиты, endpoint формы, тексты
  App.tsx  main.tsx  index.css
```
