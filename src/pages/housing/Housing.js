import '../../sass/pages/housing.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from '../../data/data'
import Header from "../../components/header/Header";
import Slider from "../../components/carousel/Carousel"
import Footer from "../../components/footer/Footer";
import Scroll from '../../components/scroll/Scroll';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';


export default function Housing() {
	
	const [imageSlider, setImageSlider] = useState([]);

	const idHousing = useParams('id').id;
	const dataCurrentHousing = datas.filter(data => data.id === idHousing);
	
	useEffect(() => {
		const dataCurrentHousing = datas.filter(data => data.id === idHousing);
		setImageSlider(dataCurrentHousing[0].pictures);
	}, [idHousing]);

	const name = dataCurrentHousing[0].host.name.split(' '); 
	const rating = dataCurrentHousing[0].rating;
	const description  = dataCurrentHousing[0].description;
	const equipments = dataCurrentHousing[0].equipments;

	return (
		<>
			<Header/>
			<Slider imageSlider={imageSlider}/>
			<main className="housing">
				<div className="housing_content">
					<div className="housing_content_infos">
						<h1>{dataCurrentHousing[0].title}</h1>
						<p>{dataCurrentHousing[0].location}</p>
						<div>
							{dataCurrentHousing[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="housing_content_host">
						<div>
							<div className='housing_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentHousing[0].host.picture} alt="Photo du responsable" />
						</div>
							
						<div className="housing_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="Etoiles note" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="housing_scroll">
					<div className="housing_scroll_item">
						<Scroll title={'Description'} content={description} />	
					</div>
					<div className="housing_scroll_item">
						<Scroll title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>
			<Footer/>
		</>
	)
}
