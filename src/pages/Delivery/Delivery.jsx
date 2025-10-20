import "./Delivery.css"
 import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
const Delivery = () => {
    return(
        <div className="delivery">
            <div className="container">
             <Breadcrumb />
           <h1 className="title">Доставка</h1>

            <p className="paragraph">
                Разместите на этой странице информацию с описанием способов доставки, которые использует ваш интернет-магазин.
            </p>

            <p className="paragraph">
                Например:
            </p>

            <p className="paragraph">
                Наш интернет-магазин осуществляет доставку по Москве и регионам России:
            </p>

            <ol className="delivery-list">
                <li>Курьерская доставка по Москве — 200 руб.</li>
                <li>Самовывоз из нашего пункта выдачи или розничного магазина – бесплатно!</li>
                <li>Почтовая доставка по России — от 150 руб. в зависимости от адреса доставки.</li>
            </ol>

            <p className="paragraph">
                Сроки доставки:
            </p>

            <ol className="delivery-list">
                <li>Курьерская доставка по Москве – на следующий день</li>
                <li>Самовывоз – на следующий день</li>
                <li>Почтовая доставка по России – от 3 до 14 дней в зависимости от региона</li>
            </ol>

            <p className="paragraph bold">
                Доставка осуществляется бесплатно при сумме заказа более 7000 рублей.
            </p>

            <p className="paragraph">
                ----
            </p>

            <p className="paragraph">
                Эту страницу можно отредактировать в бэк-офисе сайта в разделе <a href="/cms/pages" className="link">Меню и страницы</a>.
            </p>

            <p className="paragraph">
                Подробнее о создании текстовых страниц и меню, читайте в документации: <a href="https://www.insales.ru/collection/doc-settings/product/razdel-menyu" className="link">https://www.insales.ru/collection/doc-settings/product/razdel-menyu</a>
            </p>

            <p className="paragraph">
                Настроить расчёт стоимости доставки при оформлении заказа можно настроить в разделе <a href="/admin/settings/delivery" className="link">Настройки -&gt; Доставка</a>.
            </p>

            <p className="paragraph">
                Подробнее о настройке способов доставки, читайте в документации: <a href="https://www.insales.ru/collection/doc-delivery/product/dostavka" className="link">https://www.insales.ru/collection/doc-delivery/product/dostavka</a>
            </p>
        </div>
        </div>
        
    )
}
export default Delivery