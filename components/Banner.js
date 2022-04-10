import styles from './Banner.module.css';

const Banner = (props) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<span className={styles.title1}>Coffee </span>
				<span className={styles.title2}>Connoisseur</span>
			</h1>
			<p className={styles.subtitle}>Discover your local coffee stores!</p>
			<button className={styles.btn} onClick={props.handleOnClick}>
				{props.buttonText}
			</button>
		</div>
	);
};

export default Banner;
