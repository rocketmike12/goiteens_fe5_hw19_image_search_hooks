import styles from "./LoadBtn.module.scss";

export const LoadBtn = function ({ handleClick }) {
	return (
		<>
			<button className={styles["load-btn"]} onClick={handleClick}>
				load more
			</button>
		</>
	);
};
