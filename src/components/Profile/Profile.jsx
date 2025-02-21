import Stats from "../Stats/Stats"
import css from "../Profile/Profile.module.css"

export default function Profile({ name, tag, location, image, stats }) { 
    return (
        <div>
            <img className={css.userimage} src={image} alt="User avatar" width="170" height="170" />
            <p className={css.name}>{name}</p>
            <p className={css.tag}>{tag}</p>
            <p className={css.location}>{location}</p>
            <Stats stats={stats} />
        </div>
    )
};