//component imports
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from './Navbar';

//food image imports
import Eatingpeople from './img/Eatingpeople.avif';
import MontgomeryInn from './img/MontgomeryInn.jpg';
import JeffRubys from './img/JeffRubys.jpg';
import Aglamesis from './img/Aglamesis.jpg';
import Deweys from './img/Deweys.jpg';
import Graeters from './img/Graeters.jpg';
import Ando from './img/Ando.jpg';
import Maple from './img/Maple.jpg';
import BonBon from './img/BonBon.jpg';
import Tonys from './img/Tonys.jpg';
import Belgium from './img/Belgium.jpg';


class Food extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <h3 className="title">Delicious Dining</h3>
        <br />
        <img src={Eatingpeople} alt="Eatingpeople" />
        <br />
        <p>We are the connoisseurs of great food, and Cincinnati definitely fits the bill.  There's an array of selections: steak houses, Italian eateries, and much more.  Come take a scrumptious journey, and step on the scene with Cincy Finds; we'll find something tasty for you to eat!</p>
        <br />
        <br />
        <h4 className="rest">Montgomery Inn at the Boathouse</h4>
        <br />
        <img src={MontgomeryInn} alt="MontgomeryInn" />
        <br />
        <p className="des">This cute and quaint American restaurant serves delicious barbecue and adult beverages; they have anything from slabs of ribs to barbecue pulled pork sandwhiches, as well as succulent sweets!  They also offer gluten-free options, so there's something for everyone here at the Boathouse.</p>
        <br />
        <div className="modal">
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Montgomery Inn at the Boathouse</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ul>
                        <li>Address: 925 Riverside Dr., Cincinnati, OH 45202</li>

                        <li>Phone number: (513) 721-7427</li>

                        <li>Hours: Tue-Fri: 4p-10p <br /> Sat, Sun: 3p-10p</li>

                        <li>4.0 rating</li>

                        <li>Price range: $12-$40</li>
                    </ul>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>

            </Modal.Dialog>
        </div>
        <h4 className="rest">Jeff Ruby's Steakhouse</h4>
        <br />
        <img src={JeffRubys} alt="JeffRubys" />
        <br />
        <p>If you love steak, Jeff Ruby's Steakhouse is the place to get it!  Their steaks are juicy, tender, and absolutely delicious!  They offer sushi, desserts, salads, and a tasty wine menu; this versatile steakhouse even has a menu section for children, as well as gluten-free dishes!  This place would be a wonderful place to take the family; there's an option for any and everybody!</p>
        <br />
        <div className="modal">
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Jeff Ruby's Steakhouse</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ul>
                        <li>Address: 505 Vine St., Cincinnati, OH 45202</li>

                        <li>Phone number: (513) 784-1200</li>

                        <li>Hours: Mon-Thurs: 5p-10p <br /> Fri, Sat: 5p-11p <br /> Sun: 4:30p-9p</li>

                        <li>4.5 rating</li>

                        <li>Price range: $41-$80</li>

                        <li>Traveler's Choice 2023</li>
                    </ul>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>

            </Modal.Dialog>
        </div>

        <h4 className="rest">Aglamesis Bros.</h4>
        <br />
        <img src={Aglamesis} alt="Aglamesis" />
        <br />
        <p>Aglamesis Bros. is an adorable and tasty American dessert shop, where you'll find delicious sweets trhroughout the establishment.  If you have a sweet tooth, this dessert cafè is the place to go!  From ice cream sundaes to candy, they've got it all!</p>
        <div className="modal">
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Aglamesis Bros.</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ul>
                        <li>Address: 3046 Madison Rd., Cincinnati, OH 45209</li>

                        <li>Phone number: (513) 531-5196</li>

                        <li>Hours: Mon-Thurs: 10a-10:30p <br /> Fri, Sat: 10a-11p <br /> Sun: 12p-10:30p</li>

                        <li>5.0 rating</li>

                        <li>Price range: $3-$20</li>
                    </ul>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>

            </Modal.Dialog>
        </div>

        <h4 className="rest">Dewey's Pizza</h4>
        <br />
        <img src={Deweys} alt="Deweys" />
        <br />
        <p>Dewey's Pizza has the most cheesy and flavorful pizza; as an all Italian eatery, they really know how to serve a good pizza; they use fresh ingredients and homemake all the dishes, and the taste is out of this world.  They offer choices of pizza, salads, calzones, and they even have a create your own option!  They also offer great vegetarian-friendly and gluten-free dishes for those who need them.  This pizzeria really defines quality, and is considered a Jack of All Trades.</p>
        <div className="modal">
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Dewey's Pizza</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ul>
                        <li>Address: 265 Hosea Ave., Cincinnati, OH 45220</li>

                        <li>Phone number: (513) 221-0400</li>

                        <li>Hours: Mon-Thurs: 11a-9p <br /> Fri, Sat: 11a-10p <br /> Sun: 4p-9p</li>

                        <li>4.5 rating</li>

                        <li>Price range: $5-$23</li>
                    </ul>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>

            </Modal.Dialog>
        </div>

        <h4 className="rest">Graeter's Ice Cream</h4>
        <br />
        <img src={Graeters} alt="Graeters" />
        <br />
        <p>Graeter's offers a wide selection of delicious ice cream; they have everything from vanilla bean to cookie doygh chocolate chip flavors.  They also have sorbets, milkshakes, and sundaes; they even have mini tubs of their ice cream, so you can enjoy their sweet ice cream at home! They're basically a complete paradise for sweet lovers. Come to Graeter's and satisfy that sweet tooth!</p>
        <div className="modal">
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Graeter's Ice Cream</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ul>
                        <li>Address: 511 Walnut St., Cincinnati, OH 45202</li>

                        <li>Phone number: (513) 977-4129</li>

                        <li>Hours: Mon: 1a-9:30a <br /> Tues: 1a-8a <br /> Wed, Thurs: 2a-8a <br /> Fri-Sun: 1:30a-8a</li>

                        <li>4.5 rating</li>

                        <li>Wheelchair accessbile</li>
                    </ul>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>

            </Modal.Dialog>
        </div>

        <h4 className="rest">Ando Japanese Restaurant & Sushi Bar</h4>
        <br />
        <img src={Ando} alt="Ando" />
        <br />
        <p>Ando Japanese Restaurant is quite the fancy dining experience; this restaurant has a wonderful atmosphere, and great food to enjoy!  They serve Udon noodles, Gyoza, and even sushi!  They even serve delicious yaki tori, which is absolutely amazing!  The menu also has vegetarian, vegan, and gluten-free options to choose from if needed.  There's also a bar for the adults to sit at and enjoy their food and drinks of choice.  It's a great place to have a drink and relax, or to treat loved ones and friends; come to Ando today for a lovely eveining out!</p>
        <div className="modal">
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Ando Japanese Restaurant and Sushi Bar</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ul>
                        <li>Address: 11255 Hartman Hwy., Blue Ash, OH 45242</li>

                        <li>Phone number: (513) 954-0041</li>

                        <li>Hours: Tues-Sat: 5p-9p</li>

                        <li>4.5 rating</li>
                    </ul>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>

        <h4 className="rest">Maplewood Kitchen & Bar</h4>
        <br />
        <img src={Maple} alt="Maple" />
        <br />
        <p>This kitchen and bar is a wonderful place to just kick back and relax, and they have a beautiful wooden bar for you to do so!  They're the type of restaurant that serves quick bites to eat, like burgers and fries, salmon, and even breakfast items like blueberry pancakes and yogurt parfaits.  There's also vegetarian, vegan, and gluten-free dishes for anyone who needs them.  Whether breakfast, lunch, dinner, or even a nice brunch, Maplewood Kitchen & Bar's got you covered!</p>

        <div className="modal">
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Maplewood Kitchen & Bar</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ul>
                        <li>Address: 525 Race St., Cincinnati, OH 45202</li>

                        <li>Phone number: (513) 421-2100</li>

                        <li>Hours: Mon-Thurs: 7a-9p <br /> Fri: 7a-10p <br /> Sat: 8a-10p <br /> Sun: 8a-9p</li>

                        <li>4.5 rating</li>
                    </ul>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>

            </Modal.Dialog>
        </div>

        <h4 className="rest">The BonBonerie</h4>
        <br />
        <img src={BonBon} alt="BonBon" />
        <br />
        <p>The BonBonerie is a cute dessert cafè that has a fun yet fancy vibe.  The servers actually put the desserts you ordered on a dessert tray for presentation, and they even have doilies under the plates on each table.  Their aesthetic is like a mordern-day, fancy English tea party, and their sweets are light, fluffy, and delicious.  They have a delectable selection of desserts to try; they offer macaroons, cakes, cupcakes, cookies, and many more!  They even serve lunch food for those that would rather pass on dessert.  In the mood for fancy desserts?  Head to The BonBonerie</p>

        <div className="modal">
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>The BonBonerie</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ul>
                        <li>Address: 2030 Madison Dr., Cincinnati, OH 45208</li>

                        <li>Phone number: (513) 321-3399</li>

                        <li>Hours: Mon-Fri: 7:30a-5:30p <br /> Sat: 8a-4p</li>

                        <li>4.5 rating</li>
                    </ul>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>

            </Modal.Dialog>
        </div>

        <h4 className="rest">Tony's of Cincinnati</h4>
        <br />
        <img src={Tonys} alt="Tonys" />
        <br />
        <p>Tony's is an American steakhouse that has a fancy rustic feel to the atmosphere and dècor.  It's a lovely place to take your family or significant other for a fancy night out.  Their menu covers a range of meals: they serve seafood, like beef tartare, steaks, salads, and they have some amazing wine selections as well.  They also offer a bar menu, which is more for a quick bite as opposed to a full sitdown meal.  There's vegetarian and gluten-free options for anyone in need.  A special occassion, or just showing appreciation for someone, Tony's of Cincinnati is a great place to do so.</p>
        <div className="modal">
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Tony's of Cincinnati</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ul>
                        <li>Reservations recommended/required</li>

                        <li>Price range: $44-$69</li>

                        <li>Address: 12110 Montgomery Rd., Cincinnati, OH 45249</li>

                        <li>Phone number: (513) 677-8669</li>

                        <li>Hours: Sun, Mon: 5p-9p <br /> Tues-Thurs: 5p-10p <br /> Fri, Sat: 5p-11p</li>

                        <li>4.5 rating</li>
                    </ul>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>

            </Modal.Dialog>
        </div>

        <h4 className="rest">Taste of Belgium - Over the Rhine</h4>
        <br />
        <img src={Belgium} alt="Belgium" />
        <br />
        <p>Cute, quaint, and delicious, Taste of Belgium comes to give you great flavor profiles that are considered staples in Belgium.  This place definitely has the rustic charm as a European restaurant; they serve frites, crêpes, and much more.  They also made sure to have vegetarian, vegan, and gluten-free options, so there'll be something for everyone.  They'll take your favorites and put a Belgian twist on it!</p>
        <div className="modal">
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Taste of Belgium</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ul>
                        <li>Price range: $7-$25</li>

                        <li>Address: 1135 Vine St., Cincinnati, OH 45202</li>

                        <li>Phone number: (513) 396-5800</li>

                        <li>Hours: Mon, Tues: 8a-3p <br /> Wed, Thurs: 8a-9p <br /> Fri, Sat: 8a-10p <br /> Sun: 8a-8p</li>

                        <li>4.5 rating</li>
                    </ul>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>

        {/*FOOTER*/}
      </div>
    )
  }
}



export default Food