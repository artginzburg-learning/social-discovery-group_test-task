Test task: https://codesandbox.io/s/calculate-leaderboard-places-v3xgy4

Company: https://socialdiscoverygroup.com

Project they're hiring a second (Senior) Front-end Engineer for: https://evaapp.ai

### Stages

1. HR screening call (30 min)
2. Test task (1 hour)
3. Live-coding, technical interview
4. CTO meeting

### `index.js` content description

I only wrote `calculateLeaderboardPlaces()` and added the 4th test, the rest is from the test task.

## Original ReadMe

Пользователи участвуют в конкурсе и зарабатывают очки.
По окончанию конкурса показывается лидерборд с результатами. Чем больше очков набрал пользователь, тем выше его позиция.
Т.к. за первые 3 места предполагаются денежные выплаты, то есть минимальное количество очков, чтобы попасть на первые 3 места.

- Пользователь может занять первое место, только если набрал >= firstPlaceMinScore очков
- Пользователь может занять второе место, только если набрал >= secondPlaceMinScore очков
- Пользователь может занять третье место, только если набрал >= thirdPlaceMinScore очков
  Если для какого-то места нет пользователя, набравшего достаточно очков, то это место остаётся пустым.
  Файл preview.png показывает, как это в итоге будет выглядеть. Он только для демонстрации, реализовывать верстку не нужно.

Необходимо реализовать функцию calculateLeaderboardPlaces (https://codesandbox.io/s/calculate-leaderboard-places-v3xgy4?file=/src/index.js).
Функция распределяет места пользователей, учитывая ограничения для получения первых мест и набранные пользователями очки.
Файл preview.png носит иллюстративный характер, не нужно релизовывать UI!
Реализованную функцию прислать в виде js файла
