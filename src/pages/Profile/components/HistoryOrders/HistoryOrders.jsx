import { useState, useEffect } from "react";
import './HistoryOrders.css';

const HistoryOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token"); 

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/orders`, {
          headers: { Authorization: `Bearer ${token}` },
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

  if (loading) return <p className="status-message">Загрузка заказов...</p>;
  if (error) return <p className="status-message">Ошибка: {error}</p>;
  if (!orders.length) return <p className="status-message">У вас пока нет заказов.</p>;

  const totalSum = orders.reduce((acc, order) => acc + order.total, 0);

  const formatStatus = (status) => {
    switch (status) {
      case "pending": return "В обработке";
      case "completed": return "Выполнен";
      case "canceled": return "Отменён";
      default: return "Принят";
    }
  };

  const formatPayment = (isPaid) => isPaid ? "Оплачен" : "Не оплачен";

  return (
    <div className="history-orders">
      <table className="co-table">
        <thead>
          <tr>
            <th>Дата оформления</th>
            <th>Номер заказа</th>
            <th>Статус</th>
            <th>Оплата</th>
            <th>Сумма заказа</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
              <td>
                <a className="co-link" href={`/orders/${order._id}`}>
                  {order._id.slice(-6)}
                </a>
              </td>
              <td>{formatStatus(order.status)}</td>
              <td>{formatPayment(order.isPaid)}</td>
              <td>{order.total.toLocaleString()} ₽</td>
            </tr>
          ))}
          <tr className="total-row">
            <td colSpan="5">
              <div className="total-label">Сумма выполненных заказов:</div>
              <div className="total-value">{totalSum.toLocaleString()} ₽</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HistoryOrders;
