import { Component } from 'react';

export default class LikeButton extends Component {
    state = {
        hasAddedLike: false,
        hasAddedDislike: false,
        likes: 100,
        dislikes: 25
    }

    addLike = () => {
        // debugger;
        if (!this.state.hasAddedLike && !this.state.hasAddedDislike) {
            let newLikes = this.state.likes + 1;
            this.setState({ likes: newLikes, hasAddedLike: true })
        } else if (this.state.hasAddedLike && !this.state.hasAddedDislike) {
            let newLikes = this.state.likes - 1;
            this.setState({ likes: newLikes, hasAddedLike: false })
        } else if (this.state.hasAddedDislike) {
            let newDislikes = this.state.dislikes - 1;
            let newLikes = this.state.likes + 1;
            this.setState({
                dislikes: newDislikes,
                likes: newLikes,
                hasAddedDislike: false,
                hasAddedLike: true
            })
        }
    }

    addDislike = () => {
        // debugger;
        if (!this.state.hasAddedDislike && !this.state.hasAddedLike) {
            let newDislikes = this.state.dislikes + 1;
            this.setState({ dislikes: newDislikes, hasAddedDislike: true })
        } else if (this.state.hasAddedDislike && !this.state.hasAddedLike) {
            let newDislikes = this.state.dislikes - 1;
            this.setState({ dislikes: newDislikes, hasAddedDislike: false })
        } else if (this.state.hasAddedLike) {
            let newDislikes = this.state.dislikes + 1;
            let newLikes = this.state.likes - 1;
            this.setState({
                dislikes: newDislikes,
                likes: newLikes,
                hasAddedDislike: true,
                hasAddedLike: false
            })
        }
    }

    render() {
        return (
            <>
                <div>
                    <h2>Like/Dislike</h2>
                    <button className={`like-button ${this.state.hasAddedLike ? 'liked' : ''}`} onClick={this.addLike}>Like |
                        <span className="likes-counter">{this.state.likes}</span>
                    </button>
                    <button className={`dislike-button ${this.state.hasAddedDislike ? 'disliked' : ''}`} onClick={this.addDislike}>Dislike |
                        <span className="disclikes-counter">{this.state.dislikes}</span>
                    </button>
                </div>
                <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
            </>
        );
    }
}
