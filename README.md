# Лендинг Автошколы
## Next.js + tailwind 
Проект написан на Next.js (pages router) и tailwind для стилизации

## Основные папки:
1) src/pages - тут содержится роутинг, подробнее https://nextjs.org/docs/pages/building-your-application/routing
2) src/components - тут содержится основной код компонентов
3) src/components/common - часто переиспользуемы(или потенциально переиспользуемые) не большие компоненты, в них НЕЛЬЗЯ импортировать из рядом лежащих папок, например src/components/layout, src/components/page/**  
4) src/components/sections - переиспользуемые секции или шаблоны для них. Тут можно импортировать из src/components/common, но нельзя из src/components/pages
5) src/components/pages - тут идёт разбиение по страницам, а в самих страниц по их кастомным секциям, здесь можно импортировать из src/components/common и src/components/sections
6) src/components/layout - тут хранится общая разметка каждой страницы(header, footer) здесь можно импортировать только из src/components/common
7) public/locales/ua.json - здесь содержаться основные текста приложения, для использования найти где оно импортируюется и повторить точно также


## NODEJS version 18.17.0

## Команды запуска

### Для запуска
```bash
  npm install
```
```bash
  npm run dev
```

### Для сборки (на сервере оно собирается автоматически, фактически собирать проект не надо без особой нужды)
```bash
    npm run build
```
```bash
    npm start
```

## Пример .env

NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyCAalR0Vg_PZSiaGa1RexBnfD1RQeL9-LA
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-CWHS65RXYK
NEXT_PUBLIC_HOTJAR_ID=3687975
NEXT_PUBLIC_GOOGLE_SITE_VARIFICATION_ID=jXnsC4BzEdTc3QLgaobY4G7pH3jTi_VAB0FH4BiYyLc

