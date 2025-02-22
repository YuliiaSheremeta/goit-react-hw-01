import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
            <thead className={css.thead}>
                <tr className={css.theadText}>
                    <th className={css.tr}>Type</th>
                    <th className={css.tr}>Amount</th>
                    <th className={css.tr}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? css.backgroundFirst : css.backgroundSecond}>
                    <td className={css.tr}>{item.type}</td>
                    <td className={css.tr}>{item.amount}</td>
                    <td className={css.tr}>{item.currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}