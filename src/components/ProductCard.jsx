import Accordion from "react-bootstrap/Accordion";
import { products } from "../data/products";
//"../../public/img1.jpg"
function ProductCards() {
  console.log(products);

  return (
    <Accordion>
      {products.map((product, index) => (
        <Accordion.Item key={index} eventKey={index}>
          <Accordion.Header>{product.name}</Accordion.Header>
          <Accordion.Body>
            {product.description}
            <img src={`${product.image}`} alt="" />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default ProductCards;
