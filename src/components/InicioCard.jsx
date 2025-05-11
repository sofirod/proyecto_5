import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function InicioCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>generador de gatos</Card.Title>
        <Card.Text>
          Este es un generador de gatos aleatorios. Puedes escribir una palabra o frase y un gato aleatorio aparecerá en la pantalla diciendo esa frase. 
         
        </Card.Text>
        <Button onClick={()=> window.location.href ="GatosAzar"} variant="primary">probar </Button>
      </Card.Body>
    </Card>
  );
}

export default InicioCard;