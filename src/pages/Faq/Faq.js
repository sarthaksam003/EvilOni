import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Faq.css";
const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Evil Oni - Frequently Asked Questions";

    // eslint-disable-next-line
  }, []);
  return (
    <React.Fragment>
      <div className="faq-layout">
        <div className="heading">
          <h1 className="heading">Frequently Asked Questions</h1>
        </div>
        <div className="container">
          <Tabs>
            <TabList>
              <Tab>
                <p className="tab-heading">ORDERS & PAYMENT</p>
              </Tab>
              <Tab>
                <p className="tab-heading">SHIPPING & TRACKING</p>
              </Tab>
              <Tab>
                <p className="tab-heading">RETURNS, EXCHANGE & REFUND</p>
              </Tab>
              <Tab>
                <p className="tab-heading">MISCELLANIOUS</p>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="container">
                <Accordion style={{ width: "100%" }}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="panel-content">
                      How to place an order?
                    </Accordion.Header>
                    <Accordion.Body className="panel-content">
                      <br />
                      To place your order, follow these steps :
                      <ul>
                        <br />
                        <li>
                          Browse through our wide range of products until you
                          find something you like. After you’ve chosen what you
                          want, select the relevant size, if applicable. You can
                          check out our size chart for reference{" "}
                          <Link
                            to="/size-chart"
                            style={{
                              fontWeight: "550",
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            here
                          </Link>
                          .
                        </li>
                        <li>
                          Once you’re done, click the ‘Add To Cart’ button.
                        </li>
                        <li>
                          After you have added all the products, click on the
                          cart icon on the top right. You can either choose to
                          continue shopping or confirm the order and click
                          ‘Checkout’.
                        </li>
                        <li>
                          From there, you can either login to your existing The
                          Souled Store account or simply continue as a 'New
                          User' and create one.
                        </li>
                        <li>
                          Once you’re done, proceed to checkout, confirm your
                          shipping address, and select the desired payment
                          method to confirm your order by clicking ‘Place
                          Order’.
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="panel-content">
                      How do I check the status of my order?
                    </Accordion.Header>
                    <Accordion.Body className="panel-content">
                      <ul>
                        <li>
                          After your order has been successfully placed, you
                          will immediately receive a confirmation and order
                          details via email and SMS. Once your products have
                          been shipped, you will be notified again via email,
                          SMS and Whatsapp.
                        </li>
                        <li>
                          In case there is any unusual event or complication
                          that leads to a delay in shipping your order, you will
                          immediately receive an update from our end- with
                          reasons and the revised shipping and delivery
                          timelines.
                        </li>
                        <li>
                          If there are any other issues/ delays that come up, or
                          you need the order to be delivered urgently, write to
                          us at connect@eviloni.com, we will see what we can do
                          to help.
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="panel-content">
                      Why can’t I see the Cash On Delivery (COD) option?
                    </Accordion.Header>
                    <Accordion.Body className="panel-content">
                      <ul>
                        <li>
                          If the Cash On Delivery (COD) option is not showing,
                          it’s because this facility is unavailable for your
                          postal code. You can either pay by Debit Card, Credit
                          Card, or Net Banking, or you can get the products
                          delivered to an alternate address (where COD is
                          available).
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className="panel-content">
                      Is there any additional charge for Cash On Delivery (COD)
                      orders?
                    </Accordion.Header>
                    <Accordion.Body className="panel-content">
                      <ul>
                        <li>
                          Yes, we charge a flat fee of ₹25 for Cash On Delivery
                          (COD) orders.
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className="panel-content">
                      I wish to add few more products in my order. Will it be
                      possible?
                    </Accordion.Header>
                    <Accordion.Body className="panel-content">
                      <ul>
                        <li>
                          Once you have confirmed the order and we have accepted
                          it, you cannot add any more products to your order.
                          You will have to place a fresh order for the other
                          products.
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header className="panel-content">
                      How do I cancel the order I have placed?
                    </Accordion.Header>
                    <Accordion.Body className="panel-content">
                      <ul>
                        <li>
                          The 'Cancel' option will only be available before your
                          order is shipped. If you are facing an issue, please
                          email us at{" "}
                          <p
                            style={{
                              display: "inline",
                              fontWeight: "550",
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            connect@eviloni.com
                          </p>{" "}
                          and we will sort it for you.
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="panel-content container">
                <Accordion style={{ width: "100%" }}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="panel-content">
                      Can I modify the shipping address of my order before it
                      has been shipped?
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          Sorry, that is not possible at the moment as the
                          system would have already passed the mobile number and
                          address to our warehouse to pack and ship your
                          product. That said, we never say never! You can always
                          cancel the order before it has been packed and can
                          place a new order. Don't worry, there are no
                          cancellation charges.
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="panel-content">
                      How long will it take for my order to be delivered?
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          Orders in India, once shipped, are typically delivered
                          in 1-4 business days in metros, and 4-7 business days
                          for the rest of India. Delivery time may vary
                          depending upon the shipping address and other factors
                          (public holidays, extreme weather conditions, etc.).
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="panel-content">
                      When will my products on pre-order be shipped?
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          We ship pre-order products on the date given in the
                          product description, as far as possible. However,
                          there may be a slight delay in shipping in case of an
                          unforeseen surge in demand or any similar issue. Rest
                          assured, our customer experience team will keep you
                          updated on the status of your order.
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className="panel-content">
                      Are there any additional shipping charges?
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          Evil Oni provides FREE shipping for all orders above
                          ₹445 in India. A shipping charge of ₹50 is payable
                          only on orders below ₹445. Minimum order value should
                          be ₹199 (excluding GST).
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className="panel-content">
                      How do I track my order?
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          You can track your order once it has been dispatched
                          from our warehouse. An email, SMS, and Whatsapp
                          notification will be sent with a link.
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="panel-content container">
                <Accordion style={{ width: "100%" }}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="panel-content">
                      What are the terms of the Return Policy?
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          Customers can return their order within 30 days after
                          an order has been delivered. We have a reverse pick up
                          facility for most pin codes. For pin codes that are
                          non- serviceable by our courier partners against the
                          reverse pick up policy, you will have to self ship the
                          product(s).
                        </li>
                        <li>
                          In the interest of hygiene, we may refuse returns
                          where it's obvious that the item has been worn, washed
                          or soiled. Defective products need not be sent back to
                          us, unless confirmed by the Customer Experience Team.
                          If you have received a defective product, send us
                          images at
                          <p
                            style={{
                              display: "inline",
                              fontWeight: "550",
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            {" "}
                            connect@eviloni.com
                          </p>{" "}
                          and we will get back to you. Once confirmed by the
                          Customer Experience Team the refund will be provided
                          into your bank account.
                        </li>
                        <li>Gift cards/vouchers are non-refundable.</li>
                        <li>
                          We do not accept returns on products without their
                          tags or products which have been worn to maintain
                          strict hygiene and COVID-19 standards of our products.
                          Evil Oni may, at its discretion and without prior
                          notice, change the products or categories to which
                          this policy would apply.
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="panel-content">
                      What are the terms of the Exchange Policy?
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          You can apply for an exchange for your order within 30
                          days after an order has been delivered. We have a
                          reverse pick up facility for most pin codes.
                        </li>
                        <li>
                          Exchanges can only be done for the same products in a
                          different size. It cannot be exchanged for another
                          design in the same product category or against any
                          other product across our website/app.
                        </li>
                        <li>
                          We do not accept exchanges on products without their
                          tags or products which have been worn to maintain
                          strict hygiene and COVID-19 standards of our products.
                          Evil Oni may, at its discretion and without prior
                          notice, change the products or categories to which
                          this policy would apply.
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="panel-content">
                      The product I want to return was bought on discount. Will
                      I get refunded the full amount?
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          No. You will only receive the exact amount paid for
                          the product.
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className="panel-content">
                      In case I return the products, will the
                      COD/Shipping/Gifting charges be credited back?
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          No. These are charges applicable each time an order is
                          placed and are non-refundable.
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="panel-content container">
                <Accordion style={{ width: "100%" }}>
                  <div className="panel-content">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="panel-content">
                        Will I automatically receive marketing emails from you
                        after registration?
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            You will automatically get subscribed to our
                            marketing emails and SMS's after registering with
                            us. In case you do not want to receive these, you
                            can click on the unsubscribe link in the email.
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header className="panel-content">
                        Can I try the product before buying?
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            We only sell online so there is no try-and-buy
                            option available. However, in order to make sure you
                            in pick the right size, we have a size chart with
                            measurements
                            <Link
                              to="/size-chart"
                              style={{
                                fontWeight: "550",
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {" "}
                              here
                            </Link>
                            . For any queries, please write to us at
                            <p
                              style={{
                                display: "inline",
                                fontWeight: "550",
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {" "}
                              connect@eviloni.com
                            </p>
                            .
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header className="panel-content">
                        The product I want to return was bought on discount.
                        Will I get refunded the full amount?
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            No. You will only receive the exact amount paid for
                            the product.
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                </Accordion>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Faq;
