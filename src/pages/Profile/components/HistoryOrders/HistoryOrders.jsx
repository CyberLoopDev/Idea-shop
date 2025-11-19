import { useState, useEffect } from "react";
import './HistoryOrders.css';

const HistoryOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token"); // предполагаем, что токен хранится в localStorage

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/orders`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Ошибка при загрузке заказов");

        const data = await res.json();
        setOrders(data.orders || []);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  if (loading) return <p>Загрузка заказов...</p>;
  if (error) return <p>Ошибка: {error}</p>;
  if (!orders.length) return <p>У вас пока нет заказов.</p>;

  const totalSum = orders.reduce((acc, order) => acc + order.total, 0);

  return (
    <div className="history-orders">
      <table className="co-table co-table--to_card">
        <thead>
          <tr className="co-table-row co-table-row--head">
            <th className="co-table-cell co-table-cell--head">Дата оформления</th>
            <th className="co-table-cell co-table-cell--head">Номер заказа</th>
            <th className="co-table-cell co-table-cell--head">Статус</th>
            <th className="co-table-cell co-table-cell--head co-table-cell--hide@sm">Оплата</th>
            <th className="co-table-cell co-table-cell--head co-table-cell--hide@sm">Сумма заказа</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="co-table-row co-table-row--body co-table-row--striped">
              <td className="co-table-cell co-table-cell--body" data-title="Дата оформления">
                {new Date(order.createdAt).toLocaleString()}
              </td>
              <td className="co-table-cell co-table-cell--body" data-title="Номер заказа">
                <a className="co-link" href={`/orders/${order._id}`}>{order._id.slice(-6)}</a>
              </td>
              <td className="co-table-cell co-table-cell--body" data-title="Статус">{order.status || "Принят"}</td>
              <td className="co-table-cell co-table-cell--body co-table-cell--hide@sm" data-title="Оплата">
                {order.isPaid ? "Оплачен" : "Не оплачен"}
              </td>
              <td className="co-table-cell co-table-cell--body co-table-cell--hide@sm" data-title="Сумма заказа">
                {order.total.toLocaleString()} ₽
              </td>
            </tr>
          ))}

          <tr className="co-table-row co-table-row--foot">
            <td className="co-table-cell co-table-cell--foot" colSpan="5">
              <div className="co-order_history-total_title">Сумма выполненных заказов:</div>
              <div className="co-order_history-total_sum co-price">{totalSum.toLocaleString()} ₽</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HistoryOrders;
