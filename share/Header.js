import Link from "next/link";
import Image from "next/image";

import SearchIcon from "../public/icon/icon/search.svg";
import LoginIcon from "../public/icon/icon/person.svg";
export default function header({ children }) {
	return (
		<>
			<header className="d-flex flex-wrap justify-content-end py-4  sticky-top">
				<h1 className="hidden"></h1>

				<ul className="nav nav-pills">
					<li className="nav-item">
						<Link href="#">
							<a className="nav-link" aria-current="page">
								活動新訊
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href="#">
							<a className="nav-link">景點</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href="#">
							<a href="#" className="nav-link">
								美食
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href="#">
							<a href="#" className="nav-link">
								交通
							</a>
						</Link>
					</li>
					<li className="nav-item p-1">
						<Link href="#">
							<a>
								<Image src={SearchIcon} alt="Search Somthing" />
							</a>
						</Link>
					</li>
					<li className="nav-item p-1 login-member">
						<Link href="#">
							<a>
								<Image src={LoginIcon} alt="Search Somthing" />
							</a>
						</Link>
					</li>
				</ul>
			</header>
		</>
	);
}
