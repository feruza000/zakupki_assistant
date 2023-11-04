import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs Page - Solid SaaS Boilerplate",
  description: "This is Docs page for Solid Pro",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4"></div>

            <div className="blog container">
              <h2 className="color: rgb(29 78 216) text-3xl font-bold md:text-center">
                О НАШЕЙ СИСТЕМЕ, КАК ПОЛЬЗОВАТЬСЯ
              </h2>
              <div className="bg">
                <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
                  <div
                    className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
                      <img
                        alt="title"
                        loading="lazy"
                        width={36}
                        height={36}
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src="/images/icon/icon-01.svg"
                      />
                    </div>
                    <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                      Регистрация на сайте:
                    </h3>
                    <p>
                      Для начала использования нашего сайта, вам необходимо
                      зарегистрироваться. Для этого перейдите на страницу
                      регистрации и заполните необходимую информацию, включая
                      имя, адрес электронной почты и пароль. После заполнения
                      всех полей, нажмите кнопку "Зарегистрироваться". После
                      этого, вы получите электронное письмо с подтверждением, и
                      после подтверждения вашей почты, вы сможете войти на сайт.
                    </p>
                  </div>
                  <div
                    className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
                      <img
                        alt="title"
                        loading="lazy"
                        width={36}
                        height={36}
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src="/images/icon/icon-02.svg"
                      />
                    </div>
                    <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                      Размещение объявления:
                    </h3>
                    <p>
                      Если у вас есть информация о госзакупках или предложения
                      для других пользователей, вы можете разместить объявление.
                      Для этого войдите в свой аккаунт, перейдите на страницу
                      "Объявления" и нажмите кнопку "Разместить объявление".
                      Заполните необходимую информацию, прикрепите изображения и
                      опубликуйте объявление.
                    </p>
                    llis tortor.
                  </div>
                  <div
                    className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
                      <img
                        alt="title"
                        loading="lazy"
                        width={36}
                        height={36}
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src="/images/icon/icon-03.svg"
                      />
                    </div>
                    <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                      Уведомления:
                    </h3>
                    <p>
                      Наш сайт будет уведомлять вас о новых объявлениях и важных
                      событиях. Убедитесь, что у вас включены уведомления, чтобы
                      не пропустить важную информацию. Вы можете настроить свои
                      предпочтения уведомлений в настройках аккаунта.
                    </p>
                  </div>
                  <div
                    className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
                      <img
                        alt="title"
                        loading="lazy"
                        width={36}
                        height={36}
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src="/images/icon/icon-04.svg"
                      />
                    </div>
                    <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                      Чтение новостей:
                    </h3>
                    <p>
                      На странице "Новости" вы найдете актуальные новости и
                      обновления, связанные с госзакупками и нашим сервисом.
                      Посещайте эту страницу, чтобы быть в курсе всех событий.
                    </p>
                  </div>
                  <div
                    className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
                      <img
                        alt="title"
                        loading="lazy"
                        width={36}
                        height={36}
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src="/images/icon/icon-05.svg"
                      />
                    </div>
                    <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                      Бонусы и реферральная программа:
                    </h3>
                    <p>
                      Мы награждаем активных пользователей бонусами. Участвуйте
                      в активности на сайте, и вы сможете заработать
                      дополнительные бонусы. Кроме того, приглашайте друзей
                      через нашу реферральную программу и получайте бонусы за
                      каждого приглашенного пользователя.
                    </p>
                  </div>
                  <div
                    className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
                      <img
                        alt="title"
                        loading="lazy"
                        width={36}
                        height={36}
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src="/images/icon/icon-06.svg"
                      />
                    </div>
                    <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                      Образовательные разделы:
                    </h3>
                    <p>
                      На нашем сайте есть разделы "Обучение ИП" и
                      "Образовательная школа", где вы можете получить полезные
                      знания и ресурсы, связанные с госзакупками и
                      предпринимательством. Изучайте доступные материалы для
                      вашего профессионального роста.
                    </p>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
