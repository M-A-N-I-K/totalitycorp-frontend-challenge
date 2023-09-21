import { Link } from "react-router-dom";

const Navbar = () => {
	const sofa: string = new URL(`../Images/icons/sofa.svg`, import.meta.url)
		.href;
	const terrace: string = new URL(
		`../Images/icons/terrace.svg`,
		import.meta.url
	).href;
	const bed: string = new URL(`../Images/icons/bed.svg`, import.meta.url).href;
	const office: string = new URL(`../Images/icons/office.svg`, import.meta.url)
		.href;
	const outdoor: string = new URL(
		`../Images/icons/outdoor-cafe.svg`,
		import.meta.url
	).href;
	const mattress: string = new URL(
		`../Images/icons/bed-2.svg`,
		import.meta.url
	).href;

	return (
		<nav className="bg-gray-800">
			<div className="container flex">
				<div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
					<span className="text-white">
						<svg
							version="1.1"
							id="Capa_1"
							className="w-4 h-4"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							viewBox="0 0 283.426 283.426"
							xmlSpace="preserve"
							fill="#000000"
						>
							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
							<g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"
							></g>
							<g id="SVGRepo_iconCarrier">
								{" "}
								<g>
									{" "}
									<rect
										x="0"
										y="40.84"
										style={{ fill: "currentColor" }}
										width="283.426"
										height="47.735"
									></rect>{" "}
									<rect
										x="0"
										y="117.282"
										style={{ fill: "currentColor" }}
										width="283.426"
										height="47.735"
									></rect>{" "}
									<rect
										x="0"
										y="194.851"
										style={{ fill: "currentColor" }}
										width="283.426"
										height="47.735"
									></rect>{" "}
								</g>{" "}
							</g>
						</svg>
					</span>

					<span className="capitalize ml-2 text-white hidden">
						All Categories
					</span>
					<div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
						<a
							href="#"
							className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
						>
							<img
								src={sofa}
								alt="sofa"
								className="w-5 h-5 object-contain"
							/>
							<span className="ml-6 text-gray-600 text-sm">Sofa</span>
						</a>
						<a
							href="#"
							className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
						>
							<img
								src={terrace}
								alt="terrace"
								className="w-5 h-5 object-contain"
							/>
							<span className="ml-6 text-gray-600 text-sm">Terrace</span>
						</a>
						<a
							href="#"
							className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
						>
							<img
								src={bed}
								alt="bed"
								className="w-5 h-5 object-contain"
							/>
							<span className="ml-6 text-gray-600 text-sm">Bed</span>
						</a>
						<a
							href="#"
							className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
						>
							<img
								src={office}
								alt="office"
								className="w-5 h-5 object-contain"
							/>
							<span className="ml-6 text-gray-600 text-sm">Office</span>
						</a>
						<a
							href="#"
							className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
						>
							<img
								src={outdoor}
								alt="outdoor"
								className="w-5 h-5 object-contain"
							/>
							<span className="ml-6 text-gray-600 text-sm">Outdoor</span>
						</a>
						<a
							href="#"
							className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
						>
							<img
								src={mattress}
								alt="Mattress"
								className="w-5 h-5 object-contain"
							/>
							<span className="ml-6 text-gray-600 text-sm">
								Mattress
							</span>
						</a>
					</div>
				</div>

				<div className="flex items-center justify-between flex-grow md:pl-12 py-5">
					<div className="flex items-center space-x-6 capitalize">
						<Link
							to="/"
							className="text-gray-200 hover:text-white transition"
						>
							Home
						</Link>
						<Link
							to="/"
							className="text-gray-200 hover:text-white transition"
						>
							Shop
						</Link>
						<Link
							to="/"
							className="text-gray-200 hover:text-white transition"
						>
							About us
						</Link>
						<Link
							to="/"
							className="text-gray-200 hover:text-white transition"
						>
							Contact us
						</Link>
					</div>
					<Link
						to="/login"
						className="text-gray-200 hover:text-white transition"
					>
						Login
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
