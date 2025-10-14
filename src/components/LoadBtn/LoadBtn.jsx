import { Component } from "react";

import styles from "./LoadBtn.module.scss";

export class LoadBtn extends Component {
	render() {
		return (
			<>
				<button className={styles["load-btn"]} onClick={this.props.handleClick}>load more</button>
			</>
		);
	}
}
