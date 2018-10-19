import React, {Component} from 'react';



class NavTop extends Component {
	handleClick = (e) => {
		e.preventDefault();
		sessionStorage.user = 0;
	}

	
	render() {
		return (
			<div className="nav-top">
				Marco个人博客管理端
				<div className="fr">
					欢迎您，江寒
					<a href="/logout" onClick={this.handleClick}>退出</a>
				</div>
			</div>
		)
	}
}

export default NavTop;