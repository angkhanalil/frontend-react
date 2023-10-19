import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faBuilding,
  faNewspaper,
  faTruckFast,
  faBoxesPacking,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
// reactstrap components
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  Input,
  InputGroupText,
  InputGroup,
  Media,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

const Sidebar = () => {
  return (
    <>
      <Navbar
        className="navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
          <button
            className="navbar-toggler"
            type="button"
            //   onClick={toggleCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* {logo ? (
            <NavbarBrand className="pt-0">
              <img
                alt={logo.imgAlt}
                className="navbar-brand-img"
                src={logo.imgSrc}
              />
            </NavbarBrand>
          ) : null} */}
          <Nav className="align-items-center d-md-none">
            <UncontrolledDropdown nav>
              <DropdownToggle nav className="nav-link-icon">
                <i className="ni ni-bell-55" />
              </DropdownToggle>
              <DropdownMenu
                aria-labelledby="navbar-default_dropdown_1"
                className="dropdown-menu-arrow"
                end
              >
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav>
              <DropdownToggle nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={require("../../assets/img/theme/team-1-800x800.jpg")}
                    />
                  </span>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" end>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* //isOpen={collapseOpen} */}
          <Collapse navbar>
            <Form className="mt-4 mb-3 d-md-none">
              <InputGroup className="input-group-rounded input-group-merge">
                <Input
                  aria-label="Search"
                  className="form-control-rounded form-control-prepended"
                  placeholder="Search"
                  type="search"
                />

                <InputGroupText>
                  <span className="fa fa-search" />
                </InputGroupText>
              </InputGroup>
            </Form>
            {/* Navigation */}
            <Nav navbar>
              <NavItem>
                <NavLink
                  to="/home"
                  tag={Link}
                  //   tag={NavLinkRRD}
                  //   onClick={closeCollapse}
                >
                  <i className="ni ni-tv-2 text-primary" />
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  style={{ display: "flex" }}
                  //   tag={NavLinkRRD}, justifyContent: "space-between"
                  //   onClick={closeCollapse}
                >
                  {/* <i className="ni ni-tv-2 text-primary" /> */}
                  <i className="ni ni-tv-2 text-primary " />
                  COMPANY
                </NavLink>

                <div className="collapse" id="collapseExample">
                  <Nav navbar style={{ marginLeft: "1rem" }}>
                    <NavItem>
                      <NavLink
                        to="/company"
                        tag={Link}
                        //   tag={NavLinkRRD}
                        //   onClick={closeCollapse}
                      >
                        {" "}
                        <FontAwesomeIcon
                          className="text-primary icon-sidebar"
                          icon={faBuilding}
                        />
                        company list
                      </NavLink>
                      <NavLink
                        to="/new-company"
                        tag={Link}
                        //   tag={NavLinkRRD}
                        //   onClick={closeCollapse}
                      >
                        <FontAwesomeIcon
                          className="text-primary icon-sidebar"
                          icon={faPlus}
                        />
                        new company
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/report-order"
                  tag={Link}
                  //   tag={NavLinkRRD}
                  //   onClick={closeCollapse}
                >
                  {/* <FontAwesomeIcon
                    className="text-primary icon-sidebar"
                    icon={faNewspaper}
                  /> */}
                  <i className="fas fa-heart text-primary"></i>
                  Report
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  data-bs-toggle="collapse"
                  href="#collapseManageOrder"
                  aria-expanded="false"
                  aria-controls="collapseManageOrder"
                  style={{ display: "flex" }}
                  //   tag={NavLinkRRD}, justifyContent: "space-between"
                  //   onClick={closeCollapse}
                >
                  {/* <i className="ni ni-tv-2 text-primary" /> */}
                  <i className="ni ni-tv-2 text-primary " />
                  Manage Order
                </NavLink>

                <div className="collapse" id="collapseManageOrder">
                  <Nav navbar style={{ marginLeft: "1rem" }}>
                    <NavItem>
                      <NavLink
                        to="/company"
                        tag={Link}
                        //   tag={NavLinkRRD}
                        //   onClick={closeCollapse}
                      >
                        {" "}
                        <FontAwesomeIcon
                          className="text-primary icon-sidebar"
                          icon={faExclamation}
                        />
                        Import Customer
                      </NavLink>
                      <NavLink
                        to="/new-company"
                        tag={Link}
                        //   tag={NavLinkRRD}
                        //   onClick={closeCollapse}
                      >
                        <FontAwesomeIcon
                          className="text-primary icon-sidebar"
                          icon={faExclamation}
                        />
                        Import Order
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </NavItem>

              <NavItem>
                <NavLink
                  data-bs-toggle="collapse"
                  href="#collapseManageShipping"
                  aria-expanded="false"
                  aria-controls="collapseManageShipping"
                  style={{ display: "flex" }}
                  //   tag={NavLinkRRD}, justifyContent: "space-between"
                  //   onClick={closeCollapse}
                >
                  {/* <i className="ni ni-tv-2 text-primary" /> */}
                  <i className="ni ni-tv-2 text-primary " />
                  Manage Shipping
                </NavLink>

                <div className="collapse" id="collapseManageShipping">
                  <Nav navbar style={{ marginLeft: "1rem" }}>
                    <NavItem>
                      <NavLink
                        to="/company"
                        tag={Link}
                        //   tag={NavLinkRRD}
                        //   onClick={closeCollapse}
                      >
                        {" "}
                        <FontAwesomeIcon
                          className="text-primary icon-sidebar"
                          icon={faTruckFast}
                        />
                        Config Shipping Address
                      </NavLink>
                      <NavLink
                        to="/pick-to-sort"
                        tag={Link}
                        //   tag={NavLinkRRD}
                        //   onClick={closeCollapse}
                      >
                        <FontAwesomeIcon
                          className="text-primary icon-sidebar"
                          icon={faBoxesPacking}
                        />
                        Pick to Sort
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </NavItem>
            </Nav>
            <hr className="my-3" />
            <Nav navbar>
              <NavItem>
                <NavLink
                  to="/setting"
                  tag={Link}
                  //   tag={NavLinkRRD}
                  //   onClick={closeCollapse}
                >
                  <i className="ni ni-tv-2 text-primary" />
                  Master Configuration
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Sidebar;
