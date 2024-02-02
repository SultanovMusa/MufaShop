// ContactSection.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import scss from "./ContactSection.module.scss";
import { useKeenSlider } from "keen-slider/react";
import Modal from "../modal/Modal";

const url =
	"https://api.elchocrud.pro/api/v1/2bd3f19aeaa575cc7b19079dbc25bf8b/muxa";

const ContactSection = () => {
	const [data, setData] = useState([]);
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 3,
		},
	});

	const [selectedCar, setSelectedCar] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (car) => {
		setSelectedCar(car);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setSelectedCar(null);
		setIsModalOpen(false);
	};

	const getData = async () => {
		const res = await axios.get(url);
		setData(res.data);
	};

	useEffect(() => {
		getData();
	}, []);

	if (data.length === 0) {
		return null;
	}

	return (
		<section className={scss.Contact}>
			<div className={scss.content}>
				<div className={scss.car}>
					<div ref={sliderRef} className="keen-slider">
						{data.map((item, index) => (
							<div className="keen-slider__slide number-slide1" key={index}
								onClick={() => openModal(item)}>
								<div className={scss.cars}>
									<h1>{item.name}</h1>
									<img className={scss.imgs} src={item.img} alt={item.name} />
									<p>{item.text}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{selectedCar && (
				<Modal isOpen={isModalOpen} onClose={closeModal}>
					<div className={scss.mufa}>
						<h2>{selectedCar.name}</h2>
						<img
							className={scss.foto}
							src={selectedCar.img}
							alt={selectedCar.name}
						/>
						<p>{selectedCar.text}</p>
					</div>
				</Modal>
			)}
		</section>
	);
};

export default ContactSection;
