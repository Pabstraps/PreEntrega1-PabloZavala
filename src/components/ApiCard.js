import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/col';


function ApiCard ({username,altura}) {
return(
    <Col lg={4}>
    <Card>
        <Card.Body>
            <Card.Title>{username}</Card.Title>
            <Card.Text>
                Altura: {altura}
            </Card.Text>
            <Button variant="success"> Seleccionar </Button>
        </Card.Body>
    </Card>
    </Col>
);
}

export default ApiCard;
