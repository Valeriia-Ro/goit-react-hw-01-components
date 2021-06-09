import React from "react";
import PropTypes from 'prop-types';

const Statistics = ({title, stats}) => {
return (
    <section class="statistics" >
        {title && <h2 class="title">{title}</h2>}

        <ul class="stat-list">
            {stats.map(({ id, label, percentage}) => (
            <li class="item" key={id}>
                <span class="label">{label}</span>
                <span class="percentage">{percentage}%</span>
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