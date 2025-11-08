import { Component, createRef } from "react";

import styles from "./SearchBar.module.scss";

export const SearchBar = function ({ handleSearch }) {
	const handleSubmit = (evt) => {
		evt.preventDefault();

		const form = evt.currentTarget;
		const query = form.elements.search.value;

		handleSearch(query);

		form.reset();
	};

	return (
		<>
			<header className={styles["searchbar"]}>
				<form className={styles["searchbar__form"]} onSubmit={handleSubmit}>
					<button type="submit" className={styles["searchbar__btn"]}>
						<span className={styles["searchbar__btn-label"]}>Search</span>
					</button>

					<input name="search" className={styles["searchbar__input"]} type="text" autoComplete="off" autoFocus placeholder="Search images and photos" />
				</form>
			</header>
		</>
	);
};
