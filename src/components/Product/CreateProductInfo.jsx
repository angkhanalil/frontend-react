import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Nav,
  Tab,
  Form,
  FloatingLabel,
  Carousel,
  Figure,
  Modal,
} from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ProductService from "../../Service/ProductService";

const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

// // a little function to help us with reordering the result
// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };

const finalSpaceCharacters = [
  {
    id: "gary",
    name: "Gary Goodspeed",
    thumb: "/images/gary.png",
  },
  {
    id: "cato",
    name: "Little Cato",
    thumb: "/images/cato.png",
  },
  {
    id: "kvn",
    name: "KVN",
    thumb: "/images/kvn.png",
  },
  {
    id: "mooncake",
    name: "Mooncake",
    thumb: "/images/mooncake.png",
  },
  {
    id: "quinn",
    name: "Quinn Ergon",
    thumb: "/images/quinn.png",
  },
];

const CreateProductInfo = () => {
  const [showFators, setShowFactors] = useState(false);
  const [factors, setFactors] = useState([]);
  const [items, setItems] = useState(finalSpaceCharacters);
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  useEffect(() => {}, []);

  const getAllFactors = async () => {
    await ProductService.getFactorSizes()
      .then((res) => {
        console.log(res.data);
        setFactors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  };

  return (
    <div>
      <Col className=" " xl="12">
        <Card className="border-1 box-shadow">
          {/* <Card.Header className="bg-white border-1  shadow ">
                  <Col xs="8"></Col>
                </Card.Header> */}
          <Card.Body className="bg-white border-1">
            <Row>
              <h3 className="mb-0">Create New Product </h3>
            </Row>
            <Row className="mt-5">
              <Col xl="4">
                {" "}
                <Figure>
                  <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18b8b49d8aa%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18b8b49d8aa%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2259.92499923706055%22%20y%3D%2294.55999994277954%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                  />
                  <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </Figure.Caption>
                </Figure>
                {/* <Form.Group
                  as={Row}
                  className="mb-3"
                  // controlId="exampleForm.ControlInput1"
                >
                  <Form.Label column sm={4} className="form-control-label">
                    Image Cover
                  </Form.Label>
                  <Col sm={8}></Col>
                </Form.Group> */}
              </Col>
              <Col xl="8">
                <Col lg="11">
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    // controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      column
                      sm={4}
                      lg={5}
                      className="form-control-label"
                    >
                      Product Name
                    </Form.Label>
                    <Col sm={8} lg={7}>
                      <Form.Control type="text" placeholder="product name" />
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg="11">
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    // controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      column
                      sm={4}
                      lg={5}
                      className="form-control-label"
                    >
                      Product Description
                    </Form.Label>
                    <Col sm={8} lg={7}>
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                      />
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg="11">
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    // controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      column
                      sm={4}
                      lg={5}
                      className="form-control-label"
                    >
                      Product Type
                    </Form.Label>
                    <Col sm={8} lg={7}>
                      <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg="11">
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    // controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      column
                      sm={4}
                      lg={5}
                      className="form-control-label"
                    >
                      Price (ex.vat)
                    </Form.Label>
                    <Col sm={8} lg={7}>
                      <Form.Control type="text" placeholder="product name" />
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg="11">
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    // controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      column
                      sm={4}
                      lg={5}
                      className="form-control-label"
                    >
                      Seq.No
                    </Form.Label>
                    <Col sm={8} lg={7}>
                      <Form.Control type="text" placeholder="product name" />
                    </Col>
                  </Form.Group>
                </Col>{" "}
                <Col lg="11"></Col>
              </Col>
            </Row>
            <hr className="horizontal dark" />
            <Row>
              <Col lg={12} className="d-flex justify-between">
                <h3 className="mb-0">Factors</h3>
                <Button onClick={(e) => setShowFactors(true)}>
                  select factors
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                  <Droppable droppableId="characters">
                    {(provided) => (
                      <ul
                        className="characters"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {characters.map(({ id, name, thumb }, index) => {
                          return (
                            <Draggable key={id} draggableId={id} index={index}>
                              {(provided) => (
                                <li
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <div className="characters-thumb">
                                    <img src={thumb} alt={`${name} Thumb`} />
                                  </div>
                                  <p>{name}</p>
                                </li>
                              )}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>
                </DragDropContext>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col lg={12} className="d-flex justify-content-center">
                <Button href="/product-details/4/43">save</Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>

      <Modal
        show={showFators}
        onShow={() => getAllFactors()}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          {factors.map((factor) => {
            return (
              <Button key={factor.factorSizeId}>{factor.factorSizeName}</Button>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button>select</Button>
          <Button onClick={(e) => setShowFactors(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateProductInfo;
