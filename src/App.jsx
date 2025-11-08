import { useEffect, useState, useCallback, useMemo } from "react";

import axios from "axios";

import { SearchBar } from "./components/SearchBar/SearchBar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { LoadBtn } from "./components/LoadBtn/LoadBtn";
import { Loader } from "./components/Loader/Loader";
import { ImageModal } from "./components/ImageModal/ImageModal";

import styles from "./App.module.scss";

const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
axios.defaults.baseURL = "https://pixabay.com/api/";

const App = function () {
	const [images, setImages] = useState([]);
	const [search, setSearch] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalSrc, setModalSrc] = useState("");
	const [modalURL, setModalURL] = useState("");

	const imageCache = useMemo(() => ({}), []);

	const getData = useCallback(async () => {
		console.log("getData");
		const cacheKey = `${search}_${currentPage}`;
		console.log(cacheKey);

		if (imageCache[cacheKey]) {
			console.log("cache @ getData");
			setImages(imageCache[cacheKey]);
			setIsLoading(false);
			return;
		}

		setIsLoading(true);

		console.log("fetch @ getData");
		const res = await axios.get(`/?q=${search}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${currentPage * 16}`);

		imageCache[cacheKey] = res.data.hits;

		setImages(res.data.hits);
		setIsLoading(false);
	});

	useEffect(() => {
		getData();
	}, [currentPage, search]);

	const handleGalleryClick = (src, url) => {
		setIsModalOpen(true);
		setModalSrc(src);
		setModalURL(url);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setModalSrc("");
	};

	const handleSearch = (query) => {
		setCurrentPage(1);
		setSearch(query);
	};

	const loadMore = () => {
		setCurrentPage(currentPage + 1);
	};

	return (
		<>
			<div className={styles["container"]}>
				<Loader isLoading={isLoading} />
				{isModalOpen && <ImageModal src={modalSrc} url={modalURL} handleClose={closeModal} />}
				<SearchBar search={search} handleSearch={handleSearch} />
				<ImageGallery images={images} handleClick={handleGalleryClick} />
				<LoadBtn handleClick={loadMore} />
			</div>
		</>
	);
};

export default App;
