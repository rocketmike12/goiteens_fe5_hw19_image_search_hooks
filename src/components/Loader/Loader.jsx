import { Component } from "react";
import { ClipLoader } from "react-spinners";

import styles from "./Loader.module.scss";

export class Loader extends Component {
	render() {
		return (
			<>
				{this.props.isLoading && (
					<div className={styles["loader"]}>
						<ClipLoader size={250} color="#cba6f7" loading={true} speedMultiplier={1.5} aria-label="Loading Spinner" data-testid="loader" />
					</div>
				)}
			</>
		);
	}
}
