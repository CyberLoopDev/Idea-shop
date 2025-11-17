import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb'
import './HistoryOrders.css'



const HistoryOrders = () => {
  return (
    <>
    
    <div>
      <table class="co-table co-table--to_card">
    <tbody><tr class="co-table-row co-table-row--head">
      <td class="co-table-cell co-table-cell--head">
      Дата оформления
      </td>
      <td class="co-table-cell co-table-cell--head">
      Номер заказа
      </td>
      <td class="co-table-cell co-table-cell--head">
      Статус
      </td>
      <td class="co-table-cell co-table-cell--head co-table-cell--hide@sm">
      Оплата
      </td>
      <td class="co-table-cell co-table-cell--head co-table-cell--hide@sm">
      Сумма заказа
      </td>
    </tr>
    
    <tr class="co-table-row co-table-row--body co-table-row--striped">
      <td class="co-table-cell co-table-cell--body" data-title="Дата оформления">
        04.11.2025 15:44
      </td>
      <td class="co-table-cell co-table-cell--body" data-title="Номер заказа">
      <a class="co-link" href="https://demo-idea.myinsales.ru/orders/b2b69736c434e44e869b4e8eb083272c">1110</a>
      </td>
      <td class="co-table-cell co-table-cell--body" data-title="Статус">
        Принят
      </td>
      <td class="co-table-cell co-table-cell--body co-table-cell--hide@sm" data-title="Оплата">
        
        Не оплачен
        
      </td>
      <td class="co-table-cell co-table-cell--body co-table-cell--hide@sm" data-title="Сумма заказа">
        43 600&nbsp;₽
      </td>
    </tr>
    
    <tr class="co-table-row co-table-row--body co-table-row--striped">
      <td class="co-table-cell co-table-cell--body" data-title="Дата оформления">
        04.11.2025 15:39
      </td>
      <td class="co-table-cell co-table-cell--body" data-title="Номер заказа">
      <a class="co-link" href="https://demo-idea.myinsales.ru/orders/7d3bab0c097ac60de5dc6e24074e5146">1109</a>
      </td>
      <td class="co-table-cell co-table-cell--body" data-title="Статус">
        Принят
      </td>
      <td class="co-table-cell co-table-cell--body co-table-cell--hide@sm" data-title="Оплата">
        
        Не оплачен
        
      </td>
      <td class="co-table-cell co-table-cell--body co-table-cell--hide@sm" data-title="Сумма заказа">
        189 760&nbsp;₽
      </td>
    </tr>
    
    <tr class="co-table-row co-table-row--foot">
      <td class="co-table-cell co-table-cell--foot" colspan="5">
        <div class="co-order_history-total_title">Сумма выполненных заказов:</div>
        <div class="co-order_history-total_sum co-price">0&nbsp;₽</div>
      </td>
    </tr>
  </tbody></table>
    </div>
    </>
  )
}

export default HistoryOrders
