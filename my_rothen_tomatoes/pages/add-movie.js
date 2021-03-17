import React from 'react';
import axios from 'axios';

class addMovie extends React.Component {

    state = {

    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title: this.title,
            overview: this.overview,
            backdrop_path: this.backdrop,
            genres: this.genres,
            original_language: this.language,
            original_title: this.origin_title,
            poster_path: this.poster,
            release_date: this.date
        }
        axios.post('http://localhost:3000/api/movies', data)
    }

    render() {
        return (
            <div>
                <h1>Add new movie</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Title" name="title" onChange={e => this.title = e.target.value}></input><br />
                    <input type="text" placeholder="Overview" name="overview" onChange={e => this.overview = e.target.value}></input><br />
                    <input type="text" placeholder="Backdrop path" name="backdrop-path" onChange={e => this.backdrop = e.target.value}></input><br />
                    <input type="text" placeholder="Genre ids (separate with commas)" name="genre-ids" onChange={e => this.genres = e.target.value}></input><br />
                    <input type="text" placeholder="Original language" name="original-language" onChange={e => this.language = e.target.value}></input><br />
                    <input type="text" placeholder="Original title" name="original-title" onChange={e => this.origin_title = e.target.value}></input><br />
                    <input type="text" placeholder="Poster path" name="poster-path" onChange={e => this.poster = e.target.value}></input><br />
                    <input type="text" placeholder="Release date" name="release-date" onChange={e => this.date = e.target.value}></input><br />
                    <button type="submit">Create new movie</button>
                </form>
            </div>
        )
    }

}

export default addMovie;