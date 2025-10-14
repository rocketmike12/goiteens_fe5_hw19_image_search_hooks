import { Component } from "react";

import styles from "./ImageGallery.module.scss";

export class ImageGalleryItem extends Component {
	onClick = () => {
		this.props.handleClick(this.props.src, this.props.url);
	};

	render() {
		return (
			<>
				<li className={styles["gallery__item"]}>
					<img src={this.props.previewSrc} data-src={this.props.src} alt={this.props.alt} onClick={this.onClick} onLoad={this.props.handleImageLoad} key={this.props.keyProp} />
				</li>
			</>
		);
	}
}
