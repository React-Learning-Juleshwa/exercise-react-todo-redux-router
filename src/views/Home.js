import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tulips from '../assets/tulips.jpg';
import { connect } from 'react-redux';

class Home extends Component {
	render() {
		const { posts } = this.props;
		const postList = posts.length ? (
			posts.map((post) => {
				return (
					<div className='post card' key={post.id}>
						<img src={tulips} alt='Tulip Flower' />
						<div className='card-content'>
							<Link to={`/${post.id}`}>
								<h3 className='card-title red-text'>{post.title}</h3>
								<p className='black-text'>{post.body}</p>
							</Link>
						</div>
					</div>
				);
			})
		) : (
				<div className='center'>No post yet</div>
			);

		return (
			<div className='container home'>
				<h4 className='center'>Home</h4>
				{postList}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(Home);
