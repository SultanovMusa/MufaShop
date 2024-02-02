import scss from "./Slider.module.scss";
import { useKeenSlider } from "keen-slider/react";
import Modal from "../modal/Modal";
import { useState } from "react";

const sliderData = [
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ohTPZswUl9q7gk6T4NKz0Z-FK0cubtfXNQ&usqp=CAU",
		title: " 14.000💲",
		text: "Мersedes-Bens AMG w210 жылы-2001 Германия  Абиом 5.5 автомат матор кличко Лупарик 🕶️! ",
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fWcUdacBobUFVibfhIvskMws1_4sLc4AqA&usqp=CAU",
		title: "39.000💲",
		text: " Мersedes-Bens AMG  w140  жылы-1997 Германия  Абиом 7.3 механика матор кличко Кабан 🐗 ! ",
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAAEF-nJG07_ns1Q95XmJHkMo8a--eGEBV5A&usqp=CAU",
		title: "70.500💲 ",
		text: "Мersedes-Bens AMG Cls_63 жылы-2014 Германия  Абиом 6.3  автомат матор кличко Banan🍌 !",
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmEo326gtE3v-vBeKluFWsj500-4MuFkDbTg&usqp=CAU",
		title: "9.000 💲 ",
		text: "Мersedes-Bens AMG E_124 жылы-1994 Германия  Абиом 2.5 автомат матор кличко Ешка 🚗! ",
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-qS5h8Z1g26-8mIGk60SxshIFnrlOXp139g&usqp=CAU",
		title: "90.000💲",
		text: "Мersedes-Bens AMG жылы-2019 Германия  Абиом 6.0  автомат матор кличко Глик 🔝💸!",
	},
];

const Slider = () => {
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 3,
		},
	});

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedCar, setSelectedCar] = useState(null);

	const openModal = (item) => {
		setSelectedCar(item);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setSelectedCar(null);
		setIsModalOpen(false);
	};

	return (
		<>
			<section className={scss.Slider}>
				<div className={scss.content}>
					<div className={scss.car} >
						<div ref={sliderRef} className="keen-slider">
							{sliderData.map((item, index) => (
								<div
									className="keen-slider__slide number-slide1"
									key={index}
									onClick={() => openModal(item)}>
									<div className={scss.card}>
										<h3>{item.title}</h3>
										<img className={scss.image} src={item.img} alt={item.title} />
										<p>{item.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{isModalOpen && (
				<Modal isOpen={isModalOpen} onClose={closeModal}>
			<div className={scss.mustafa}>
			<h2>{selectedCar.title}</h2>
					<img
						className={scss.fotos}
						src={selectedCar.img}
						alt={selectedCar.title}
					/>
					<p>{selectedCar.text}</p>
			</div>
				</Modal>
			)}
		</>
	);
};

export default Slider;
