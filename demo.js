/* whynot.ai — DEMO block (#demo). Pre-written scenarios only: no AI, no API, no network.
   Edit texts in DATA below. Language comes from main.js via WNDemo.setLang('uk' | 'en'). */
(() => {
  'use strict';

  /* Real demo bot link goes here. While it is a placeholder, the button leads to #contact. */
  const TG_DEMO_BOT_URL = "https://t.me/whynot_ex_ai_bot";

  const NICHES = ['beauty', 'dental', 'auto'];
  const AGENTS = ['admin', 'leads', 'winback', 'analyst', 'collector', 'publisher'];

  const DATA = {
    uk: {
      ui: {
        agents: ['ШІ-адміністратор', 'Агент заявок', 'Агент повернення клієнтів', 'Агент-аналітик', 'Агент збору даних', 'Агент публікацій'],
        tabsLabel: 'Агенти', nichesLabel: 'Ніша',
        niches: { beauty: 'Манікюр', dental: 'Стоматологія', auto: 'Автосервіс' },
        example: 'Приклад', disclaimer: 'Це приклад роботи. Дані та ціни вигадані.',
        agentName: 'ШІ-адміністратор', online: 'онлайн', chatLabel: 'Демо-чат ШІ-адміністратора',
        run: 'Запустити демо', replay: 'Переглянути ще раз', hintsLabel: 'Швидкі запитання',
        owner: 'Що отримав власник', tgCard: 'Telegram', sheetCard: 'Google Таблиця',
        newLead: 'Нова заявка', cols: ['Дата', 'Послуга', 'Час', 'Статус'],
        ownerEmpty: 'Коли запис буде готовий, тут з’являться заявка в Telegram і рядок у таблиці.',
        tgBtn: 'Спробувати з реальним ботом у Telegram',
        tgNote: 'Демо-бот для вигаданого автосервісу. Відповідає на питання, називає орієнтовні ціни та записує.',
        show: 'Показати', now: 'щойно',
        adminIntro: 'Відповідає клієнтам, називає орієнтовні ціни та записує. Оберіть нішу.'
      },
      scenarios: {
        beauty: {
          time: [20, 41],
          msgs: [
            ['u', 'Добрий вечір! Скільки коштує манікюр із покриттям?'],
            ['b', 'Вітаю! Орієнтовно 600–800 грн, залежно від дизайну. Остаточну ціну назве майстер.'],
            ['u', 'А на завтра є вільний час?'],
            ['b', 'Так! Завтра є 11:00, 14:30 та 17:00. Який зручний?'],
            ['u', '14:30'],
            ['b', 'Готово! Ви записані на завтра о 14:30. Надішлю нагадування за годину.']
          ],
          hints: [
            { q: 'Скільки коштує педикюр?', a: 'Орієнтовно 700–900 грн, залежно від процедури. Остаточну ціну назве майстер.' },
            { q: 'Є вільний час?', a: 'Так! Післязавтра є 10:30 та 16:00. Записати вас?' },
            { q: 'Покликати людину', a: 'Звісно. Передаю розмову адміністратору, він відповість найближчим часом.' }
          ],
          owner: { day: 'Завтра', service: 'Манікюр із покриттям', time: '14:30', status: 'Нова' }
        },
        dental: {
          time: [12, 5],
          msgs: [
            ['u', 'Доброго дня! Скільки коштує професійна чистка зубів?'],
            ['b', 'Вітаю! Орієнтовно 1200–1800 грн, залежно від складності. Точну суму назве лікар на огляді.'],
            ['u', 'Ще болить зуб другий день. Можна сьогодні?'],
            ['b', 'Розумію. Я не ставлю діагнози, але можу записати на терміновий огляд. Є сьогодні 16:40.'],
            ['u', 'Так, на 16:40'],
            ['b', 'Готово! Ви записані на сьогодні о 16:40. Адміністратор клініки вже отримав заявку.']
          ],
          hints: [
            { q: 'Скільки коштує консультація?', a: 'Орієнтовно 300–500 грн. Точну суму назве адміністратор клініки.' },
            { q: 'Є вільний час?', a: 'На завтра є 9:00 та 12:20. Який зручний?' },
            { q: 'Покликати людину', a: 'Звісно. Передаю розмову адміністратору клініки, він відповість найближчим часом.' }
          ],
          owner: { day: 'Сьогодні', service: 'Терміновий огляд', time: '16:40', status: 'Нова' }
        },
        auto: {
          time: [10, 18],
          msgs: [
            ['u', 'Добрий день! Скільки коштує заміна масла і фільтра?'],
            ['b', 'Вітаю! Орієнтовно 900–1500 грн з роботою, залежно від авто та масла. Точну суму назве майстер.'],
            ['u', 'А на суботу можна записатись?'],
            ['b', 'Так! У суботу є 10:00, 12:30 та 15:00. Яка марка авто?'],
            ['u', 'Skoda Octavia, 12:30'],
            ['b', 'Готово: субота, 12:30, Skoda Octavia. Нагадаю про наступну заміну масла через 10 000 км.']
          ],
          hints: [
            { q: 'Скільки коштує діагностика ходової?', a: 'Орієнтовно 400–700 грн. Точну суму назве майстер.' },
            { q: 'Є вільний час?', a: 'У понеділок є 9:00 та 11:30. У неділю не працюємо. Записати вас?' },
            { q: 'Покликати людину', a: 'Звісно. Передаю розмову адміністратору, він відповість найближчим часом.' }
          ],
          owner: { day: 'Субота', service: 'Заміна масла · Skoda Octavia', time: '12:30', status: 'Нова' }
        }
      },
      leads: {
        intro: 'Клієнт пише в месенджер. Агент розбирає повідомлення і складає заявку.',
        from: 'Клієнт · Telegram', msg: 'Хочу на масло в суботу, Skoda, +380…', btn: 'Показати',
        cols: ['Ім’я', 'Послуга', 'Час', 'Статус'], row: ['Олег', 'Заміна масла', 'Субота', 'нова'],
        toast: 'Telegram: нова заявка'
      },
      winback: {
        intro: 'Агент помічає, що клієнт давно не приїжджав, і пише першим.', btn: 'Показати нагадування', to: 'Повідомлення клієнту',
        msg: 'Добрий день, Олегу! Це АвтоДім. З останньої заміни мастила на вашому Skoda Octavia минуло 6 місяців. Запишемо вас на цьому тижні? Є вільний час завтра о 11:00 та 15:00.',
        cta: 'Записатись', done: 'Приклад: клієнт натиснув «Записатись». У реальній роботі заявка потрапила б вам у Telegram.'
      },
      analyst: {
        intro: 'Агент збирає заявки з месенджерів і таблиць та щотижня готує такий огляд.', btn: 'Показати тижневий звіт',
        title: 'Тиждень у цифрах', period: 'Вигаданий тиждень, автосервіс',
        kpis: [['Звернень', 48], ['Записів', 31], ['Нічних звернень', 7]],
        daysTitle: 'Звернення по днях', days: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'], dayVals: [6, 8, 7, 9, 10, 5, 3],
        hoursTitle: 'Години пік', hours: ['00–06', '06–10', '10–14', '14–18', '18–22', '22–24'], hourVals: [3, 4, 7, 9, 19, 6],
        svcTitle: 'Найпопулярніші послуги', svc: [['Заміна масла', 18], ['Діагностика ходової', 11], ['Шиномонтаж', 9], ['Гальма', 6], ['Інше', 4]],
        chTitle: 'Звідки звернення', ch: [['Telegram', 28], ['Сайт', 20]],
        notesTitle: 'Висновки',
        notes: [
          'Найбільше звернень приходить увечері, тому швидка відповідь у цей час особливо важлива.',
          'Заміна масла запитується найчастіше: варто нагадувати клієнтам про наступну заміну.',
          'Частина звернень надходить уночі: без швидкої відповіді їх легко втратити.'
        ]
      },
      collector: {
        intro: 'Агент збирає публічну інформацію про бізнеси у вашій ніші.',
        label: 'Ніша і місто (необов’язково)', ph: 'Наприклад: автосервіси, Львів', btn: 'Знайти',
        resTitle: 'Приклад результату', resFor: 'Запит', any: 'будь-яка ніша',
        cols: ['Бізнес', 'Чого немає'],
        rows: [
          ['Автосервіс «Зразок 1»', 'онлайн-запису'],
          ['Студія «Зразок 2»', 'швидких відповідей у месенджері'],
          ['Клініка «Зразок 3»', 'онлайн-запису і швидких відповідей'],
          ['Барбершоп «Зразок 4»', 'відповідей увечері та у вихідні'],
          ['Салон «Зразок 5»', 'онлайн-запису']
        ],
        note: 'Назви вигадані.'
      },
      publisher: {
        intro: 'Агент підказує, де розмістити оголошення, і пропонує текст.',
        label: 'Ніша', platformsTitle: 'Майданчики', adTitle: 'Текст оголошення',
        platforms: ['Група міста', 'Каталог послуг', 'Локальний чат'],
        ads: {
          beauty: 'Манікюр із покриттям у вашому районі. Вільні години цього тижня, запис у месенджері.',
          dental: 'Стоматологія поруч: огляд, чистка, лікування. Запис у месенджері, відповідаємо швидко.',
          auto: 'Автосервіс: заміна масла, діагностика ходової. Запис на зручний час у месенджері.'
        }
      }
    },

    en: {
      ui: {
        agents: ['AI receptionist', 'Leads agent', 'Win-back agent', 'Analyst agent', 'Data collection agent', 'Publishing agent'],
        tabsLabel: 'Agents', nichesLabel: 'Industry',
        niches: { beauty: 'Manicure', dental: 'Dental', auto: 'Auto service' },
        example: 'Example', disclaimer: 'This is an example. Names and prices are fictional.',
        agentName: 'AI receptionist', online: 'online', chatLabel: 'AI receptionist demo chat',
        run: 'Start demo', replay: 'Watch again', hintsLabel: 'Quick questions',
        owner: 'What the owner gets', tgCard: 'Telegram', sheetCard: 'Google Sheet',
        newLead: 'New lead', cols: ['Date', 'Service', 'Time', 'Status'],
        ownerEmpty: 'When the booking is done, a Telegram lead and a sheet row appear here.',
        tgBtn: 'Try the real bot in Telegram',
        tgNote: 'A demo bot for a fictional auto service. It answers questions, quotes approximate prices and books appointments.',
        show: 'Show', now: 'just now',
        adminIntro: 'Answers customers, quotes approximate prices and books appointments. Pick an industry.'
      },
      scenarios: {
        beauty: {
          time: [20, 41],
          msgs: [
            ['u', 'Good evening! How much is a manicure with gel polish?'],
            ['b', 'Hi! Roughly 600–800 UAH, depending on the design. The master will confirm the final price.'],
            ['u', 'Any free slots tomorrow?'],
            ['b', 'Yes! Tomorrow at 11:00, 14:30 and 17:00. Which works for you?'],
            ['u', '14:30'],
            ['b', 'Done! You are booked for tomorrow at 14:30. I will send a reminder an hour before.']
          ],
          hints: [
            { q: 'How much is a pedicure?', a: 'Roughly 700–900 UAH, depending on the procedure. The master will confirm the final price.' },
            { q: 'Any free slots?', a: 'Yes! The day after tomorrow at 10:30 and 16:00. Shall I book you?' },
            { q: 'Call a person', a: 'Of course. I am passing the chat to the administrator, who will reply shortly.' }
          ],
          owner: { day: 'Tomorrow', service: 'Manicure with gel polish', time: '14:30', status: 'New' }
        },
        dental: {
          time: [12, 5],
          msgs: [
            ['u', 'Hello! How much is a professional teeth cleaning?'],
            ['b', 'Hi! Roughly 1200–1800 UAH, depending on complexity. The dentist will confirm the exact amount at the check-up.'],
            ['u', 'My tooth has been aching for two days. Can I come today?'],
            ['b', 'I understand. I do not diagnose, but I can book an urgent check-up. There is a slot today at 16:40.'],
            ['u', 'Yes, 16:40'],
            ['b', 'Done! You are booked for today at 16:40. The clinic administrator has already received your request.']
          ],
          hints: [
            { q: 'How much is a consultation?', a: 'Roughly 300–500 UAH. The clinic administrator will confirm the exact amount.' },
            { q: 'Any free slots?', a: 'Tomorrow at 9:00 and 12:20. Which works for you?' },
            { q: 'Call a person', a: 'Of course. I am passing the chat to the clinic administrator, who will reply shortly.' }
          ],
          owner: { day: 'Today', service: 'Urgent check-up', time: '16:40', status: 'New' }
        },
        auto: {
          time: [10, 18],
          msgs: [
            ['u', 'Hello! How much is an oil and filter change?'],
            ['b', 'Hi! Roughly 900–1500 UAH including labor, depending on the car and the oil. The mechanic will confirm the exact amount.'],
            ['u', 'Can I book for Saturday?'],
            ['b', 'Yes! On Saturday we have 10:00, 12:30 and 15:00. What is your car model?'],
            ['u', 'Skoda Octavia, 12:30'],
            ['b', 'Done: Saturday, 12:30, Skoda Octavia. I will remind you about the next oil change in 10,000 km.']
          ],
          hints: [
            { q: 'How much is a suspension check?', a: 'Roughly 400–700 UAH. The mechanic will confirm the exact amount.' },
            { q: 'Any free slots?', a: 'On Monday at 9:00 and 11:30. We are closed on Sunday. Shall I book you?' },
            { q: 'Call a person', a: 'Of course. I am passing the chat to the administrator, who will reply shortly.' }
          ],
          owner: { day: 'Saturday', service: 'Oil change · Skoda Octavia', time: '12:30', status: 'New' }
        }
      },
      leads: {
        intro: 'A customer writes in a messenger. The agent reads the message and creates a lead.',
        from: 'Customer · Telegram', msg: 'I want an oil change on Saturday, Skoda, +380…', btn: 'Show',
        cols: ['Name', 'Service', 'Time', 'Status'], row: ['Oleh', 'Oil change', 'Saturday', 'new'],
        toast: 'Telegram: new lead'
      },
      winback: {
        intro: 'The agent notices a customer has not visited in a while and writes first.', btn: 'Show reminder', to: 'Message to the customer',
        msg: 'Hello, Oleh! This is AutoDim. It has been 6 months since the last oil change on your Skoda Octavia. Shall we book you this week? We have a free slot tomorrow at 11:00 and 15:00.',
        cta: 'Book', done: 'Example: the customer tapped “Book”. In real use the lead would arrive in your Telegram.'
      },
      analyst: {
        intro: 'The agent collects leads from messengers and sheets and prepares this overview every week.', btn: 'Show weekly report',
        title: 'The week in numbers', period: 'A fictional week, auto service',
        kpis: [['Inquiries', 48], ['Bookings', 31], ['Night inquiries', 7]],
        daysTitle: 'Inquiries by day', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], dayVals: [6, 8, 7, 9, 10, 5, 3],
        hoursTitle: 'Peak hours', hours: ['00–06', '06–10', '10–14', '14–18', '18–22', '22–24'], hourVals: [3, 4, 7, 9, 19, 6],
        svcTitle: 'Most popular services', svc: [['Oil change', 18], ['Suspension check', 11], ['Tire fitting', 9], ['Brakes', 6], ['Other', 4]],
        chTitle: 'Where inquiries come from', ch: [['Telegram', 28], ['Website', 20]],
        notesTitle: 'Takeaways',
        notes: [
          'Most inquiries come in the evening, so a fast reply at that time matters most.',
          'Oil changes are requested most often: it is worth reminding customers about the next one.',
          'Some inquiries arrive at night: without a fast reply they are easy to lose.'
        ]
      },
      collector: {
        intro: 'The agent collects public information about businesses in your niche.',
        label: 'Niche and city (optional)', ph: 'For example: auto services, Lviv', btn: 'Find',
        resTitle: 'Example result', resFor: 'Query', any: 'any niche',
        cols: ['Business', 'What is missing'],
        rows: [
          ['Auto service “Sample 1”', 'online booking'],
          ['Studio “Sample 2”', 'fast replies in messengers'],
          ['Clinic “Sample 3”', 'online booking and fast replies'],
          ['Barbershop “Sample 4”', 'replies in the evening and on weekends'],
          ['Salon “Sample 5”', 'online booking']
        ],
        note: 'The names are fictional.'
      },
      publisher: {
        intro: 'The agent suggests where to post and proposes the text.',
        label: 'Industry', platformsTitle: 'Platforms', adTitle: 'Listing text',
        platforms: ['City group', 'Service directory', 'Local chat'],
        ads: {
          beauty: 'Gel manicure in your area. Free slots this week, book in a messenger.',
          dental: 'A dental clinic nearby: check-ups, cleaning, treatment. Book in a messenger, we reply fast.',
          auto: 'Auto service: oil change, suspension check. Book a convenient time in a messenger.'
        }
      }
    }
  };

  /* ---------- helpers ---------- */
  const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const wait = ms => new Promise(r => setTimeout(r, ms));
  function el(tag, cls, text, attrs) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    if (attrs) for (const k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }
  const pad = n => String(n).padStart(2, '0');
  const TG_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path fill="currentColor" d="M21 3 3 10.500l6 2.200 2.200 6 2.800-4.200 4.500 3.500L21 3Z"/></svg>';

  /* ---------- state ---------- */
  let lang = document.documentElement.lang === 'en' ? 'en' : 'uk';
  const state = { agent: 'admin', niche: 'beauty', pub: 'beauty', shown: {}, query: '' };
  let mount, tabsEl, panelEl, inView = false, started = false;
  let run = 0;                       // cancels running scenarios
  let chat = null;                   // refs for the current chat window

  const D = () => DATA[lang];

  /* ---------- build: shell ---------- */
  function build() {
    mount.textContent = '';
    const ui = D().ui;
    const shell = el('div', 'dm-shell');
    tabsEl = el('div', 'dm-rail', null, { role: 'tablist', 'aria-label': ui.tabsLabel, 'aria-orientation': 'vertical' });
    ui.agents.forEach((label, i) => {
      const id = AGENTS[i];
      const b = el('button', 'dm-tab' + (id === state.agent ? ' is-active' : ''), null, {
        type: 'button', role: 'tab', id: 'dm-tab-' + id, 'aria-controls': 'dm-panel',
        'aria-selected': String(id === state.agent), tabindex: id === state.agent ? '0' : '-1'
      });
      b.dataset.agent = id;
      b.append(el('span', 'dm-n', pad(i + 1), { 'aria-hidden': 'true' }), el('span', 'dm-t', label));
      tabsEl.appendChild(b);
    });
    tabsEl.addEventListener('click', e => {
      const b = e.target.closest('.dm-tab'); if (b) selectAgent(b.dataset.agent);
    });
    tabsEl.addEventListener('keydown', e => {
      const tabs = [...tabsEl.children];
      const i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      let n = -1;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = (i + 1) % tabs.length;
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') n = 0;
      else if (e.key === 'End') n = tabs.length - 1;
      if (n < 0) return;
      e.preventDefault();
      tabs[n].focus();
      selectAgent(tabs[n].dataset.agent);
    });
    panelEl = el('div', 'dm-stage', null, { role: 'tabpanel', id: 'dm-panel', tabindex: '-1' });
    shell.append(tabsEl, panelEl);
    mount.append(shell, el('p', 'dm-disclaimer', ui.disclaimer));
    renderPanel();
  }

  function selectAgent(id) {
    if (id === state.agent) return;
    state.agent = id;
    [...tabsEl.children].forEach(b => {
      const on = b.dataset.agent === id;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', String(on));
      b.tabIndex = on ? 0 : -1;
    });
    renderPanel();
    const act = tabsEl.querySelector('.is-active');
    if (act && tabsEl.scrollWidth > tabsEl.clientWidth) tabsEl.scrollTo({ left: act.offsetLeft - 16, behavior: reduced() ? 'auto' : 'smooth' });
  }

  function renderPanel() {
    run++; chat = null;
    panelEl.textContent = '';
    panelEl.setAttribute('aria-labelledby', 'dm-tab-' + state.agent);
    ({ admin: renderAdmin, leads: renderLeads, winback: renderWinback, analyst: renderAnalyst, collector: renderCollector, publisher: renderPublisher })[state.agent]();
  }

  const badge = () => el('span', 'dm-badge', D().ui.example);
  const icon = (name, size) => el('img', 'dm-ic', null, { src: 'assets/icons/' + name + '.svg', alt: '', width: size || 22, height: size || 22, 'aria-hidden': 'true' });

  /* stage header: agent name, one line about it, the "Example" badge */
  function head(text) {
    const i = AGENTS.indexOf(state.agent);
    const h = el('header', 'dm-sh');
    const t = el('div');
    t.append(el('h3', 'dm-sh-t', D().ui.agents[i]), el('p', null, text));
    h.append(t, badge());
    panelEl.appendChild(h);
  }

  /* two columns: the "act" side (what happens) and the "out" side (what the owner gets) */
  function split(wide) {
    const s = el('div', 'dm-split' + (wide ? ' is-wide' : ''));
    const act = el('div', 'dm-act');
    const out = el('div', 'dm-out', null, { 'aria-live': 'polite' });
    s.append(act, out);
    panelEl.appendChild(s);
    return { act, out };
  }
  function ghost(out, n) {
    out.textContent = '';
    out.classList.remove('is-on');
    const g = el('div', 'dm-ghost', null, { 'aria-hidden': 'true' });
    for (let i = 0; i < (n || 4); i++) g.appendChild(el('i'));
    out.appendChild(g);
  }
  function fill(out, ...nodes) {
    out.textContent = '';
    out.append(...nodes);
    out.classList.add('is-on');
  }
  const notif = (title, body, time) => {
    const n = el('div', 'dm-notif');
    const t = el('div', 'dm-notif-t');
    t.append(el('b', null, title), time ? el('time', null, time) : '');
    const c = el('div', 'dm-notif-c');
    c.append(t, el('p', null, body));
    n.append(icon('telegram', 40), c);
    return n;
  };

  /* ---------- 1. AI receptionist ---------- */
  function renderAdmin() {
    const ui = D().ui;
    head(ui.adminIntro);
    const wrap = el('div', 'dm-split dm-admin');

    /* left: niche switch, phone, replay */
    const left = el('div', 'dm-left');
    const niches = el('div', 'dm-seg', null, { role: 'group', 'aria-label': ui.nichesLabel });
    NICHES.forEach(n => {
      const b = el('button', 'dm-pill' + (n === state.niche ? ' is-active' : ''), ui.niches[n], { type: 'button', 'aria-pressed': String(n === state.niche) });
      b.dataset.niche = n;
      niches.appendChild(b);
    });
    niches.addEventListener('click', e => {
      const b = e.target.closest('.dm-pill'); if (!b || b.dataset.niche === state.niche) return;
      state.niche = b.dataset.niche;
      [...niches.children].forEach(x => { const on = x === b; x.classList.toggle('is-active', on); x.setAttribute('aria-pressed', String(on)); });
      startChat();
    });

    const phone = el('div', 'dm-phone');
    const win = el('div', 'dm-win', null, { 'aria-label': ui.chatLabel, role: 'group' });
    const top = el('div', 'dm-win-top');
    const av = el('div', 'dm-av', 'AI', { 'aria-hidden': 'true' });
    const who = el('div');
    who.append(el('b', null, ui.agentName), el('small', null, ui.online));
    top.append(av, who);
    const log = el('div', 'dm-log', null, { role: 'log', 'aria-live': 'polite', tabindex: '0', 'aria-label': ui.chatLabel });
    const hints = el('div', 'dm-hints', null, { role: 'group', 'aria-label': ui.hintsLabel });
    win.append(top, log, hints);
    phone.appendChild(win);
    const runBtn = el('button', 'dm-run', ui.run, { type: 'button' });
    runBtn.addEventListener('click', startChat);
    hints.appendChild(runBtn);
    left.append(niches, phone);

    /* right: what the owner gets */
    const right = el('div', 'dm-right');
    right.appendChild(el('h4', 'dm-h4', ui.owner));
    const ownerBox = el('div', 'dm-owner');
    const cards = el('div', 'dm-cards');
    ownerBox.appendChild(cards);
    right.appendChild(ownerBox);

    const tg = el('div', 'dm-tg');
    const link = el('a', 'btn dm-tg-btn', null, { href: '#contact' });
    link.innerHTML = TG_ICON;
    link.appendChild(el('span', null, ui.tgBtn));
    if (TG_DEMO_BOT_URL.indexOf('<<') === -1) {
      link.href = TG_DEMO_BOT_URL; link.target = '_blank'; link.rel = 'noopener';
    }
    tg.append(link, el('p', 'dm-small', ui.tgNote));
    right.appendChild(tg);

    wrap.append(left, right);
    panelEl.appendChild(wrap);
    chat = { log, runBtn, hints, ownerBox, cards, clock: 0, typing: null };
    if (inView || started) startChat(); else setIdle();
  }

  function setIdle() {
    if (!chat) return;
    chat.log.textContent = '';
    chat.runBtn.textContent = D().ui.run;
    chat.runBtn.style.visibility = 'visible';
    clearHints();
    chat.cards.textContent = '';
    chat.ownerBox.classList.remove('is-on');
    ownerGhost();
  }
  function clearHints() { [...chat.hints.querySelectorAll('.dm-hint')].forEach(x => x.remove()); }
  function ownerGhost() {
    chat.cards.textContent = '';
    for (let i = 0; i < 2; i++) {
      const g = el('div', 'dm-card dm-ghost-card', null, { 'aria-hidden': 'true' });
      g.append(el('i'), el('i'));
      chat.cards.appendChild(g);
    }
  }

  function fmtTime() { const c = chat.clock++; return pad(Math.floor(c / 60) % 24) + ':' + pad(c % 60); }

  function addMsg(role, text) {
    const row = el('div', 'dm-row ' + role);
    const bub = el('div', 'dm-msg');
    bub.append(el('span', null, text), el('time', null, fmtTime()));
    row.appendChild(bub);
    chat.log.appendChild(row);
    chat.log.scrollTop = chat.log.scrollHeight;
  }
  function showTyping() {
    const row = el('div', 'dm-row b', null, { 'aria-hidden': 'true' });
    const d = el('div', 'dm-msg dm-typing'); d.innerHTML = '<i></i><i></i><i></i>';
    row.appendChild(d);
    chat.log.appendChild(row);
    chat.log.scrollTop = chat.log.scrollHeight;
    chat.typing = row;
  }
  function hideTyping() { if (chat && chat.typing) { chat.typing.remove(); chat.typing = null; } }
  const readDelay = text => Math.max(800, Math.min(1500, 700 + text.length * 7));

  async function say(my, role, text) {
    if (reduced()) { addMsg(role, text); return true; }
    if (role === 'u') {
      await wait(readDelay(text)); if (my !== run) return false;
      addMsg('u', text);
    } else {
      await wait(350); if (my !== run) return false;
      showTyping();
      await wait(readDelay(text)); if (my !== run) return false;
      hideTyping(); addMsg('b', text);
    }
    return true;
  }

  async function startChat() {
    if (!chat) return;
    const my = ++run;
    started = true;
    const sc = D().scenarios[state.niche];
    chat.log.textContent = ''; chat.typing = null;
    clearHints();
    chat.ownerBox.classList.remove('is-on');
    ownerGhost();
    chat.runBtn.style.visibility = 'hidden';
    chat.clock = sc.time[0] * 60 + sc.time[1];
    for (const [role, text] of sc.msgs) {
      if (!(await say(my, role, text))) return;
    }
    finishChat(sc);
  }

  function finishChat(sc) {
    const ui = D().ui;
    chat.runBtn.textContent = ui.replay;
    chat.runBtn.style.visibility = 'visible';

    sc.hints.forEach(h => {
      const b = el('button', 'dm-hint', h.q, { type: 'button' });
      b.addEventListener('click', async () => {
        if (b.disabled) return;
        const my = ++run;
        b.disabled = true;
        chat.runBtn.style.visibility = 'hidden';
        [...chat.hints.querySelectorAll('.dm-hint')].forEach(x => { x.disabled = true; });
        if (await say(my, 'u', h.q) && await say(my, 'b', h.a)) {
          [...chat.hints.querySelectorAll('.dm-hint')].forEach(x => { x.disabled = x.dataset.used === '1' || x === b; });
          b.dataset.used = '1';
          chat.runBtn.style.visibility = 'visible';
        }
      });
      chat.hints.insertBefore(b, chat.runBtn);
    });

    const o = sc.owner;
    const tg = el('div', 'dm-card');
    tg.appendChild(notif('whynot.ai', ui.newLead + ': ' + o.service + ' · ' + o.day + ', ' + o.time, ui.now));
    const sh = el('div', 'dm-card');
    const hh = el('div', 'dm-card-h');
    hh.append(icon('google-sheets', 22), el('b', null, ui.sheetCard));
    const tbl = el('div', 'dm-table-wrap');
    tbl.appendChild(table(ui.cols, [[o.day, o.service, o.time, o.status]], true));
    sh.append(hh, tbl);
    chat.cards.textContent = '';
    chat.cards.append(tg, sh);
    chat.ownerBox.classList.add('is-on');
  }

  function table(cols, rows, hot) {
    const t = el('table', 'dm-table');
    const thead = el('thead'); const hr = el('tr');
    cols.forEach(c => hr.appendChild(el('th', null, c, { scope: 'col' })));
    thead.appendChild(hr); t.appendChild(thead);
    const tb = el('tbody');
    rows.forEach(r => { const tr = el('tr', hot ? 'is-new' : ''); r.forEach(c => tr.appendChild(el('td', null, c))); tb.appendChild(tr); });
    t.appendChild(tb);
    return t;
  }

  /* ---------- 2. Leads agent ---------- */
  function renderLeads() {
    const d = D().leads;
    head(d.intro);
    const { act, out } = split();
    const card = el('div', 'dm-mini');
    card.append(el('div', 'dm-mini-h', d.from), el('div', 'dm-bubble u', d.msg));
    const btn = el('button', 'dm-run', D().ui.show, { type: 'button' });
    act.append(card, btn);
    ghost(out, 4);
    const draw = () => {
      const w = el('div', 'dm-card');
      const h = el('div', 'dm-card-h'); h.append(icon('google-sheets', 22), el('b', null, D().ui.sheetCard));
      const tw = el('div', 'dm-table-wrap'); tw.appendChild(table(d.cols, [d.row], true));
      w.append(h, tw);
      const n = el('div', 'dm-card'); n.appendChild(notif('Telegram', d.toast, D().ui.now));
      fill(out, n, w);
    };
    btn.addEventListener('click', () => { state.shown.leads = true; draw(); });
    if (state.shown.leads) draw();
  }

  /* ---------- 3. Win-back agent ---------- */
  function renderWinback() {
    const d = D().winback;
    head(d.intro);
    const { act, out } = split();
    const btn = el('button', 'dm-run', d.btn, { type: 'button' });
    act.appendChild(btn);
    ghost(out, 5);
    const draw = () => {
      const card = el('div', 'dm-mini');
      card.append(el('div', 'dm-mini-h', d.to), el('div', 'dm-bubble b', d.msg));
      const cta = el('button', 'dm-hint dm-cta', d.cta, { type: 'button' });
      const done = el('p', 'dm-small', state.shown.winbackDone ? d.done : '');
      cta.addEventListener('click', () => { done.textContent = d.done; state.shown.winbackDone = true; });
      card.append(cta, done);
      fill(out, card);
    };
    btn.addEventListener('click', () => { state.shown.winback = true; draw(); });
    if (state.shown.winback) draw();
  }

  /* ---------- 4. Analyst ---------- */
  function renderAnalyst() {
    const d = D().analyst;
    head(d.intro);
    const { act, out } = split(true);
    const btn = el('button', 'dm-run', d.btn, { type: 'button' });
    act.appendChild(btn);
    ghost(out, 5);

    const panel = (title, cls) => { const c = el('section', 'dm-card ' + (cls || '')); c.appendChild(el('h4', 'dm-h4', title)); return c; };
    const cols = (labels, vals) => {
      const max = Math.max(...vals);
      const w = el('div', 'dm-cols', null, { role: 'img', 'aria-label': labels.map((l, i) => l + ': ' + vals[i]).join(', ') });
      labels.forEach((l, i) => {
        const c = el('div', 'dm-col' + (vals[i] === max ? ' is-peak' : ''));
        const tr = el('div', 'dm-track', null, { 'aria-hidden': 'true' });
        const b = el('i', 'dm-fill'); b.style.setProperty('--h', (vals[i] / max * 100).toFixed(1) + '%'); b.style.setProperty('--i', i);
        tr.appendChild(b);
        c.append(el('span', 'dm-val', vals[i]), tr, el('span', 'dm-lbl', l));
        w.appendChild(c);
      });
      return w;
    };
    const hbars = (rows) => {
      const max = Math.max(...rows.map(r => r[1]));
      const w = el('div', 'dm-hbars');
      rows.forEach(([l, v], i) => {
        const r = el('div', 'dm-hbar');
        const t = el('div', 'dm-htrack', null, { 'aria-hidden': 'true' });
        const f = el('i', 'dm-hfill'); f.style.setProperty('--w', (v / max * 100).toFixed(1) + '%'); f.style.setProperty('--i', i);
        t.appendChild(f);
        r.append(el('span', 'dm-hl', l), t, el('b', null, v));
        w.appendChild(r);
      });
      return w;
    };

    const draw = () => {
      const dash = el('div', 'dm-dash');
      const kp = el('div', 'dm-kpis');
      d.kpis.forEach(([l, v]) => { const k = el('div', 'dm-kpi'); k.append(el('b', null, v), el('span', null, l)); kp.appendChild(k); });
      const days = panel(d.daysTitle); days.appendChild(cols(d.days, d.dayVals));
      const hrs = panel(d.hoursTitle); hrs.appendChild(cols(d.hours, d.hourVals));
      const svc = panel(d.svcTitle); svc.appendChild(hbars(d.svc));
      const chn = panel(d.chTitle); chn.appendChild(hbars(d.ch));
      const notes = panel(d.notesTitle, 'dm-wide');
      const ul = el('ul', 'dm-notes'); d.notes.forEach(n => ul.appendChild(el('li', null, n))); notes.appendChild(ul);
      const grid = el('div', 'dm-dgrid');
      grid.append(days, hrs, svc, chn, notes);
      dash.append(el('p', 'dm-small dm-period', d.period), kp, grid);
      fill(out, dash);
      requestAnimationFrame(() => requestAnimationFrame(() => dash.classList.add('is-grown')));
    };
    btn.addEventListener('click', () => { state.shown.analyst = true; draw(); });
    if (state.shown.analyst) draw();
  }

  /* ---------- 5. Data collection agent ---------- */
  function renderCollector() {
    const d = D().collector;
    head(d.intro);
    const { act, out } = split();
    const form = el('form', 'dm-form'); form.noValidate = true;
    const inp = el('input', 'dm-input', null, { id: 'dm-q', type: 'text', placeholder: d.ph, maxlength: '60', autocomplete: 'off' });
    inp.value = state.query;
    const btn = el('button', 'dm-run', d.btn, { type: 'submit' });
    form.append(el('label', null, d.label, { for: 'dm-q' }), inp, btn);
    act.appendChild(form);
    ghost(out, 5);
    const draw = () => {
      const q = state.query.trim() || d.any;
      const card = el('div', 'dm-card');
      card.append(el('p', 'dm-small dm-q', d.resFor + ': ' + q));
      const w = el('div', 'dm-table-wrap'); w.appendChild(table(d.cols, d.rows));
      card.append(w, el('p', 'dm-small', d.note));
      fill(out, card);
    };
    form.addEventListener('submit', e => { e.preventDefault(); state.query = inp.value; state.shown.collector = true; draw(); });
    if (state.shown.collector) draw();
  }

  /* ---------- 6. Publishing agent ---------- */
  function renderPublisher() {
    const d = D().publisher;
    head(d.intro);
    const { act, out } = split();
    const form = el('div', 'dm-form');
    const sel = el('select', 'dm-input', null, { id: 'dm-pub' });
    NICHES.forEach(n => { const o = el('option', null, D().ui.niches[n], { value: n }); if (n === state.pub) o.selected = true; sel.appendChild(o); });
    form.append(el('label', null, d.label, { for: 'dm-pub' }), sel);
    act.appendChild(form);
    const draw = () => {
      const card = el('div', 'dm-card');
      card.appendChild(el('h4', 'dm-h4', d.platformsTitle));
      const ul = el('ul', 'dm-chips');
      d.platforms.forEach(p => ul.appendChild(el('li', null, p)));
      card.append(ul, el('h4', 'dm-h4', d.adTitle), el('p', 'dm-ad', d.ads[state.pub]));
      fill(out, card);
    };
    sel.addEventListener('change', () => { state.pub = sel.value; draw(); });
    draw();
  }

  /* ---------- public API ---------- */
  function init() {
    mount = document.getElementById('demo-app');
    if (!mount) return;
    build();
    const sec = document.getElementById('demo');
    if ('IntersectionObserver' in window && sec) {
      new IntersectionObserver((es, ob) => {
        if (es.some(x => x.isIntersecting)) {
          inView = true; ob.disconnect();
          if (state.agent === 'admin' && !started) startChat();
        }
      }, { threshold: 0.3 }).observe(sec);
    } else { inView = true; if (!started) startChat(); }
  }

  function setLang(next) {
    if (next !== 'uk' && next !== 'en') return;
    lang = next;
    if (!mount) return;
    build();
  }

  window.WNDemo = { init, setLang };
})();
