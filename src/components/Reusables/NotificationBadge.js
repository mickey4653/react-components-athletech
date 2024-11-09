import './NotificationBadge.css';
const NotificationBadge = (props) => {
  const { count,children } = props;
  return (
    <div className="badge-container">
      {children}
       {count > 0 && <span className="badge">{count > 99 ? '99+' : count}</span>}
    </div>
  );
};

export default NotificationBadge;
