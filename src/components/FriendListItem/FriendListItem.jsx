import css from '../FriendListItem/FriendListItem.module.css';
import clsx from "clsx";

export default function FriendListItem({avatar,name,isOnline}) {
    const statusClsx = clsx(isOnline ? css.statusOn : css.statusOff);
    
    return (
      <div className={css.item}>
        <img className={css.image} src={avatar} alt={name} width="48" />
        <p>{name}</p>
        <p className={statusClsx}>{isOnline ? "Online" : "Offline"}</p>
      </div>
    );
};