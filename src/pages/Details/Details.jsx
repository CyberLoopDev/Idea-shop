    import './Details.css'
    import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
    const Details = () => {
        return (
            <div className="details">
                <div className="container">
                   <Breadcrumb />
                <h1 className="title">Контакты</h1>

                <p className="paragraph">
                    Разместите на этой странице информацию с контактами вашего интернет-магазина, а также краткую информацию о нем.
                </p>

                <p className="paragraph">
                    Например:
                </p>

                <p className="paragraph">
                    ----
                </p>

                <p className="paragraph">
                    Вы можете найти нас по адресу: г. Москва, ул. Торговая, дом 123, офис 456
                </p>

                <p className="paragraph">
                    Как добраться: Сокольническая линия метро, последний вагон из центра, выход в сторону Казанского вокзала.
                </p>

                <p className="paragraph">
                    На сайт можно встроить интерактивную Яндекс- или Google-карту, например так:
                </p>

               <div className="map-placeholder">
              <div className="map-placeholder">
    <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aabc123xyz456&source=constructor"
        width="100%"
        height="400"
        frameBorder="0"
    ></iframe>
</div>

            </div>

                <p className="paragraph">
                    Телефон отдела продаж: 8-495-123-45-67 (многоканальный)
                </p>

                <p className="paragraph">
                    Телефон отдела оптовых продаж: 8-495-765-43-21
                </p>

                <p className="paragraph">
                    Email: <a href="mailto:sales@myshop.ru" className="link">sales@myshop.ru</a>
                </p>

                <p className="paragraph bold">
                    График работы офиса и склада:
                </p>

                <div className="schedule">
                    <p>Понедельник - <span className="tab-spacer"> с 9:00 до 21:00</span></p>
                    <p>Вторник - <span className="tab-spacer">   c 9:00 до 21:00</span>с</p>
                    <p>Среда - <span className="tab-spacer"> с 9:00 до 21:00</span></p>
                    <p>Четверг - <span className="tab-spacer"> с 9:00 до 21:00</span></p>
                    <p>Пятница - <span className="tab-spacer"> с 9:00 до 21:00</span></p>
                    <p>Суббота -<span className="tab-spacer"> с 10:00 до 20:00</span></p>
                    <p>Воскресенье - <span className="tab-spacer"> с 10:00 до 20:00</span></p>
                    <p>Заказы через сайт принимаются круглосуточно!</p>
                </div>

                <p className="paragraph bold">
                    Реквизиты:
                </p>

                <div className="requisites">
                    <p>ИП Иванов Иван Иванович</p>
                    <p>ОГРНИП: 123456789012345</p>
                    <p>ИНН: 123456789012</p>
                    <p>КПП: 123456789</p>
                </div>

                <p className="paragraph">
                    Эту страницу можно отредактировать в бэк-офисе сайта в разделе <a href="/cms/pages" className="link">Меню и страницы</a>.
                </p>

                <p className="paragraph">
                    Подробнее о создании текстовых страниц и меню, читайте в документации: <a href="https://www.insales.ru/collection/doc-settings/product/razdel-menyu" className="link">https://www.insales.ru/collection/doc-settings/product/razdel-menyu</a>
                </p>
            </div>
            </div>
            
        )
    }
    export default Details