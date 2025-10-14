import { Component } from "react";

import styles from "./ImageModal.module.scss";

export class ImageModal extends Component {
	onClick = (e) => {
		if (e.target !== e.currentTarget) return;

		this.props.handleClose();
	};

	render() {
		return (
			<>
				<div className={styles["overlay"]} onClick={this.onClick}>
					<div className={styles["modal"]}>
						<a href={this.props.url} target="_blank">
							<img src={this.props.src} className={styles["modal__image"]} />
						</a>
					</div>
				</div>
			</>
		);
	}
}
