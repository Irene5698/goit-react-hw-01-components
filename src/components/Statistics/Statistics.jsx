import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistic.module.css'

export const Statistics = ({title, stats}) => {
  return  <div>
    <section className={css.statistics}>
     <h2 className={css.title}>{title}</h2>
      <ul>
        {stats.map(stat => (
          <li className={css.item} key={stat.id}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  </div>};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

  export default Statistics;