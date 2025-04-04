import { Component } from "react";
import { Container, Row, Col, Button ,Spinner,Alert } from "react-bootstrap";



const URL = "http://www.omdbapi.com/?apikey=b3987125&s=";

class TrendingNow extends Component {
  state = {
    movies: [],
    loading:true,
    error:false,
    selectedCard:null,
  };

  handleSelected = () => {
    this.setState({ selectedCard: !this.state.selectedCard });}


getMovies = () => {
    fetch(URL + this.props.search)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("cado malato");
        }
    })
    .then((data) => {
        console.log(data);
        this.setState({ movies: data.Search,loading:false,error:false });
        console.log("NUOVO ARRAY", data.Search);
    })
    .catch((err) => {
        console.log(err);
        this.setState({loading:false,error:true})
    });
};
componentDidMount() {
    
    this.getMovies();
}


  render() {
    return (
      <Container fluid className="my-5 px-4">
        <h4 className="text-white">{this.props.categoria}</h4>
        {
            this.state.loading && !this.state.error && (
                <div className="text-center">
                <Spinner animation="border" variant="light" />
                </div>
            )
        }
        {
            this.state.error && (
                <div className="text-center w-100">
                    <Alert variant="danger" className="w-50 mx-auto mt-4">
                        Abbiamo scontrato un errore nel caricamento dei file.
                        Contatta la polizia postale per maggiori informazioni
                        oppure chiama al numero verde 1245412 dove offriamo
                        uno psicologo per aiutarti a superare questo momento difficile <br />
                        Non fare come me, non cadere malato!

                    </Alert>
                </div>
                
            )
        }
        <Row className=" row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 row-cols-xlg-6 g-2 gy-2">
          {this.state.movies.slice(0, 6).map((movie) => {
            return (
              <Col key={movie.imdbID} className="text-center scala"
                 
              >
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="img-fluid  object-fit-fill px-1 rounded-3 scala"
                  style={{ height: "150px", width:'300px' }}
                  onClick={this.handleSelected}
                />
                {
                    this.state.selectedCard && (
                        <div className="text-center mt-4">
                            <h5 className="text-white">{movie.Title}</h5>
                            <p className="text-secondary">{movie.Year}</p>
                        </div>
                    )
                }
                {/* <h5 className="my-3" >{movie.Title}</h5>
                  <p>{movie.Year}</p> */}
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default TrendingNow;
