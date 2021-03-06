import React from "react";
import PropTypes from 'prop-types';
import styles from '../styles/statistics-section.module.css';

const Statistics = ({title, stats}) => {
return (
    <section className={styles.statistics} >
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.stat_list}>
            {stats.map(({ id, label, percentage}) => (
            <li key={id} className={styles.item} style = {{backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16) }}>
                <span className={styles.label}>{label}</span>
                <span className={styles.percentage}>{percentage}%</span>
            </li>
            ))}
        </ul>
    </section>
);
}
Statistics.defaultProps = {
    title: '',
};

Statistics.propTypes = {
    title: PropTypes.string,
    
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })
    ).isRequired,
    
};

export default Statistics;