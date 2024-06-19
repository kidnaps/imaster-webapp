import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/yoda_thinking.tgs'),
            size: 200,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Что умеет чат-бот iMaster?',
          description: "Все просто! Мастер анонсирует свое время работы и окна для записи, а клиент может записаться на свободные окна.<br><br>Мастер может дать индивидуальное приглашение для доступа к своему календарю конкретному человеку. Клиент в свою очередь может видеть только календарь мастеров, которые предоставили доступ.",
          button: 'Дальше',
        },

        // video 1
        {
          media: {
            type: 'video',
            src: import('./assets/videos/3.mp4'),
            style: 'aspect-ratio: 390/468',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Как пригласить клиента?',
          description: "В главном меню нажмите <b>пригласить клиента</b>, перешлите полученную ссылку пользователю, который хотел бы иметь доступ к вашему календарю.",
          button: 'Дальше',
        },

        // slide next
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/yoda_heart.tgs'),
            size: 200,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Вы пригласили клиента?',
          description: "Отличная работа! Давайте настроим ваш график. В главном меню нажмите кнопку <b>График</b>",
          button: 'Дальше',
        },


        // video 2
        {
          media: {
            type: 'video',
            src: import('./assets/videos/4.mp4'),
            style: 'aspect-ratio: 390/468',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Включить график',
          description: "✅ — график включен, к вам могут записываться<br>❌ — график выключен, запись к вам закрыта<br>Для смены статуса необходимо нажать на кнопку.<br><br>Например, у вас есть неопределнность в своем расписании и вы хотели бы временно отключить возможность записи для своих клиентов — выключите график.",
          button: 'Дальше',
          nextButton: {
            to: '/',
            content: 'Next',
          },
        },
      ],
    },
  ],
});
