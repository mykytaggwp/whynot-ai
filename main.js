(() => {
  'use strict';
  const root = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------- i18n ---------- */
  const I18N = {
    uk: {
      'nav.how': 'Як це працює', 'nav.features': 'Можливості', 'nav.pricing': 'Тарифи', 'nav.faq': 'FAQ', 'nav.cta': 'Заявка',
      'hero.badge': 'AI-автоматизація для малого бізнесу',
      'hero.title': 'Адміністратор, який <em>ніколи не спить</em>',
      'hero.sub': 'ШІ відповідає клієнтам 24/7, називає орієнтовні ціни, записує на послугу і передає заявку вам. Працює у Telegram, на сайті та в месенджерах.',
      'hero.cta': 'Залишити заявку', 'hero.cta2': 'Побачити в дії',
      'unit.sec': ' сек',
      'float.1': 'Запис на завтра, 14:30', 'float.2': 'Нова заявка в Telegram', 'float.3': 'Нагадування клієнту надіслано',
      'problem.title': 'Кожне пропущене повідомлення — це <em>втрачений клієнт</em>',
      'problem.sub': 'Люди пишуть увечері та на вихідних, а відповідь чекають одразу. Той, хто відповів першим, отримує запис.',
      'problem.s1': 'доступність: відповідаємо вночі, у вихідні та свята',
      'problem.s2': 'на першу відповідь клієнту',
      'problem.s3': 'звернень отримують відповідь',
      'how.title': 'Як це працює',
      'how.sub': 'Чотири прості кроки. Без складних інтеграцій і навчання персоналу.',
      'how.s1t': 'Знайомимось з бізнесом', 'how.s1': 'Збираємо послуги, ціни, графік і правила спілкування у вашому стилі.',
      'how.s2t': 'Налаштовуємо ШІ-адміністратора', 'how.s2': 'Бот вивчає ваші дані та говорить від імені вашого бренду.',
      'how.s3t': 'Бот спілкується з клієнтами', 'how.s3': 'Відповідає на питання, підказує ціни та записує на зручний час.',
      'how.s4t': 'Ви отримуєте заявки', 'how.s4': 'Кожен запис миттєво приходить вам у Telegram і в таблицю. Нагадування повертають клієнтів.',
      'feat.title': 'Усе, що робить хороший адміністратор',
      'feat.1t': 'Відповіді 24/7', 'feat.1': 'Миттєво реагує у будь-який час, навіть коли ви зайняті або відпочиваєте.',
      'feat.2t': 'Запис на послугу', 'feat.2': 'Уточнює деталі, пропонує час і фіксує запис без вашої участі.',
      'feat.3t': 'Ваш стиль спілкування', 'feat.3': 'Розмовляє українською та англійською, у тоні вашого бренду.',
      'feat.4t': 'Нагадування клієнтам', 'feat.4': 'Нагадує про повторний візит і повертає клієнтів, які про вас забули.',
      'feat.5t': 'Орієнтовні ціни', 'feat.5': 'Називає вилку цін за вашим прайсом. Остаточну суму узгоджуєте ви.',
      'feat.6t': 'Заявки власнику', 'feat.6': 'Кожне звернення потрапляє вам у Telegram та Google Таблицю.',
      'aud.title': 'Підходить будь-якому бізнесу, де клієнти пишуть',
      'aud.crew': 'Команда ШІ-агентів, яка не втомлюється',
      'demo.title': 'Подивіться, як це виглядає', 'demo.sub': 'Оберіть сферу та подивіться, як бот спілкується з клієнтом.',
      'demo.t1': 'Відповідає за секунди', 'demo.t2': 'Не вигадує зайвого й не ставить діагнози', 'demo.t3': 'Передає людині, коли потрібно',
      'demo.online': 'онлайн',
      'price.title': 'Прозорі тарифи', 'price.sub': 'Остаточна вартість залежить від задач, ми одразу все озвучимо.',
      'price.from': 'від', 'price.mo': ' / міс', 'price.custom': 'Індивідуально', 'price.hot': 'Популярний', 'price.cta': 'Обрати',
      'price.p1': 'Старт', 'price.p1a': 'Один канал (Telegram або сайт)', 'price.p1b': 'Відповіді на питання', 'price.p1c': 'Заявки в таблицю',
      'price.p2': 'Бізнес', 'price.p2a': 'До 3 каналів', 'price.p2b': 'Запис на послуги', 'price.p2c': 'Нагадування клієнтам', 'price.p2d': 'Заявки в Telegram',
      'price.p3': 'Під ключ', 'price.p3a': 'Кастомні сценарії', 'price.p3b': 'Інтеграція з вашими системами', 'price.p3c': 'Підтримка та розвиток',
      'faq.title': 'Часті запитання',
      'faq.q1': 'Бот замінить моїх співробітників?', 'faq.a1': 'Ні. Він бере на себе рутину: відповіді на типові питання та запис. Складні випадки передає вам.',
      'faq.q2': 'Скільки часу займає запуск?', 'faq.a2': 'Зазвичай кілька днів: залежить від кількості послуг і каналів.',
      'faq.q3': 'Чи правильно бот називає ціни?', 'faq.a3': 'Він називає орієнтовну вилку за вашим прайсом і ніколи не обіцяє остаточну суму.',
      'faq.q4': 'У яких месенджерах це працює?', 'faq.a4': 'Telegram і сайт підключаємо одразу. Viber та Instagram потребують окремого підключення.',
      'faq.q5': 'Що з даними моїх клієнтів?', 'faq.a5': 'Заявки надходять тільки вам. Ми не передаємо дані третім особам.',
      'form.title': 'Обговоримо ваш бізнес?', 'form.sub': 'Залиште контакт, і ми підкажемо, як ШІ-адміністратор допоможе саме вам.',
      'form.name': "Ім'я", 'form.contact': 'Контакт', 'form.contact_ph': 'Telegram, телефон або email',
      'form.biz': 'Сфера бізнесу', 'form.biz_ph': 'Оберіть сферу', 'form.msg': 'Повідомлення (необов\'язково)',
      'form.send': 'Залишити заявку', 'form.ok': 'Дякуємо! Ми скоро зв\'яжемося з вами.', 'form.err': 'Заповніть обов\'язкові поля.',
      'biz.beauty': 'Салон краси / б\'юті', 'biz.auto': 'Автосервіс', 'biz.med': 'Клініка / медицина', 'biz.shop': 'Магазин / сервіс', 'biz.edu': 'Освіта / курси', 'biz.other': 'Інше',
      'foot.text': 'AI-автоматизація для малого бізнесу.',
      'chips': ['Салони краси', 'Автосервіси', 'Стоматології', 'Барбершопи', 'Фітнес-студії', 'Клініки', 'Школи та курси', 'Юристи', 'Інтернет-магазини', 'Ремонт техніки', 'Турагентства', 'Фотостудії'],
      'topic.beauty': 'Манікюр', 'topic.dental': 'Стоматологія', 'topic.auto': 'Автосервіс',
      'chats': {
        beauty: [
          ['user', 'Добрий вечір! Скільки коштує манікюр із покриттям?'],
          ['bot', 'Вітаю! Орієнтовно 600–800 грн, залежно від дизайну. Остаточну ціну назве майстер.'],
          ['user', 'А на завтра є вільний час?'],
          ['bot', 'Так! Завтра є 11:00, 14:30 та 17:00. Який зручний?'],
          ['user', '14:30'],
          ['bot', 'Готово! Ви записані на завтра о 14:30 ✅ Надішлю нагадування за годину.']
        ],
        dental: [
          ['user', 'Доброго дня! Скільки коштує професійна чистка зубів?'],
          ['bot', 'Вітаю! Орієнтовно 1200–1800 грн, залежно від складності. Точну суму назве лікар на огляді.'],
          ['user', 'Ще болить зуб другий день. Можна сьогодні?'],
          ['bot', 'Розумію. Я не ставлю діагнози, але можу записати на терміновий огляд. Є сьогодні 16:40.'],
          ['user', 'Так, на 16:40'],
          ['bot', 'Готово! Ви записані на сьогодні о 16:40 ✅ Адміністратор клініки вже отримав заявку.']
        ],
        auto: [
          ['user', 'Добрий день! Скільки коштує заміна масла і фільтра?'],
          ['bot', 'Вітаю! Орієнтовно 900–1500 грн з роботою, залежно від авто та масла. Точну суму назве майстер.'],
          ['user', 'А на суботу можна записатись?'],
          ['bot', 'Так! У суботу є 10:00, 12:30 та 15:00. Яка марка авто?'],
          ['user', 'Skoda Octavia, 12:30'],
          ['bot', 'Готово: субота, 12:30, Skoda Octavia ✅ Нагадаю про наступну заміну масла через 10 000 км.']
        ]
      }
    },
    en: {
      'nav.how': 'How it works', 'nav.features': 'Features', 'nav.pricing': 'Pricing', 'nav.faq': 'FAQ', 'nav.cta': 'Get started',
      'hero.badge': 'AI automation for small business',
      'hero.title': 'The receptionist that <em>never sleeps</em>',
      'hero.sub': 'AI answers your customers 24/7, quotes approximate prices, books appointments and sends the lead to you. Works in Telegram, on your site and in messengers.',
      'hero.cta': 'Request a demo', 'hero.cta2': 'See it in action',
      'unit.sec': ' sec',
      'float.1': 'Booked for tomorrow, 14:30', 'float.2': 'New lead in Telegram', 'float.3': 'Reminder sent to customer',
      'problem.title': 'Every missed message is a <em>lost customer</em>',
      'problem.sub': 'People write in the evenings and on weekends and expect an instant reply. Whoever answers first gets the booking.',
      'problem.s1': 'availability: we reply at night, on weekends and holidays',
      'problem.s2': 'to the first reply',
      'problem.s3': 'of inquiries get an answer',
      'how.title': 'How it works',
      'how.sub': 'Four simple steps. No complex integrations or staff training.',
      'how.s1t': 'We learn your business', 'how.s1': 'We collect services, prices, schedule and tone of voice.',
      'how.s2t': 'We set up your AI receptionist', 'how.s2': 'The bot learns your data and speaks on behalf of your brand.',
      'how.s3t': 'The bot talks to customers', 'how.s3': 'Answers questions, quotes prices and books a convenient time.',
      'how.s4t': 'You receive the leads', 'how.s4': 'Every booking lands in your Telegram and spreadsheet instantly. Reminders bring customers back.',
      'feat.title': 'Everything a great receptionist does',
      'feat.1t': '24/7 replies', 'feat.1': 'Responds instantly at any time, even when you are busy or off.',
      'feat.2t': 'Appointment booking', 'feat.2': 'Clarifies details, offers a time and records the booking on its own.',
      'feat.3t': 'Your tone of voice', 'feat.3': 'Speaks Ukrainian and English in your brand style.',
      'feat.4t': 'Customer reminders', 'feat.4': 'Reminds about the next visit and wins back customers who forgot you.',
      'feat.5t': 'Approximate prices', 'feat.5': 'Quotes a price range from your price list. You agree on the final amount.',
      'feat.6t': 'Leads to the owner', 'feat.6': 'Every inquiry arrives in your Telegram and Google Sheet.',
      'aud.title': 'Fits any business where customers write',
      'aud.crew': 'A team of AI agents that never gets tired',
      'demo.title': 'See how it looks', 'demo.sub': 'Pick an industry and see how the bot talks to a customer.',
      'demo.t1': 'Replies in seconds', 'demo.t2': 'Does not invent facts or diagnose', 'demo.t3': 'Hands over to a human when needed',
      'demo.online': 'online',
      'price.title': 'Simple pricing', 'price.sub': 'Final cost depends on your needs, and we tell you upfront.',
      'price.from': 'from', 'price.mo': ' / mo', 'price.custom': 'Custom', 'price.hot': 'Popular', 'price.cta': 'Choose',
      'price.p1': 'Start', 'price.p1a': 'One channel (Telegram or site)', 'price.p1b': 'Answers to questions', 'price.p1c': 'Leads to a spreadsheet',
      'price.p2': 'Business', 'price.p2a': 'Up to 3 channels', 'price.p2b': 'Appointment booking', 'price.p2c': 'Customer reminders', 'price.p2d': 'Leads to Telegram',
      'price.p3': 'Turnkey', 'price.p3a': 'Custom scenarios', 'price.p3b': 'Integration with your systems', 'price.p3c': 'Support and growth',
      'faq.title': 'Frequently asked questions',
      'faq.q1': 'Will the bot replace my staff?', 'faq.a1': 'No. It handles routine: common questions and booking. Complex cases go to you.',
      'faq.q2': 'How long does launch take?', 'faq.a2': 'Usually a few days, depending on the number of services and channels.',
      'faq.q3': 'Does the bot quote prices correctly?', 'faq.a3': 'It gives an approximate range from your price list and never promises a final amount.',
      'faq.q4': 'Which messengers does it support?', 'faq.a4': 'Telegram and your website right away. Viber and Instagram need separate setup.',
      'faq.q5': 'What about my customers\' data?', 'faq.a5': 'Leads go only to you. We do not share data with third parties.',
      'form.title': "Let's talk about your business", 'form.sub': 'Leave a contact and we will show how an AI receptionist can help you.',
      'form.name': 'Name', 'form.contact': 'Contact', 'form.contact_ph': 'Telegram, phone or email',
      'form.biz': 'Business type', 'form.biz_ph': 'Choose a type', 'form.msg': 'Message (optional)',
      'form.send': 'Request a demo', 'form.ok': 'Thank you! We will contact you soon.', 'form.err': 'Please fill in the required fields.',
      'biz.beauty': 'Beauty salon', 'biz.auto': 'Auto service', 'biz.med': 'Clinic / medical', 'biz.shop': 'Shop / service', 'biz.edu': 'Education / courses', 'biz.other': 'Other',
      'foot.text': 'AI automation for small business.',
      'chips': ['Beauty salons', 'Auto services', 'Dental clinics', 'Barbershops', 'Fitness studios', 'Clinics', 'Schools & courses', 'Law firms', 'Online stores', 'Repair shops', 'Travel agencies', 'Photo studios'],
      'topic.beauty': 'Manicure', 'topic.dental': 'Dental', 'topic.auto': 'Auto service',
      'chats': {
        beauty: [
          ['user', 'Good evening! How much is a manicure with gel polish?'],
          ['bot', 'Hi! Roughly 600–800 UAH depending on design. The master will confirm the final price.'],
          ['user', 'Any free slots tomorrow?'],
          ['bot', 'Yes! Tomorrow at 11:00, 14:30 and 17:00. Which works for you?'],
          ['user', '14:30'],
          ['bot', 'Done! You are booked for tomorrow at 14:30 ✅ I will send a reminder an hour before.']
        ],
        dental: [
          ['user', 'Hello! How much is a professional teeth cleaning?'],
          ['bot', 'Hi! Roughly 1200–1800 UAH depending on complexity. The dentist will confirm the exact amount at the check-up.'],
          ['user', 'My tooth has been aching for two days. Can I come today?'],
          ['bot', 'I understand. I do not diagnose, but I can book an urgent check-up. There is a slot today at 16:40.'],
          ['user', 'Yes, 16:40'],
          ['bot', 'Done! You are booked for today at 16:40 ✅ The clinic administrator has already received your request.']
        ],
        auto: [
          ['user', 'Hello! How much is an oil and filter change?'],
          ['bot', 'Hi! Roughly 900–1500 UAH including labor, depending on the car and the oil. The mechanic will confirm the exact amount.'],
          ['user', 'Can I book for Saturday?'],
          ['bot', 'Yes! On Saturday we have 10:00, 12:30 and 15:00. What is your car model?'],
          ['user', 'Skoda Octavia, 12:30'],
          ['bot', 'Done: Saturday, 12:30, Skoda Octavia ✅ I will remind you about the next oil change in 10,000 km.']
        ]
      }
    }
  };

  let lang = 'uk';
  try {
    const saved = localStorage.getItem('lang');
    if (saved && I18N[saved]) lang = saved;
    else if ((navigator.language || '').toLowerCase().startsWith('en')) lang = 'en';
  } catch (e) {}

  const t = (k) => I18N[lang][k];

  function applyLang(next) {
    lang = next;
    try { localStorage.setItem('lang', lang); } catch (e) {}
    root.lang = lang;
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    $$('.lang button').forEach(b => b.classList.toggle('is-active', b.dataset.lang === lang));
    document.title = lang === 'uk' ? 'whynot.ai — AI-адміністратор для бізнесу' : 'whynot.ai — AI receptionist for business';
    renderChips();
    renderCounters();
    restartChat();
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }

  /* ---------- chips ---------- */
  function renderChips() {
    const track = $('#track');
    const items = t('chips');
    const html = items.map(c => `<span class="chip">${c}</span>`).join('');
    track.innerHTML = html + html;
    if (marqueeTween) marqueeTween.invalidate().restart();
  }

  /* ---------- counters ---------- */
  const counters = $$('.num');
  counters.forEach(el => { el._v = 0; });
  function fmt(el) {
    const pre = el.dataset.pre || '';
    const suf = el.dataset.suffixKey ? t(el.dataset.suffixKey) : (el.dataset.suffix || '');
    el.textContent = pre + Math.round(el._v) + suf;
  }
  function renderCounters() { counters.forEach(fmt); }

  /* ---------- chat demo ---------- */
  const chat = $('#chat');
  let chatTimer = null, chatActive = false, chatInView = false, reduce = false;
  let topic = 'beauty';

  function initTopics() {
    const tabs = $$('.chat-tabs button');
    tabs.forEach(b => b.addEventListener('click', () => {
      topic = b.dataset.topic;
      tabs.forEach(o => {
        const on = o === b;
        o.classList.toggle('is-active', on);
        o.setAttribute('aria-selected', String(on));
      });
      chatInView = true;
      playChat();
    }));
  }

  function bubble(role, text) {
    const d = document.createElement('div');
    d.className = 'msg ' + role;
    d.textContent = text;
    chat.appendChild(d);
    while (chat.children.length > 6) chat.removeChild(chat.firstChild);
    return d;
  }
  function stopChat() {
    if (chatTimer) { chatTimer.kill(); chatTimer = null; }
    chat.innerHTML = '';
  }
  function playChat() {
    stopChat();
    const msgs = t('chats')[topic];
    if (reduce || !window.gsap) { msgs.forEach(([r, x]) => bubble(r, x)); return; }
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3, onRepeat: () => { chat.innerHTML = ''; } });
    msgs.forEach(([role, text]) => {
      if (role === 'bot') {
        tl.add(() => {
          const ty = document.createElement('div');
          ty.className = 'typing'; ty.innerHTML = '<i></i><i></i><i></i>';
          ty.id = 'typing'; chat.appendChild(ty);
        }, '+=0.3');
        tl.add(() => { const ty = $('#typing'); if (ty) ty.remove(); popIn(bubble('bot', text)); }, '+=1.1');
      } else {
        tl.add(() => popIn(bubble('user', text)), '+=0.9');
      }
    });
    chatTimer = tl;
  }
  function popIn(el) {
    gsap.from(el, { y: 14, autoAlpha: 0, scale: .96, duration: .35, ease: 'back.out(1.6)' });
  }
  function restartChat() { if (chatInView || reduce || !window.gsap) playChat(); }

  /* ---------- FAQ ---------- */
  function initFaq() {
    $$('.qa').forEach(qa => {
      const btn = $('button', qa), panel = $('.a', qa);
      btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') === 'true';
        $$('.qa').forEach(o => {
          if (o !== qa && $('button', o).getAttribute('aria-expanded') === 'true') toggle(o, false);
        });
        toggle(qa, !open);
      });
    });
    function toggle(qa, open) {
      const btn = $('button', qa), panel = $('.a', qa);
      btn.setAttribute('aria-expanded', String(open));
      if (window.gsap && !reduce) gsap.to(panel, { height: open ? 'auto' : 0, duration: .4, ease: 'power2.out', onComplete: () => window.ScrollTrigger && ScrollTrigger.refresh() });
      else panel.style.height = open ? 'auto' : '0';
    }
  }

  /* ---------- form (design only: no sending yet) ---------- */
  function initForm() {
    const form = $('#lead-form'), status = $('#form-status');
    form.addEventListener('submit', e => {
      e.preventDefault();
      status.className = 'form-status';
      if (form.website.value) return; // honeypot
      let ok = true;
      ['name', 'contact', 'biz'].forEach(n => {
        const f = form[n];
        const bad = !f.value.trim();
        f.classList.toggle('invalid', bad);
        if (bad) ok = false;
      });
      if (!ok) { status.textContent = t('form.err'); status.classList.add('err'); return; }
      // TODO: send to backend (Google Apps Script) when connected
      status.textContent = t('form.ok'); status.classList.add('ok');
      form.reset();
    });
  }

  /* ---------- GSAP ---------- */
  let marqueeTween = null;

  function initMotion() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: 'power3.out' });
    const mm = gsap.matchMedia();

    mm.add({
      motion: '(prefers-reduced-motion: no-preference)',
      reduced: '(prefers-reduced-motion: reduce)',
      desktop: '(min-width: 1024px)'
    }, ctx => {
      const { motion, desktop } = ctx.conditions;
      reduce = !motion;

      if (!motion) {
        counters.forEach(el => { el._v = +el.dataset.to; fmt(el); });
        gsap.set('.reveal,.card,.plan,.stat,[data-anim="hero"]', { clearProps: 'opacity,visibility,transform' });
        $$('.step').forEach(s => s.classList.add('is-on'));
        $('.steps-fill').style.transform = 'scaleY(1)';
        playChat();
        return;
      }

      // hero intro
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .fromTo('[data-anim="hero"]', { y: 36, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .9, stagger: .12 })
        .from('.scroll-hint', { autoAlpha: 0, duration: .6 }, '-=.3');

      // scroll progress bar
      gsap.to('#progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: .2 } });

      // floating notifications: intro, idle float, mouse parallax
      const floats = $$('.float');
      floats.forEach((f, i) => {
        gsap.fromTo(f, { y: 40, autoAlpha: 0, scale: .9 }, { y: 0, autoAlpha: 1, scale: 1, duration: .9, delay: 1 + i * .25, ease: 'back.out(1.5)',
          onComplete: () => gsap.to(f, { y: i % 2 ? 12 : -12, duration: 2.6 + i * .5, repeat: -1, yoyo: true, ease: 'sine.inOut' }) });
      });
      if (window.matchMedia('(hover: hover)').matches) {
        const setters = floats.map(f => gsap.quickTo(f, 'x', { duration: .8, ease: 'power3.out' }));
        $('.hero').addEventListener('pointermove', e => {
          const nx = e.clientX / innerWidth - .5;
          floats.forEach((f, i) => setters[i](-nx * +f.dataset.depth * 2));
        });
      }

      // ambient orbs
      gsap.to('.orb-1', { x: -60, y: 50, duration: 9, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.orb-2', { x: 70, y: -40, duration: 11, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.grid-bg', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

      // nav background
      ScrollTrigger.create({ start: 40, end: 99999, onToggle: s => $('#nav').classList.toggle('scrolled', s.isActive) });

      // generic reveals
      gsap.utils.toArray('.reveal').forEach(el => {
        if (el.classList.contains('stat')) return;
        gsap.fromTo(el, { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .8, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
      });
      ScrollTrigger.batch('.stat', { start: 'top 88%', once: true, onEnter: b => gsap.fromTo(b, { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: .12, duration: .7 }) });
      ScrollTrigger.batch('.card', { start: 'top 90%', once: true, onEnter: b => gsap.fromTo(b, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: .09, duration: .7 }) });
      ScrollTrigger.batch('.plan', { start: 'top 90%', once: true, onEnter: b => gsap.fromTo(b, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: .12, duration: .8 }) });

      // counters
      counters.forEach(el => {
        const to = +el.dataset.to;
        ScrollTrigger.create({
          trigger: el, start: 'top 90%', once: true,
          onEnter: () => gsap.to(el, { _v: to, duration: 1.6, ease: 'power2.out', onUpdate: () => fmt(el) })
        });
      });

      // marquee
      marqueeTween = gsap.to('#track', { xPercent: -50, duration: 38, ease: 'none', repeat: -1 });
      const mq = $('.marquee');
      mq.addEventListener('mouseenter', () => marqueeTween.timeScale(.2));
      mq.addEventListener('mouseleave', () => marqueeTween.timeScale(1));

      // how: pinned scrub on desktop, simple reveal otherwise
      // AI agent mascots: each one runs its own dance loop, paused while off-screen
      $$('.agent').forEach((el, i) => {
        const q = gsap.utils.selector(el);
        const wave = el.classList.contains('agent-peek');
        const point = el.classList.contains('agent-side');
        const speed = point ? 1 : .9 + (i % 3) * .12;
        const o = (x, y) => ({ svgOrigin: x + ' ' + y });
        const tl = gsap.timeline({ repeat: -1, yoyo: !point, repeatDelay: point ? 1.2 : 0, paused: true, defaults: { duration: .45, ease: 'sine.inOut' } });
        const anims = [tl];
        if (point) {
          // points at the form on the right: raise arm, tap the air, hop twice, lower arm, pause
          tl.fromTo(q('.arm-r'), { rotation: 0, ...o(95, 84) }, { rotation: -95, ...o(95, 84), duration: .5, ease: 'back.out(1.8)' }, 0)
            .to(q('.head'), { rotation: 8, ...o(60, 72), duration: .4 }, 0)
            .to(q('.arm-r'), { rotation: -78, ...o(95, 84), duration: .22, yoyo: true, repeat: 5 }, .6)
            .to(q('.a-body'), { y: -14, duration: .2, yoyo: true, repeat: 3, ease: 'power1.out' }, .6)
            .to(q('.arm-r'), { rotation: 0, ...o(95, 84), duration: .5, ease: 'power2.inOut' }, 2.3)
            .to(q('.head'), { rotation: 0, ...o(60, 72), duration: .4 }, 2.3);
        } else if (wave) {
          tl.fromTo(q('.arm-r'), { rotation: -115, ...o(95, 84) }, { rotation: -165, ...o(95, 84), duration: .3 }, 0)
            .fromTo(q('.head'), { rotation: -4, ...o(60, 72) }, { rotation: 4, ...o(60, 72), duration: .7 }, 0);
        } else {
          tl.fromTo(q('.arm-l'), { rotation: 150, ...o(25, 84) }, { rotation: 20, ...o(25, 84) }, 0)
            .fromTo(q('.arm-r'), { rotation: -20, ...o(95, 84) }, { rotation: -150, ...o(95, 84) }, 0)
            .fromTo(q('.leg-l'), { rotation: 10, ...o(50, 120) }, { rotation: -10, ...o(50, 120) }, 0)
            .fromTo(q('.leg-r'), { rotation: -10, ...o(70, 120) }, { rotation: 10, ...o(70, 120) }, 0)
            .fromTo(q('.head'), { rotation: -6, ...o(60, 72) }, { rotation: 6, ...o(60, 72) }, 0);
          anims.push(gsap.to(q('.a-body'), { y: -8, duration: .225, repeat: -1, yoyo: true, ease: 'sine.inOut', paused: true }));
        }
        anims.push(gsap.timeline({ repeat: -1, repeatDelay: 2.4 + i * .7, paused: true })
          .to(q('.eye'), { scaleY: .1, transformOrigin: '50% 50%', duration: .08, yoyo: true, repeat: 1 }));
        anims.forEach(a => a.timeScale(speed));
        ScrollTrigger.create({
          trigger: el, start: 'top bottom', end: 'bottom top',
          onToggle: s => anims.forEach(a => a.paused(!s.isActive))
        });
      });
      gsap.fromTo('.agent-hero', { y: 80, autoAlpha: 0, scale: .8 }, { y: 0, autoAlpha: 1, scale: 1, duration: 1, delay: 1.4, ease: 'back.out(1.6)' });
      ScrollTrigger.batch('.crew .agent, .agent-peek, .agent-side', {
        start: 'top 92%', once: true,
        onEnter: b => gsap.fromTo(b, { y: 50, autoAlpha: 0, scale: .7 }, { y: 0, autoAlpha: 1, scale: 1, stagger: .15, duration: .8, ease: 'back.out(1.6)' })
      });

      // how: plain vertical timeline, no pinning. Line fills as you scroll, steps light up as they enter.
      gsap.to('.steps-fill', {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: '.timeline', start: 'top 60%', end: 'bottom 60%', scrub: true }
      });
      $$('.step').forEach(s => {
        gsap.fromTo(s, { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .7, scrollTrigger: { trigger: s, start: 'top 90%', once: true } });
        ScrollTrigger.create({
          trigger: s, start: 'top 60%',
          onEnter: () => s.classList.add('is-on'),
          onLeaveBack: () => s.classList.remove('is-on')
        });
      });

      // chat starts when visible
      ScrollTrigger.create({
        trigger: '#demo', start: 'top 70%', end: 'bottom 10%',
        onEnter: () => { chatInView = true; playChat(); },
        onEnterBack: () => { chatInView = true; if (!chatTimer) playChat(); },
        onLeave: () => { chatInView = false; if (chatTimer) chatTimer.pause(); },
        onLeaveBack: () => { chatInView = false; if (chatTimer) chatTimer.pause(); }
      });

      return () => { reduce = false; };
    });
  }

  /* ---------- boot ---------- */
  function boot() {
    $('#year').textContent = new Date().getFullYear();
    const agentTpl = $('#agent-tpl');
    $$('.agent').forEach(el => el.appendChild(agentTpl.content.cloneNode(true)));
    $$('.lang button').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));
    reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    initFaq();
    initForm();
    initTopics();
    // cursor-follow glow on cards
    document.addEventListener('pointermove', e => {
      const el = e.target.closest && e.target.closest('.card,.plan,.stat');
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
    if (window.gsap && window.ScrollTrigger) {
      initMotion();
    } else {
      root.classList.remove('js'); // CDN failed: show everything statically
      $$('.step').forEach(s => s.classList.add('is-on'));
      $('.steps-fill').style.transform = 'scaleY(1)';
      counters.forEach(el => { el._v = +el.dataset.to; });
    }
    applyLang(lang);
    if (window.gsap && window.ScrollTrigger) {
      window.addEventListener('load', () => ScrollTrigger.refresh());
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
    } else {
      playChat();
    }
  }
  boot();
})();
