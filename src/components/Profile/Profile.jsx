import PropTypes from "prop-types";

import styles from "./Profile.module.css";

export default function Profile({ 
    name,
    tag,
    location,
    image,
    stats: { followers, views, likes }
}) {
    return (
        <div className={styles.card}>
            <div className={styles.userWrapper}>
                <img
                    className={styles.avatar}
                    src={image}
                    alt={`Avatar of + ${name}`}
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.text}>{tag}</p>
                <p className={styles.text}>{location}</p>
            </div>

            <ul className={styles.statsList}>
                <li className={styles.statsListItem}>
                    <span>Followers</span>
                    <span className={styles.statsText}>{followers}</span>
                </li>
                <li className={styles.statsListItem}>
                    <span className={styles.statsText}>{views}</span>
                    <span>2000</span>
                </li>
                <li className={styles.statsListItem}>
                    <span className={styles.statsText}>{likes}</span>
                    <span>3000</span>
                </li>
            </ul>
        </div>
    );
}
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
};