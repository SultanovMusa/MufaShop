import axios from "axios";
import { useState, useEffect } from "react";
import scss from "./AboutSection.module.scss";
import { useKeenSlider } from "keen-slider/react";
import Modal from "../modal/Modal";

const urls =
	"https://api.elchocrud.pro/api/v1/0d4fde59f5c1aed00b83d4e296c14443/todos";
const AboutSection = () => {
	const [foto, setFoto] = useState([]);
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
		const res = await axios.get(urls);
		setFoto(res.data);
	};

	useEffect(() => {
		getData();
	}, []);

	if (foto.length === 0) {
		return null;
	}

	return (
		<section className={scss.About}>
			<div className={scss.content}>
				<div className={scss.car}>
					<div ref={sliderRef} className="keen-slider">
						{foto.map((item, index) => (
							<div
								className="keen-slider__slide number-slide1"
								key={index}
								onClick={() => openModal(item)}>
								<div className={scss.card}>
									<h1>{item.name}</h1>
									<img className={scss.image} src={item.img} alt={item.name} />
									<p>{item.text}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{selectedCar && (
				<Modal isOpen={isModalOpen} onClose={closeModal}>
					<div className={scss.mustafa}>
						<h2>{selectedCar.name}</h2>
						<img
							className={scss.fotos}
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

export default AboutSection;
