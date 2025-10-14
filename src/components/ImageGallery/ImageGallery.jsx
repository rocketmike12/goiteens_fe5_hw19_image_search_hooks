import { Component } from "react";

import { ImageGalleryItem } from "./ImageGalleryItem.jsx";

import styles from "./ImageGallery.module.scss";

export class ImageGallery extends Component {
	render() {
		return (
			<>
				<ul className={styles["gallery"]}>
					{this.props.images.map((image) => (
						<ImageGalleryItem previewSrc={image.webformatURL} src={image.largeImageURL} alt={image.tags} url={image.pageURL} handleClick={this.props.handleClick} handleImageLoad={this.props.handleImageLoad} key={image.id} keyProp={image.id} />
					))}
				</ul>
			</>
		);
	}
}
