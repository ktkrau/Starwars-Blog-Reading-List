import React from "react";
import { Card } from "../component/card.js"
import image from "../../img/darth-vader.jpg";
import image1 from "../../img/luke.jpg";
import image2 from "../../img/Yoda.png";
import image3 from "../../img/leia.jpg";
import image4 from "../../img/chewbacca.jpg";
import image5 from "../../img/hansolo.jpg";
import image6 from "../../img/c3po.jpg";
import image7 from "../../img/r2d2.jpg";
import image8 from "../../img/planetas/Alderaan.jpg";
import image9 from "../../img/planetas/Endor.png";
import image10 from "../../img/planetas/Naboo.png";
import image11 from "../../img/planetas/Tatooine.png";
import image12 from "../../img/planetas/Dagobah.jpg";
import image13 from "../../img/planetas/Kashyyk.png";
import image14 from "../../img/planetas/Bogano.jpg";
import image15 from "../../img/planetas/Christophsis.jpg";
import "../../styles/home.css";

export const Home = () => {
	return (
		<div clasName="container">
			<div className="row">
				<div className="col-2"></div>
				<div className="col-8 titulo-personajes">
					<h1>Characters</h1>
				</div>
				<div className="col-2"></div>
			</div>
			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-2">
					<Card
						cardTitle="Darth Vader"
						cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada."
						cardBigButton="Learn more"
						cardImage={image}
					/>

				</div>
				<div className="col-md-2">
					<Card
						cardTitle="Luke Skywalker"
						cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada."
						cardBigButton="Learn more"
						cardImage={image1}
					/>

				</div>
				<div className="col-md-2">
					<Card
						cardTitle="Yoda"
						cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada."
						cardBigButton="Learn more"
						cardImage={image2}
					/>

				</div>
				<div className="col-md-2">
					<Card
						cardTitle="Leia Organa"
						cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada."
						cardBigButton="Learn more"
						cardImage={image3}
					/>

				</div>
				<div className="col-md-2"></div>

			</div>
			<div className="row">
			<div className="col-md-2"></div>
				<div className="col-md-2">
					<Card
						cardTitle="Chewbacca"
						cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada."
						cardBigButton="Learn more"
						cardImage={image4}
					/>

				</div>
				<div className="col-md-2">
					<Card
						cardTitle="Han Solo"
						cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada."
						cardBigButton="Learn more"
						cardImage={image5}
					/>

				</div>
				<div className="col-md-2">
					<Card
						cardTitle="C-3PO"
						cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada."
						cardBigButton="Learn more"
						cardImage={image6}
					/>

				</div>
				<div className="col-md-2">
					<Card
						cardTitle="R2-D2"
						cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada."
						cardBigButton="Learn more"
						cardImage={image7}
					/>

				</div>
				<div className="col-md-2"></div>
				
			</div>
			<div className="row">
				<div className="col-2"></div>
				<div className="col-8 titulo-planetas">
					<h1>Planets</h1>
				</div>
				<div className="col-2"></div>
			</div>
			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-2">
					<Card
						cardTitle="Alderaan"
						cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada."
						cardBigButton="Learn more"
						cardImage={image8}
					/>

				</div>
				<div className="col-md-2">
					<Card
						cardTitle="Endor"
						cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada."
						cardBigButton="Learn more"
						cardImage={image9}
					/>

				</div>
				<div className="col-md-2">
					<Card
						cardTitle="Naboo"
						cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada."
						cardBigButton="Learn more"
						cardImage={image10}
					/>

				</div>
				<div className="col-md-2">
					<Card
						cardTitle="Tatooine"
						cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada."
						cardBigButton="Learn more"
						cardImage={image11}
					/>

				</div>
				<div className="col-md-2"></div>

			</div>
			<div className="row">
			<div className="col-md-2"></div>
				<div className="col-md-2">
					<Card
						cardTitle="Dagobah"
						cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada."
						cardBigButton="Learn more"
						cardImage={image12}
					/>

				</div>
				<div className="col-md-2">
					<Card
						cardTitle="Kashyyk"
						cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada."
						cardBigButton="Learn more"
						cardImage={image13}
					/>

				</div>
				<div className="col-md-2">
					<Card
						cardTitle="Bogano"
						cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada."
						cardBigButton="Learn more"
						cardImage={image14}
					/>

				</div>
				<div className="col-md-2">
					<Card
						cardTitle="Christophsis"
						cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada."
						cardBigButton="Learn more"
						cardImage={image15}
					/>

				</div>
				<div className="col-md-2"></div>
				
			</div>

		</div>

	);
};