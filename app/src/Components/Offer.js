import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import './Offer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function ShapeExample() {
  return (
    <Container>
      <Row className="OfferSection">
        <Col xs={6} md={4}>
        <Link to="/https://in.event.mi.com/in/offer-with-mi">
        <Image src="https://i02.appmifile.com/31_operator_in/25/04/2021/37529e4f2964c9b26a671172950096ae.jpg?width=398&height=230"  />
        </Link>
          
        </Col>
        
        <Col xs={6} md={4}>
        <Link to="/https://in.event.mi.com/in/work-from-home-essentials">
        <Image src= "https://i02.appmifile.com/884_operator_in/30/05/2021/1e91f02cd9aca02f7caf3c5ddadd2747.jpg?width=398&height=230" />
        </Link>
        </Col>


        <Col xs={6} md={4}>
          <Link to="/https://xiaomi.giveindia.org">
          <Image src="https://i02.appmifile.com/761_operator_in/27/04/2021/09489d6a77f96111372718a551d2799d.png?width=398&height=230" />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;