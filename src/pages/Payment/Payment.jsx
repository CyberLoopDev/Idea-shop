import './Payment.css'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
const Payment = () =>{
    return (
        <div className="payment">
            <div className="container">
                <div className="payment-block">
              <Breadcrumb />
            <h1 className="title">Оплата</h1>

            <p className="paragraph">
                Разместите на этой странице информацию с описанием способов оплаты, которые использует ваш интернет-магазин.
            </p>

            <p className="paragraph">
                Например:
            </p>

            <p className="paragraph">
                Вы можете оплатить заказ:
            </p>

            <ol className="payment-list">
                <li>Наличными курьеру или в пункте выдачи при получении заказа</li>
                <li>Банковской картой Visa, Mastercard или МИР через сайт при оформлении заказа</li>
                <li>Наложенным платежом при заказе с доставкой Почтой России</li>
            </ol>

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
                Способы оплаты при оформлении заказа можно настроить в разделе <a href="/admin/settings/payment" className="link">Настройки -&gt; Оплата</a>.
            </p>

            <p className="paragraph">
                Подробнее о настройке способов оплаты, читайте в документации: <a href="https://www.insales.ru/collection/doc-payment/product/oplata" className="link">https://www.insales.ru/collection/doc-payment/product/oplata</a>
            </p>

            </div>
        </div>
        </div>
        
    )
}
export default Payment