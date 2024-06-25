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
            src: import('./assets/stickers/duck_cool.tgs'),
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
            src: import('./assets/videos/RPReplay_Final1719231392.mp4'),
            style: 'aspect-ratio: 780/1100',
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
            src: import('./assets/stickers/duck_love.tgs'),
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
            src: import('./assets/videos/RPReplay_Final1719231796.mp4'),
            style: 'aspect-ratio: 780/625',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Включить график',
          description: "✅ — график включен, к вам могут записываться<br>❌ — график выключен, запись к вам закрыта<br>Для смены статуса необходимо нажать на кнопку.<br><br>Например, у вас есть неопределнность в своем расписании и вы хотели бы временно отключить возможность записи для своих клиентов — выключите график.",
          button: 'Дальше',
        },

        // slide next
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_xray.tgs'),
            size: 200,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Еще кое-что настроим...',
          description: "1. <b>Рабочие дни</b>. Укажите в какие дни вы будете работать, а в какие отдыхать:  💼 — рабочий день, а 🏝 — выходной.<br>2. <b>Рабочее время</b>. Укажите время в которое к вам открыта запись, например с 10:00 до 18:00.<br>3. <b>Окно для записи</b>. Укажите, сколько вы времени сможете уделить для одного клиента. Например 30 минут.<br>4. <b>Глубина записи</b>. Определяет на сколько дней вперед вы анонсируете возможность. Например 7 дней — клиент сможет к вам записаться за неделю до приема.",
          button: 'Дальше',
        },


        // video 3
        {
          media: {
            type: 'video',
            src: import('./assets/videos/RPReplay_Final1719236819.mp4'),
            style: 'aspect-ratio: 420/250',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Клиенты сами к вам записываются',
          description: "Отслеживайте уведомления в боте. Клиенты сами к вами записываются, а вы получаете уведомления.",
          button: 'Дальше',
        },

        // video 4
        {
          media: {
            type: 'video',
            src: import('./assets/videos/RPReplay_Final1719237774.mp4'),
            style: 'aspect-ratio: 780/520',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Все записи в календаре',
          description: "Используйте календарь, чтобы посмотреть список записей. Так же вы можете отменить записи, забронировать время для клиента или сделать себе выходной.",
          button: 'Дальше',
        },

        // slide final
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_juggling.tgs'),
            size: 200,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Вы готовы!',
          description: "Теперь вы знаете все о возможностях бота. Желаем вам продуктивной работы! Если возникнут дополнительные вопросы, жмите кнопку <b>Связаться с разработчиком</b>",
          button: 'Спасибо!',
        },

      ],
    },
  ],
});
