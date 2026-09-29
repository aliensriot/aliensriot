/* aliensriot — bilingual copy dictionary (ru / en)
   Add new strings here with a stable key, then reference them in
   index.html with data-i18n="key" (text) or data-i18n-attr="attr:key"
   (for placeholder / aria-label / etc). */

const I18N = {
  ru: {
    "nav.about": "Обо мне",
    "nav.jewelry": "Украшения",
    "nav.paintings": "Картины",
    "nav.thrift": "only20dollars",
    "nav.digital": "Диджитал",
    "nav.contact": "Контакты",
    "nav.cta": "Написать в Telegram",

    "ticker.text":
      "ручная работа • маленькими партиями • картины • украшения • секонд-хенд • диджитал-товары • only20dollars • aliensriot • ",

    "hero.eyebrow": "здесь живут инопланетяне и делают всякое",
    "hero.title.pre": "вещи, сделанные ",
    "hero.title.em": "руками",
    "hero.title.post": ", а не конвейером",
    "hero.lede":
      "aliensriot: картины, украшения ручной работы и диджитал-товары, и наш эко-проект only20dollars, где старые хорошие вещи получают вторую жизнь. Ниже вся витрина: что посмотреть, что купить и что скачать прямо сейчас.",
    "hero.cta.jewelry": "Смотреть украшения",
    "hero.cta.digital": "Диджитал-товары",
    "hero.tag1": "картины и украшения",
    "hero.tag2": "диджитал-товары",
    "hero.tag3": "only20dollars: секонд-хенд",
    "hero.sticker": "сделано\nвручную",

    "about.kicker": "обо мне",
    "about.title": "aliensriot",
    "about.p1":
      "Я художница и делаю вещи руками: картины, украшения, диджитал-товары и всё, что рождается на стыке рисунка и ремесла. Мне важнее характер вещи, чем её идеальность.",
    "about.p2":
      "Картины и украшения существуют в небольшом количестве или в единственном экземпляре. Диджитал-товары (планеры и календари) можно скачать сразу после оплаты. А в проекте only20dollars мы с друзьями даём вторую жизнь вещам из наших шкафов.",
    "about.fact1": "больше 30 украшений в текущей коллекции",
    "about.fact2": "картины, планеры и календари, каждый в своём формате",
    "about.fact3": "only20dollars: секонд-хенд и эко-аксессуары из вторсырья",

    "about.photo": "фото\naliensriot",

    "jewelry.kicker": "украшения",
    "jewelry.title": "Витрина работ",
    "jewelry.note":
      "Это витрина: купить украшение можно, написав напрямую в Telegram. Здесь показана только часть коллекции.",
    "jewelry.card.photo": "фото\nизделия",
    "jewelry.card1.title": "Кольцо №1",
    "jewelry.card2.title": "Серьги №1",
    "jewelry.card3.title": "Кулон №1",
    "jewelry.card4.title": "Браслет №1",
    "jewelry.card5.title": "Кольцо №2",
    "jewelry.card6.title": "Серьги №2",
    "jewelry.card7.title": "Кулон №2",
    "jewelry.card8.title": "Браслет №2",
    "jewelry.card.tag": "1 экземпляр",
    "jewelry.more.text": "и ещё больше 20 украшений в Telegram",
    "jewelry.more.cta": "Смотреть весь каталог",

    "paintings.kicker": "картины",
    "paintings.title": "Живопись",
    "paintings.note":
      "Оригинальные картины, каждая в единственном экземпляре. Про технику, размер и цену лучше спросить напрямую.",
    "paintings.card.photo": "фото\nкартины",
    "paintings.card.tag": "оригинал",
    "paintings.card1.title": "Картина №1",
    "paintings.card2.title": "Картина №2",
    "paintings.card3.title": "Картина №3",
    "paintings.card4.title": "Картина №4",
    "paintings.more.text": "полный архив работ в творческом канале",
    "paintings.more.cta": "Спросить про картину",

    "thrift.kicker": "эко-проект",
    "thrift.title": "only20dollars",
    "thrift.note":
      "Секонд-хенд: одежда и вещи из наших шкафов и шкафов друзей получают вторую жизнь вместо помойки. Название родом из любви к песне про поход в трифт-шоп, где лучшая находка стоит не дороже двадцати долларов.",
    "thrift.card.photo": "фото\nвещи",
    "thrift.card.tag": "секонд-хенд",
    "thrift.card1.title": "Худи",
    "thrift.card2.title": "Джинсы",
    "thrift.card3.title": "Рубашка",
    "thrift.card4.title": "Аксессуар",
    "thrift.more.text": "весь ассортимент обновляется в Telegram",
    "thrift.more.cta": "Смотреть каталог only20dollars",

    "thrift.eco.kicker": "новая линия",
    "thrift.eco.title": "Эко-аксессуары из пакетов",
    "thrift.eco.note":
      "Кардхолдеры, обложки на паспорт и кошельки, сшитые из вторсырья: старых пакетов, которым иначе была бы одна дорога. Пока готово всего несколько экземпляров, линия только начинается.",
    "thrift.eco.card1.title": "Кардхолдер",
    "thrift.eco.card2.title": "Обложка на паспорт",
    "thrift.eco.card3.title": "Кошелёк",
    "thrift.eco.card.tag": "из вторсырья",
    "thrift.eco.cta": "Спросить про эко-линию",

    "digital.kicker": "диджитал-товары",
    "digital.title": "Скачать и пользоваться",
    "digital.note":
      "Оплата через Продамус, ссылка на скачивание приходит сразу после оплаты.",
    "digital.card.photo": "превью\nтовара",
    "digital.card1.title": "Недельный планер",
    "digital.card1.desc": "PDF-планер на неделю, для печати или планшета.",
    "digital.card2.title": "Календарь на год",
    "digital.card2.desc": "Годовой календарь с иллюстрациями aliensriot.",
    "digital.card3.title": "Набор наклеек для планера",
    "digital.card3.desc": "Диджитал-стикеры для цифрового ежедневника.",
    "digital.buy": "Купить",
    "digital.note.footer":
      "* Кнопки временные, их нужно подключить к настоящей странице оплаты Продамус, когда аккаунт будет создан.",

    "contact.kicker": "контакты",
    "contact.title": "Написать",
    "contact.p":
      "Быстрее всего писать в Telegram. Форма ниже тоже работает и приходит на почту.",
    "contact.tg1.title": "Личный Telegram",
    "contact.tg1.sub": "вопросы, заказы, всё на свете",
    "contact.tg2.title": "Творческий канал",
    "contact.tg2.sub": "новые работы и процесс",
    "contact.tg3.title": "Каталог мерча",
    "contact.tg3.sub": "мерч в Telegram",
    "contact.tg4.title": "only20dollars",
    "contact.tg4.sub": "секонд-хенд и эко-аксессуары",
    "contact.email.title": "Email",
    "contact.email.sub": "для более формальных вопросов",

    "form.name": "Имя",
    "form.email": "Email",
    "form.message": "Сообщение",
    "form.submit": "Отправить",

    "footer.rights": "aliensriot, ручная работа и диджитал-товары",
    "footer.made": "сайт сделан вручную, как и всё остальное",
  },
  en: {
    "nav.about": "About",
    "nav.jewelry": "Jewelry",
    "nav.paintings": "Paintings",
    "nav.thrift": "only20dollars",
    "nav.digital": "Digital",
    "nav.contact": "Contact",
    "nav.cta": "Message on Telegram",

    "ticker.text":
      "handmade • small batches • paintings • jewelry • thrifted • digital goods • only20dollars • aliensriot • ",

    "hero.eyebrow": "aliens live here and they make things",
    "hero.title.pre": "things made by ",
    "hero.title.em": "hand",
    "hero.title.post": ", not a conveyor belt",
    "hero.lede":
      "aliensriot: paintings, handmade jewelry and digital goods, plus our eco project only20dollars, where good old things get a second life. Below is the whole shop: what to look at, what to buy, and what to download right now.",
    "hero.cta.jewelry": "See jewelry",
    "hero.cta.digital": "Digital goods",
    "hero.tag1": "paintings & jewelry",
    "hero.tag2": "digital goods",
    "hero.tag3": "only20dollars: thrifted",
    "hero.sticker": "made\nby hand",

    "about.kicker": "about",
    "about.title": "aliensriot",
    "about.p1":
      "I'm an artist and I make things by hand: paintings, jewelry, digital goods, and whatever lives between drawing and craft. Character matters to me more than perfection.",
    "about.p2":
      "Paintings and jewelry exist in small runs or as one-offs. Digital goods, planners and calendars, download right after payment. And in only20dollars, my friends and I give a second life to things from our own closets.",
    "about.fact1": "30+ pieces of jewelry in the current collection",
    "about.fact2": "paintings, planners and calendars, each in its own format",
    "about.fact3": "only20dollars: thrifted clothes and eco accessories from upcycled materials",

    "about.photo": "aliensriot\nphoto",

    "jewelry.kicker": "jewelry",
    "jewelry.title": "The showcase",
    "jewelry.note":
      "This is a showcase: to buy a piece, message directly on Telegram. Only part of the collection is shown here.",
    "jewelry.card.photo": "item\nphoto",
    "jewelry.card1.title": "Ring No.1",
    "jewelry.card2.title": "Earrings No.1",
    "jewelry.card3.title": "Pendant No.1",
    "jewelry.card4.title": "Bracelet No.1",
    "jewelry.card5.title": "Ring No.2",
    "jewelry.card6.title": "Earrings No.2",
    "jewelry.card7.title": "Pendant No.2",
    "jewelry.card8.title": "Bracelet No.2",
    "jewelry.card.tag": "one of one",
    "jewelry.more.text": "plus 20+ more pieces on Telegram",
    "jewelry.more.cta": "See the full catalog",

    "paintings.kicker": "paintings",
    "paintings.title": "Artwork",
    "paintings.note":
      "Original paintings, each a one-off. Ask directly about technique, size and price.",
    "paintings.card.photo": "painting\nphoto",
    "paintings.card.tag": "original",
    "paintings.card1.title": "Painting No.1",
    "paintings.card2.title": "Painting No.2",
    "paintings.card3.title": "Painting No.3",
    "paintings.card4.title": "Painting No.4",
    "paintings.more.text": "the full archive lives on the creative channel",
    "paintings.more.cta": "Ask about a painting",

    "thrift.kicker": "eco project",
    "thrift.title": "only20dollars",
    "thrift.note":
      "Thrifted clothes and things from our own closets and our friends' get a second life instead of the trash. The name comes from a soft spot for that song about hitting the thrift shop, where the best find never costs more than twenty dollars.",
    "thrift.card.photo": "item\nphoto",
    "thrift.card.tag": "thrifted",
    "thrift.card1.title": "Hoodie",
    "thrift.card2.title": "Jeans",
    "thrift.card3.title": "Shirt",
    "thrift.card4.title": "Accessory",
    "thrift.more.text": "the full stock updates on Telegram",
    "thrift.more.cta": "See the only20dollars catalog",

    "thrift.eco.kicker": "new line",
    "thrift.eco.title": "Eco accessories from plastic bags",
    "thrift.eco.note":
      "Card holders, passport covers and small wallets sewn from upcycled plastic bags that would otherwise end up as trash. Only a few pieces exist so far, the line is just starting.",
    "thrift.eco.card1.title": "Card holder",
    "thrift.eco.card2.title": "Passport cover",
    "thrift.eco.card3.title": "Wallet",
    "thrift.eco.card.tag": "upcycled",
    "thrift.eco.cta": "Ask about the eco line",

    "digital.kicker": "digital goods",
    "digital.title": "Download and use",
    "digital.note":
      "Paid via Продамус (Prodamus); the download link arrives right after payment.",
    "digital.card.photo": "product\npreview",
    "digital.card1.title": "Weekly planner",
    "digital.card1.desc": "A printable or tablet-ready weekly PDF planner.",
    "digital.card2.title": "Yearly calendar",
    "digital.card2.desc": "A full-year calendar illustrated by aliensriot.",
    "digital.card3.title": "Planner sticker pack",
    "digital.card3.desc": "Digital stickers for your digital planner.",
    "digital.buy": "Buy",
    "digital.note.footer":
      "* These buttons are placeholders, wire them to the real Продамус checkout once the account exists.",

    "contact.kicker": "contact",
    "contact.title": "Get in touch",
    "contact.p":
      "Fastest way is Telegram. The form below works too and lands in the inbox.",
    "contact.tg1.title": "Personal Telegram",
    "contact.tg1.sub": "questions, orders, anything",
    "contact.tg2.title": "Creative channel",
    "contact.tg2.sub": "new work and process",
    "contact.tg3.title": "Merch catalog",
    "contact.tg3.sub": "merch on Telegram",
    "contact.tg4.title": "only20dollars",
    "contact.tg4.sub": "thrifted clothes & eco accessories",
    "contact.email.title": "Email",
    "contact.email.sub": "for more formal questions",

    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.submit": "Send",

    "footer.rights": "aliensriot, handmade & digital goods",
    "footer.made": "this site was made by hand too",
  },
};

window.I18N = I18N;
