# x-ray-chest-classificator

В этом репозитории хранится полноценное клиент-серверное приложение для классификации снимка легких (РГК) на основе нейросети.
Код нейросети находится в файле "ai_chest.py", сама натренированная модель в файле "pretrained_model.pth".
Сервер находится в корневой папке репозитория, а клиентская часть - в папке client.
Клиентская часть приложения имеет следующий функционал:
1) Отправка изображения на сервер и дальнейшая классификация снимка легких и вывод вердикта от нейросети для клиента.
2) Библиотека: отображает изображения снимков легких и показывает диагноз, изображенный на фото. Сами изображения подгружаются с помощью сервера с использованием асинхронного экшена (redux-thunk).
3) Роутинг по 2-ум разделам: классификация изображения и библиотека (с помощью react-router v6).
4) Адаптивность
5) Api запросы при помощи AXIOS
6) Модульные стили, что обеспечивает изоляцию стилей для клиентской части приложения.

Клиентская часть задеплоена на сервис netlify, но сервер - нет, так как платформа heroku изменила свою политику не в пользу русскоязычной аудитории.
Ссылка на деплой клиентской части: https://652bcb8034035d62c0a443aa--chipper-dango-c83fbd.netlify.app/

Поэтому при желании можно запустить проект локально, для этого:
1) Сохранить все файлы локально
2) В корневой папке написать команду "python server.py" для запуска сервера
3) В папке "client" написать команду "npm run dev" для запуска клиентской части (после этого в консоле появится ссылка на локальный сервер с приложением)

Для выполнения последнего пункта на ПК должен быть установлен node js, проверить версию node можно командой "node -v"

Внешний вид приложения:

![image](https://github.com/Shagabudinov/x-ray-chest-classificator/assets/126676680/94b04dad-ccc4-45e8-a956-d03699d4aa69)

![image](https://github.com/Shagabudinov/x-ray-chest-classificator/assets/126676680/b8404b43-a8d8-4ae2-9a66-2378774bbb32)

![image](https://github.com/Shagabudinov/x-ray-chest-classificator/assets/126676680/77aca8cd-ea75-421f-b533-eceea59a5964)

![image](https://github.com/Shagabudinov/x-ray-chest-classificator/assets/126676680/d2a51e2f-75b1-40d6-b50c-c8427f3beac8)

