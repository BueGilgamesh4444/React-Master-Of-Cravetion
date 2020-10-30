import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Row, Col, UncontrolledCarousel, Button } from 'reactstrap';
import './styles.css';

const items = [
    {
        src: require("./img/Carousel/AvocadoHeaven.jpg"),
        altText: 'Avocado Heaven',
        key: "1"
    },
    {
        src: require("./img/Carousel/RainbowPizza1.jpg"),
        altText: 'Raindow Pizza',
        key: "2"
    },
    {
        src: require("./img/Carousel/FrozenAvovado&BerriesBread.jpg"),
        altText: 'Frozen Avocado & Berries Bread',
        key: "3"
    },
    {
        src: require("./img/Carousel/FrozenFruitPopsicles.jpg"),
        altText: 'Frozen Fruit Popsicles',
        key: "4"
    }
  ];

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div className="App">
                <Navbar bg="light" expand="lg">
                    <NavbarBrand href="App.js"><img src={require("./img/MoC icon.jpg")} height="40%" width="40%" alt="Master Of Cravetion logo" /> Master Of Cravetion</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" href="#about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" href="#menu">Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" href="#shop">Shop</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" href="#contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Row>
                    <Col md="4" className="mx-auto">
                        <UncontrolledCarousel items={items} />
                    </Col>
                </Row>

                <div id="about" className="container-fluid">
                    <Row>
                        <Col>
                            <div id="accordionAbout">
                                <div className="card">
                                    <div role="tab" className="card-header text-center bgAbout">
                                            <a className="display-1" data-toggle="collapse" data-target="#acAbout">
                                                <button type="button" className="acButton btn border-danger btn-lg"><h1>About Us</h1></button>
                                                <hr className="light" />
                                            </a>
                                        <div id="acAbout" data-parent="#accordionAbout">
                                            <p className="card-text">Oyitonud ratod labitu hitig tofu lan apogewo? Egoti re yo etirier? Sotepah yen rapeh divagi! Runol rerara ekemire pefe vabo tabilel. Inelipid rive unab me hamo ciete satatec itapar ararixet ro. Relo ret far riyicu ha. Ricel hel tarec le acacifed ba potieges; nien hegufir so ira. Bo patar piele riecekeg yon be lirep oroci caponal otemos.</p>
                                            <hr className="light" />  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div id="menu" className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div id="accordionMenu">
                                <div className="card">
                                    <div role="tab" className="card-header text-center bgMenu">
                                            <a className="display-1" data-toggle="collapse" data-target="#acMenu">
                                                <button type="button" className="acButton btn border-danger btn-lg"><h1>Healthy Organic Vegan Menu</h1></button>
                                                <hr className="light" />
                                            </a>
                                        <div id="acMenu" data-parent="#accordionMenu">
                                            <p className="card-text">Oyitonud ratod labitu hitig tofu lan apogewo? Egoti re yo etirier? Sotepah yen rapeh divagi! Runol rerara ekemire pefe vabo tabilel. Inelipid rive unab me hamo ciete satatec itapar ararixet ro. Relo ret far riyicu ha. Ricel hel tarec le acacifed ba potieges; nien hegufir so ira. Bo patar piele riecekeg yon be lirep oroci caponal otemos.</p>
                                            <hr className="light" />  
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="card-group border-success text-center mx-auto">
                                                        <div className="col-md-6">
                                                            <div className="col-md-12">
                                                                <div className="card">
                                                                    <img className="card-img" src={require("./img/Menu/A1.jpg")} />
                                                                    <div className="card-img-overlay">
                                                                        <div className="d-none d-md-block">
                                                                            <h2 className="cardHeader">Text here</h2>
                                                                            <p className="cardMenu">$3.68</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="col-md-12">
                                                                <div className="card">
                                                                    <img className="card-img" src={require("./img/Menu/A2.jpg")} />
                                                                    <div className="card-img-overlay">
                                                                        <div className="d-none d-md-block">
                                                                            <h2 className="cardHeader">Text here</h2>
                                                                            <p className="cardMenu">$3.68</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-group text-center mx-auto">
                                                        <div className="col-md-6">
                                                            <div className="col-md-12">
                                                                <div className="card">
                                                                    <img className="card-img" src={require("./img/Menu/A3.jpg")} />
                                                                    <div className="card-img-overlay">
                                                                        <div className="d-none d-md-block">
                                                                            <h2 className="cardHeader">Text here</h2>
                                                                            <p className="cardMenu">$3.68</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="col-md-12">
                                                                <div className="card">
                                                                    <img className="card-img" src={require("./img/Menu/A4.jpg")} />
                                                                    <div className="card-img-overlay">
                                                                        <div className="d-none d-md-block">
                                                                            <h2 className="cardHeader">Text here</h2>
                                                                            <p className="cardMenu">$3.68</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-group text-center mx-auto">
                                                        <div className="col-md-6">
                                                            <div className="col-md-12">
                                                                <div className="card">
                                                                    <img className="card-img" src={require("./img/Menu/A5.jpg")} />
                                                                    <div className="card-img-overlay">
                                                                        <div className="d-none d-md-block">
                                                                            <h2 className="cardHeader">Text here</h2>
                                                                            <p className="cardMenu">$3.68</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="col-md-12">
                                                                <div className="card">
                                                                    <img className="card-img" src={require("./img/Menu/A6.jpg")} />
                                                                    <div className="card-img-overlay">
                                                                        <div className="d-none d-md-block">
                                                                            <h2 className="cardHeader">Text here</h2>
                                                                            <p className="cardMenu">$3.68</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-group text-center mx-auto">
                                                        <div className="col-md-6">
                                                            <div className="col-md-12">
                                                                <div className="card">
                                                                    <img className="card-img" src={require("./img/Menu/A7.jpg")} />
                                                                    <div className="card-img-overlay">
                                                                        <div className="d-none d-md-block">
                                                                            <h2 className="cardHeader">Text here</h2>
                                                                            <p className="cardMenu">$3.68</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="col-md-12">
                                                                <div className="card">
                                                                    <img className="card-img" src={require("./img/Menu/A8.jpg")} />
                                                                    <div className="card-img-overlay">
                                                                        <div className="d-none d-md-block">
                                                                            <h2 className="cardHeader">Text here</h2>
                                                                            <p className="cardMenu">$3.68</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="shop" className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div id="accordionShop">
                                <div className="card">
                                    <div role="tab" className="card-header text-center bgShop">
                                            <a className="display-3" data-toggle="collapse" data-target="#acShop">
                                                <button type="button" className="acButton btn border-danger btn-lg"><h1>Healthy Organic Vegan Shop</h1></button>
                                                <hr className="light" />
                                            </a>
                                        <div id="acShop" data-parent="#accordionShop">
                                            <p className="card-text">Oyitonud ratod labitu hitig tofu lan apogewo? Egoti re yo etirier? Sotepah yen rapeh divagi! Runol rerara ekemire pefe vabo tabilel. Inelipid rive unab me hamo ciete satatec itapar ararixet ro. Relo ret far riyicu ha. Ricel hel tarec le acacifed ba potieges; nien hegufir so ira. Bo patar piele riecekeg yon be lirep oroci caponal otemos.</p>
                                            <hr className="light" />  
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="card-group border-success text-center mx-auto">
                                                        <div className="col-md-6">
                                                            <div className="col-md-12">
                                                                <div className="card">
                                                                    <img className="card-img" src={require("./img/Shop/SmallT-shirt01.jpg")} />
                                                                    <div className="card-img-overlay">
                                                                        <div className="d-none d-md-block">
                                                                            <h2 className="cardHeader">Text here</h2>
                                                                            <p className="cardMenu">$24.99 <Button type="button" className="btn btn-success">Buy!</Button></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="col-md-12">
                                                                <div className="card">
                                                                    <img className="card-img" src={require("./img/Shop/SmallT-shirt02.jpg")} />
                                                                    <div className="card-img-overlay">
                                                                        <div className="d-none d-md-block">
                                                                            <h2 className="cardHeader">Text here</h2>
                                                                            <p className="cardMenu">$24.99 <button type="button" className="btn btn-success">Buy!</button></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-group text-center mx-auto">
                                                        <div className="col-md-6">
                                                            <div className="col-md-12">
                                                                <div className="card">
                                                                    <img className="card-img" src={require("./img/Shop/SmallT-shirt03.jpg")} />
                                                                    <div className="card-img-overlay">
                                                                        <div className="d-none d-md-block">
                                                                            <h2 className="cardHeader">Text here</h2>
                                                                            <p className="cardMenu">$24.99 <button type="button" className="btn btn-success">Buy!</button></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="col-md-12">
                                                                <div className="card">
                                                                    <img className="card-img" src={require("./img/Shop/SmallT-shirt04.jpg")} />
                                                                    <div className="card-img-overlay">
                                                                        <div className="d-none d-md-block">
                                                                            <h2 className="cardHeader">Text here</h2>
                                                                            <p className="cardMenu card-text">$24.99 <button type="button" className="btn btn-success">Buy!</button></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-group text-center mx-auto">
                                                        <div className="col-md-6">
                                                            <div className="col-md-12">
                                                                <div className="card">
                                                                    <img className="card-img" src={require("./img/Shop/SmallT-shirt05.jpg")} />
                                                                    <div className="card-img-overlay">
                                                                        <div className="d-none d-md-block">
                                                                            <h2 className="cardHeader">Text here</h2>
                                                                            <p className="cardMenu card-text">$24.99 <button type="button" className="btn btn-success">Buy!</button></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="col-md-12">
                                                                <div className="card">
                                                                    <img className="card-img" src={require("./img/Shop/SmallT-shirt06.jpg")} />
                                                                    <div className="card-img-overlay">
                                                                        <div className="d-none d-md-block">
                                                                            <h2 className="cardHeader">Text here</h2>
                                                                            <p className="cardMenu card-text">$24.99 <button type="button" className="btn btn-success">Buy!</button></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer container-fluid">
                    <div className="row">
                        <div className="col-12">

                        </div>
                    </div>
                </div>

                <footer id="contact" className="contact-footer">
                    <div className="container-fluid">
                        <div className="row text-center">
                            <div className="col-sm-2 col-md-2 col-sm-6">
                                <hr className="light" />
                                <h5>Links</h5>
                                <hr className="light" />
                                <ul className="list-unstyled">
                                    <li><a href="#top">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#menu">Menu</a></li>
                                    <li><a href="#shop">Shop</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 social">
                                <hr className="light" />
                                <h5>Social</h5>
                                <hr className="light" />
                                <p><a className="btn-social-icon-instragram btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
                                <a className="btn-social-icon-facebook btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook"></i></a>
                                <a className="btn-social-icon-twitter btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a></p>
                                <p><a className="btn-social-icon-youtube btn-youtube" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                                <a className="btn-social-icon-youtube btn-youtube" href="http://google.com/"><i className="fa fa-google"></i></a>
                                <a className="btn-social-icon-linkedin btn-linkedin" href="http://linkedin.com"><i className="fa fa-linkedin"></i></a></p>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <hr className="light" />
                                <h5>Our Address</h5>
                                <hr className="light" />
                                <p><a role="button" className="btn btn-link" href="tel:+5555555555"><i className="fa fa-phone"></i> 555-555-5555</a></p>
                                <p><a role="button" className="btn btn-link" href="mailto:email@myemail.com"><i className="fa fa-envelope-o"></i> email@myemail.com</a></p>
                                <hr className="light" />
                                <p>100 Street Name</p>
                                <p>Queensland</p>
                                <p>New Zealand, 4214</p>
                                <hr className="light" />
                                <a role="button" className="btn btn-link" href="#"><i className="fa fa-utensils"></i>Get Directions</a>
                            </div>
                            <div className="hours col-md-3 col-sm-6">
                                <hr className="light" />
                                <h5>Our Hours</h5>
                                <hr className="light" />
                                <h5>Monday - Thursday</h5>
                                <p>9am - 5pm</p>
                                <h5>Friday - Saturday</h5>
                                <p>9am - 2pm</p>
                                <h5>Sunday</h5>
                                <p>Closed</p>
                            </div>
                        </div>
                    </div>
                </footer>

                <div className="copyRight row">
                    <div className="col">
                        <div className="text-center col-12">
                            <hr className="light" />
                            <a href="#"><h5>&copy; website.com</h5></a>
                        </div>
                    </div>
                </div>
            </div>   
        );  
    }
}

export default App;