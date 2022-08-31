import React from "react";
import Companies from "../../component/Companies";
import List from "../../component/List/List";
import UsefullLinks from "../../component/UsefullLinks";
import s from "./Home.module.scss";

const Home = () => {
  const list = [
    {
      id: 1,
      text: "Работаем на рынке более 11 лет. Более 1000 организаций воспользовались нашими услугами!;",
    },
    {
      id: 2,
      text: "Заправляем картриджи на выезде у Заказчика, так и в нашем Сервисном Центре (выезд курьера от 5 картриджей в обе стороны - бесплатно. На время заправки оставляем подменные картриджи, чтобы ваша работа не останавливалась);",
    },
    {
      id: 3,
      text: "Не экономим на качестве, используем расходные материалы высокого качества, ведущих мировых производителей Imex, Tomoegawa, Mitsubishi (Япония), StaticControl (США) и др.;",
    },
    {
      id: 4,
      text: "Наличный и безналичный расчет. Оплата по факту выполненной работы. Гибкие условия оплаты, отсрочка платежа;",
    },
    {
      id: 5,
      text: "Гарантия на выполненные работы. Средний срок выполнения работ - 1 раб. день;",
    },
    {
      id: 6,
      text: "Бесплатная консультация по обслуживанию и работе с офисной техникой, приобретению офисной техники и расходных материалов к ней;",
    },
    { id: 7, text: "+998971 777 65 58  Telegram" },
  ];

  return (
    <div className={s.root}>
      <h1>ЗАПРАВКА КАРТРИДЖЕЙ В ТАШКЕНТЕ</h1>
      <b>
        Заправка картриджей с выездом в офис и на дом по городу Ташкент. Ремонт
        принтеров и обслуживание офисной техники в Ташкенте. Продажа картриджей
        в Ташкенте с доставкой.
      </b>
      <List data={list} />
      <b>Мы работаем для тех, кто ценит качество!</b>
      <h3>ЗАПРАВЛЯМ КАРТРИДЖИ ВЕДУЩИХ ПРОИЗВОДИТЕЛЕЙ</h3>
      <Companies />
      <UsefullLinks />
    </div>
  );
};

export default Home;
