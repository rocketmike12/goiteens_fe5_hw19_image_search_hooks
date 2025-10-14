import { Component } from "react";

import axios from "axios";

import { SearchBar } from "./components/SearchBar/SearchBar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { LoadBtn } from "./components/LoadBtn/LoadBtn";
import { Loader } from "./components/Loader/Loader";
import { ImageModal } from "./components/ImageModal/ImageModal";

import styles from "./App.module.scss";

const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;

class App extends Component {
	constructor() {
		super();

		this.state = { images: [], search: "", currentPage: 1, isLoading: false, isModalOpen: false, modalSrc: "", modalURL: "" };
	}

	getData = async () => {
		this.setState({ isLoading: true });

		const res = await axios.get(`https://pixabay.com/api/?q=${this.state.search}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.currentPage * 4}`);

		this.setState({ images: res.data.hits, toLoad: res.data.hits.length });
		this.setState({ isLoading: false });
	};

	componentDidMount() {
		this.getData();
	}

	handleGalleryClick = (src, url) => {
		this.setState({ isModalOpen: true, modalSrc: src, modalURL: url });
	};

	closeModal = () => {
		this.setState({ isModalOpen: false, modalSrc: "" });
	};

	handleSearch = (query) => {
		this.setState({ search: query, currentPage: 1 }, () => {
			this.getData(query);
		});
	};

	loadMore = () => {
		this.setState((state) => ({ currentPage: state.currentPage + 1 }), this.getData);
	};

	render() {
		return (
			<>
				<div className={styles["container"]}>
					<Loader isLoading={this.state.isLoading} />
					{this.state.isModalOpen && <ImageModal src={this.state.modalSrc} url={this.state.modalURL} handleClose={this.closeModal} />}
					<SearchBar search={this.state.search} handleSearch={this.handleSearch} />
					<ImageGallery images={this.state.images} handleClick={this.handleGalleryClick} />
					<LoadBtn handleClick={this.loadMore} />
				</div>
			</>
		);
	}
}

export default App;
