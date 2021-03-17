import React from 'react';
import axios from 'axios';

class UpdateMovie extends React.Component {
    state = {
        title: "",
    }

    componentDidMount() {
        this.setState({
            title: this.props.movie.title,
            overview: this.props.movie.overview,
            backdrop_path: this.props.movie.backdrop_path,
            original_language: this.props.movie.original_language,
            original_title: this.props.movie.original_title,
            poster_path: this.props.movie.poster_path,
            release_date: this.props.movie.release_date
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title: this.state.title,
            overview: this.state.overview,
            backdrop_path: this.state.backdrop_path,
            original_language: this.state.original_language,
            original_title: this.state.original_title,
            poster_path: this.state.poster_pather,
            release_date: this.state.release_date
        }
        axios.put(`http://localhost:3000/api/movies/${this.props.movie._id}`, data)
        window.location.reload();
    }

    back() {
        window.location.reload();
    }

    render() {
        return (
            <div>
                <h1>Update movie</h1>
                <button onClick={this.back}>Back</button>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={e => this.setState({ title: e.target.value })}></input><br />
                    <input type="text" placeholder="Overview" name="overview" value={this.state.overview} onChange={e => this.setState({ overview: e.target.value })}></input><br />
                    <input type="text" placeholder="Backdrop path" name="backdrop-path" value={this.state.backdrop_path} onChange={e => this.setState({ backdrop_path: e.target.value })}></input><br />
                    <input type="text" placeholder="Original language" name="original-language" value={this.state.original_language} onChange={e => this.setState({ original_language: e.target.value })}></input><br />
                    <input type="text" placeholder="Original title" name="original-title" value={this.state.original_title} onChange={e => this.setState({ original_title: e.target.value })}></input><br />
                    <input type="text" placeholder="Poster path" name="poster-path" value={this.state.poster_path} onChange={e => this.setState({ poster_path: e.target.value })}></input><br />
                    <input type="text" placeholder="Release date" name="release-date" value={this.state.release_date} onChange={e => this.setState({ release_date: e.target.value })}></input><br />
                    <button type="submit">Update movie</button>
                </form>
            </div>
        )
    }
}

export default UpdateMovie;