import css from './Stats.module.css'

export default function Stats({ stats }) {
    return (
        <>
   <ul className={css.list}>
    <li className={css.item}>
            <span className={css.title}>Followers</span>
      <span className={css.numbers}>{stats.followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.title}>Views</span>
      <span className={css.numbers}>{stats.views}</span>
    </li>
    <li className={css.item}>
      <span className={css.title}>Likes</span>
    <span className={css.numbers}>{stats.likes}</span>
    </li>
  </ul>
        </>  
    );
 };