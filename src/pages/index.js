import * as React from "react"
import { Nav, Container, Navbar, Button, Card, Carousel } from "react-bootstrap"
import * as containerStyles from "./main.module.css"

const IndexPage = () => (
  <div className={containerStyles.container}>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">آذرلند</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">خانه</Nav.Link>
            <Nav.Link href="#link">لینک</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <body className={containerStyles.container}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://busites-www.s3.amazonaws.com/blog-margaritaville/2018/10/ThinkstockPhotos-504707404.jpg"
        />
        <Card.Body>
          <Card.Title>عنوان کارت</Card.Title>
          <Card.Text>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد
          </Card.Text>
          <Button variant="primary">کلیک کنید</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://busites-www.s3.amazonaws.com/blog-margaritaville/2018/10/ThinkstockPhotos-504707404.jpg"
        />
        <Card.Body>
          <Card.Title>عنوان کارت</Card.Title>
          <Card.Text>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد
          </Card.Text>
          <Button variant="primary">کلیک کنید</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://busites-www.s3.amazonaws.com/blog-margaritaville/2018/10/ThinkstockPhotos-504707404.jpg"
        />
        <Card.Body>
          <Card.Title>عنوان کارت</Card.Title>
          <Card.Text>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد
          </Card.Text>
          <Button variant="primary">کلیک کنید</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://busites-www.s3.amazonaws.com/blog-margaritaville/2018/10/ThinkstockPhotos-504707404.jpg"
        />
        <Card.Body>
          <Card.Title>عنوان کارت</Card.Title>
          <Card.Text>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد
          </Card.Text>
          <Button variant="primary">کلیک کنید</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://busites-www.s3.amazonaws.com/blog-margaritaville/2018/10/ThinkstockPhotos-504707404.jpg"
        />
        <Card.Body>
          <Card.Title>عنوان کارت</Card.Title>
          <Card.Text>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد
          </Card.Text>
          <Button variant="primary">کلیک کنید</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://busites-www.s3.amazonaws.com/blog-margaritaville/2018/10/ThinkstockPhotos-504707404.jpg"
        />
        <Card.Body>
          <Card.Title>عنوان کارت</Card.Title>
          <Card.Text>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد
          </Card.Text>
          <Button variant="primary">کلیک کنید</Button>
        </Card.Body>
      </Card>
    </body>
  </div>
)

export default IndexPage
