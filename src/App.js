import { Container } from "react-bootstrap";
import SearchImages from "./components/SearchImages";

function App() {
  return (
    <Container fluid>
      <h1 className="my-4">Search Images</h1>
      <SearchImages />
    </Container>
  );
}

export default App;
