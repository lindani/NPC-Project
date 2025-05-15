import { Menu, X, HeartHandshake, UserPlus, Quote, Info, Target } from "lucide-react"; // import your desired icons
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast';

import logo from '../assets/logo4.png'
import { navItems } from '../constants'
import showCustomToast from './ui/CustomToast'
const Navbar = () => {
	const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleNavbar = () => {
		setMobileDrawerOpen(!mobileDrawerOpen);
	}

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

  return (
		<nav
			className={`sticky top-0 z-50 backdrop-blur-lg transition-all duration-300 ${
				isScrolled
					? 'bg-white/10 shadow-md py-3 border-b border-neutral-700/80'
					: 'bg-transparent py-5'
			}`}
			>
			<div className="container px-4 mx-auto relative text-sm">
				<div className="flex justify-between items-center">
					<div className="flex items-center flex-shrink-0">
						<img className="h-12 w-12 mr-2" src={logo} alt="logo" />
						<a href="#" className={`font-bold text-xl ${isScrolled ? 'text-orange-800' : 'text-white'}`}>
							Ndithini Foundation
						</a>
					</div>
					<ul className={`hidden lg:flex ml-14 space-x-12 ${isScrolled ? 'text-orange-800' : 'text-white'}`}>
						{
							navItems.map((item, index)=>(
								<li key={index}>
									<a href={item.href}>{item.label}</a>
								</li>
							))
						}
					</ul>
					<div className="hidden lg:flex justify-center space-x-12 items-center">

						<a
							href="#"
							onClick={(e) => {
								e.preventDefault();
								toast('Support Us feature comming soon!',
									{
										icon: '👏',
										style: {
											borderRadius: '10px',
											background: '#333',
											color: '#fff',
										},
									}
								);
							}}
							className={`py-2 px-3 border rounded-md ${isScrolled ? 'text-orange-800' : 'text-white'}`}
						>
							Support Us
						</a>

						<a
							className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md'
							href="#"
							onClick={(e) => {
								e.preventDefault();
								toast('Create Account feature comming soon!',
									{
										icon: '👏',
										style: {
											borderRadius: '10px',
											background: '#333',
											color: '#fff',
										},
									}
								);
							}}
						>
							Create an account
						</a>
					</div>
					<div className={`lg:hidden md:flex flex-col justify-end ${isScrolled ? 'text-orange-800' : 'text-white'}`}>
						<button onClick={toggleNavbar}>
							{
								mobileDrawerOpen ? <X /> : <Menu />
							}
						</button>
					</div>
				</div>
				{
					mobileDrawerOpen && (
						<div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
							<ul className="space-y-6 text-lg">
								{navItems.map((item, index) => (
									<li key={index} className="flex items-center space-x-3 hover:text-orange-500 transition">
										{item.label === 'Testimonials' && <Quote size={20} />}
										{item.label === 'About' && <Info size={20} />}
										{item.label === 'Objectives' && <Target size={20} />}
										<a href={item.href}>{item.label}</a>
									</li>
								))}
							</ul>
							<div className="flex flex-col space-y-4 w-full mt-8">
								<a
									onClick={(e) => {
										e.preventDefault();
										toast('Support Us feature comming soon!',
											{
												icon: '👏',
												style: {
													borderRadius: '10px',
													background: '#333',
													color: '#fff',
												},
											}
										);
									}}
									href="#"
									className="flex items-center justify-center gap-2 py-2 px-4 border border-orange-700 rounded-md hover:bg-orange-700 transition"
								>
									<HeartHandshake size={18} /> Support Us
								</a>
								<a
									onClick={(e) => {
										e.preventDefault();
										toast('Create Account feature comming soon!',
											{
												icon: '👏',
												style: {
													borderRadius: '10px',
													background: '#333',
													color: '#fff',
												},
											}
										);
									}}
									href="#"
									className="flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-800 text-white rounded-md hover:opacity-90 transition"
								>
									<UserPlus size={18} /> Create an Account
								</a>
							</div>
						</div>
					)
				}
			</div>
		</nav>
	)
}

export default Navbar