import styles from "./ImageModal.module.scss";

export const ImageModal = function ({ url, src, handleClose }) {
	const onClick = (e) => {
		if (e.target !== e.currentTarget) return;

		handleClose();
	};

	return (
		<>
			<div className={styles["overlay"]} onClick={onClick}>
				<div className={styles["modal"]}>
					<a href={url} target="_blank">
						<img src={src} className={styles["modal__image"]} />
					</a>
				</div>
			</div>
		</>
	);
};
