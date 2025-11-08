import { ImageGalleryItem } from "./ImageGalleryItem.jsx";

import styles from "./ImageGallery.module.scss";

export const ImageGallery = function ({ images, handleClick, handleImageLoad }) {
	return (
		<>
			<ul className={styles["gallery"]}>
				{images.map((image) => (
					<ImageGalleryItem
						previewSrc={image.webformatURL}
						src={image.largeImageURL}
						alt={image.tags}
						url={image.pageURL}
						handleClick={handleClick}
						handleImageLoad={handleImageLoad}
						key={image.id}
						keyProp={image.id}
					/>
				))}
			</ul>
		</>
	);
};
