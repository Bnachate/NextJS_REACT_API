import React from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Update from './update-movie';


class moviesAdmin extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        rows: [],
        noResult: false,
        update: {}
    }

    async componentDidMount() {
        this.setState({ noResult: false })
        await this.fetchMovies();
    }

    async fetchMovies() {
        await fetch('http://localhost:3000/api/movies', { method: "GET" })
            .then(response => response.text())
            .then(result => this.setState({
                rows: JSON.parse(result)
            }));
    }

    async queryFilms(value) {
        const result = [];
        this.state.rows.forEach(row => {
            if (row.title.toLowerCase().includes(value.toLowerCase())) {
                result.push(row)
            }
        })
        if (result.length > 0) {
            await this.setState({ rows: result })
        } else {
            this.setState({ noResult: true })
        }
    }

    async resetSearch() {
        window.location.reload();
    }

    async updateMovie(id) {
        await fetch(`http://localhost:3000/api/movies/${id}`, { method: "GET" })
            .then(response => response.text())
            .then(result => this.setState({
                update: JSON.parse(result).data
            }));
    }

    async deleteMovie(id) {
        axios.delete(`http://localhost:3000/api/movies/${id}`)
        window.location.reload();
    }

    render() {
        if (Object.keys(this.state.update).length > 0) {
            return (
                <div>
                    <Update movie={this.state.update} />
                </div>
            )
        }
        if (this.state.rows.length > 0 && this.state.noResult == false) {
            return (
                <div>
                    <div>
                        <input id="search" type="text" onChange={(e) => this.queryFilms(e.target.value)}></input>
                        <button onClick={this.resetSearch}>Reset</button>
                        <a href="http://localhost:3000/add-movie">Create</a>
                    </div>
                    <TableContainer className={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">title</TableCell>
                                    <TableCell align="center">release_date</TableCell>
                                    <TableCell align="center">genre_ids</TableCell>
                                    <TableCell align="center">adult</TableCell>
                                    <TableCell align="center">popularity</TableCell>
                                    <TableCell align="center">vote_average</TableCell>
                                    <TableCell align="center">vote_count</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.rows.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.title}
                                        </TableCell>
                                        <TableCell align="center">{row.release_date}</TableCell>
                                        <TableCell align="center">{JSON.stringify(row.genre_ids)}</TableCell>
                                        <TableCell align="center">{row.adult}</TableCell>
                                        <TableCell align="center">{row.popularity}</TableCell>
                                        <TableCell align="center">{row.vote_average}</TableCell>
                                        <TableCell align="center">{row.vote_count}</TableCell>
                                        <TableCell align="center"><button onClick={() => this.updateMovie(row._id)}>Update</button><button onClick={() => this.deleteMovie(row._id)}>Delete</button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            )
        } else if (this.state.noResult == true) {
            return (
                <div>
                    <input id="search" type="text" onChange={(e) => this.queryFilms(e.target.value)}></input>
                    <button onClick={this.resetSearch}>Reset</button>
                    <h1>Sorry we don't found any results...</h1>
                </div>
            );
        } else {
            return null;
        }
    }
}
export default moviesAdmin;