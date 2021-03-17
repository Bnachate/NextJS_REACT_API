import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {Button, Card } from 'semantic-ui-react'; 
import React, {Fragment } from 'react';
import NewNote from './new'

/* const Commentaries = ({ notes }) => {
   */
  class Commentaries extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
        notes: [],
        query: ""
      }
     console.log("--------PROPS---------")
      console.log(props.props._id)
      
    
    }
    async componentDidMount() {
       await this.fetchNotes();
       console.log("Componentdidmount")
       console.log(this.state.notes)
  } 
  
  async fetchNotes() {
      await fetch('http://localhost:3000/api/notes', { method: "GET" })
          .then(response => response.text())
          .then(result => this.setState({
              notes: JSON.parse(result).data
          }));
         console.log(`sisi ${this.state.notes}`) 
  }
 
  render() {
    if(this.state.notes.length > 0){
      return (
        <div className="notes-container">
          <h1>Notes</h1>
                <NewNote props={ this.props.props} />
          <div style={{marginTop:"50px"}} className="grid wrapper">
            {this.state.notes.map(note => {
              return (
                
                <div key= {note._id}>
             <Card>
                {/* <Card.Content>
                  <Card.Header>
                    <Link href={`/${note._id}`}>
                    <a>{note.title}</a></Link>
                  </Card.Header>
                </Card.Content> */}
                <Card.Content>
                  <Card.Header>
                    UserName
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                <Card.Header>
                  { note.description }
                  </Card.Header>
                </Card.Content>  
                <Card.Content extra>
                   
                  {/* <Link href={`/${note._id}`}>
                    <Button primary>
                      View
                    </Button>
                  </Link>
                  <Link href={`/${note._id}/edit`}>
                    <Button primary>
                     Edit
                    </Button> 
                  </Link>*/}
                </Card.Content>
              </Card>
          </div>
            )
           })}
        </div>
        </div>
      )
    }else {
      return "YOOOOOOOOOOOOOOOOOOOO";
    }

  
}
}
/* Commentaries.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/notes');
  const { data } = await res.json();
  
  return { notes: data };
} */
export default Commentaries;