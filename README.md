## Кастомный аудио-плеер
[Кастомный музыкальный плеер](https://polivodichka.github.io/custom-audio-player/), позволяющий по очереди проигрывать музыкальные треки или перелистывать их кликами по кнопкам/с использованием клавиатуры. Добавлены режимы перемешивания, зацикливания всего списка воспроизведения или одного трека. Встроен текст песни.

Плеер был создан как решение [задачи](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/js30%23/js30-2.md) в рамках курса [JavaScript/Front-end. Stage 0](https://rs.school/js-stage0/).

---
Функционал:

+ Запуск и остановка осуществляются, если нажать на соответствующую кнопку, пробел на клавиатуре или обложку альбома.
+ Во время проигрывания трека можно открыть его текст, нажав на крутящуюся пластинку. Убирается текст повторным нажатием, при переключении трека или при остановке воспроизведения.
+ Переключаться между треками можно при помощи соответствующих кнопок на странице либо стрелками на клавиатуре: вправо (следующий трек) и влево (предыдущий).
+ Переключение на предыдущий трек: 1 нажатие, если проиграло менее 5 секунд трека, иначе — двойной клик. Одинарный в таком случае отмотает на начало трека.
+ Можно отключить звук, нажав на иконку звука, повторное нажатие снова его включает.
+ Регулировать звук можно при помощи шкалы с ползунком, которая всплывает при наведении на иконку звука, либо стрелками вверх(громче) и вниз(тише) на клавиатуре.
+ Есть режим shuffle. Первое нажатие перемешивает список воспроизведения, второе — возвращает исходный порядок.
+ Режим повтора. По умолчанию выключен: по достижении конца списка воспроизведение остановится. У включённого две модификации: повторять всё/повторять 1 композицию.

| ![](https://user-images.githubusercontent.com/68563445/154960178-7cfe32b9-f1f5-4ec4-b64c-46339f0c6ad5.png)| ![](https://user-images.githubusercontent.com/68563445/154960270-bdf7d125-e817-4a62-992b-a1f2c7b57b04.png)                      |
|----------------------|----------------------|
|![](https://user-images.githubusercontent.com/68563445/154965442-159e9f76-5585-4d0c-9aa7-45a6efa5cf22.png)|  |










