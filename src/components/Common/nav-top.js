import React, {Component} from 'react';



class NavTop extends Component {
	constructor(props) {
		super(props);
		this.state = {
            userName: '',
            user: ''
        }
        this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		e.preventDefault();
		localStorage.removeItem('user')
		localStorage.removeItem('token')
		window.location='/login'
	}

	componentDidMount() {
		debugger
		this.setState({user: localStorage.getItem('user')})
	}
	
	render() {
		return (
			<div className="nav-top">
				Marco个人博客管理端
				<div className="fr">
					欢迎您，{this.state.user}
					<a href="/logout" onClick={this.handleClick}>退出</a>
				</div>
			</div>
		)
	}
}

export default NavTop;