import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import scss from "./Header.module.scss";

const links = [
	{
		name: "MERS",
		href: "/",
	},
	{
		name: "ДУХИ",
		href: "/about",
	},
	{
		name: "Lexus",
		href: "/contact",
	},
];

const Header = () => {
	const location = useLocation();
	console.log(location.pathname);

	return (
		<>
			<header className={scss.Header}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.logo}>
							<h1>Духи:</h1>
							<div>
								<div className={scss.cnt}>
									<h1>Машина Базар :</h1>
									<input
										className={scss.inp}
										type="text"
										placeholder="ПОИС🍳"
									/>
								</div>
							</div>
							<nav>
								<ul>
									{links.map((item, indexs) => (
										<li key={indexs}>
											<NavLink
												to={item.href}
												className={
													location.pathname === item.href
														? `${scss.link} ${scss.active}`
														: `${scss.link}`
												}>
												{item.name}
											</NavLink>
										</li>
									))}
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
