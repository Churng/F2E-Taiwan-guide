import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../../share/Header";
import Footer from "../../share/Footer";
import Button from "react-bootstrap/Button";

// 圖片
import banner from "../../public/image/background-place.png";
import Logo from "../../public/Logo.png";
import title_1 from "../../public/image/place/place_title_1.png";
import title_2 from "../../public/image/place/place_title_2.png";
import search from "../../public/icon/icon/search.svg";
import menu from "../../public/icon/icon/Menu-1.svg";
export default function place() {
	return (
		<div className="place">
			<Head>
				<title>台灣旅遊導覽-景點</title>
				<meta name="description" content="台灣旅遊導覽" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Header />
				<main>
					<div className="contain d-none d-md-block position-relative ">
						<Image src={banner} layout="responsive" alt="photo" className="" />
						<div className="position-absolute top-0 start-50 translate-middle-x pt-4">
							<Image src={Logo} alt="*" className="logo" width={130} height={100}></Image>
						</div>
						<div className="d-flex flex-column position-absolute top-50 start-50 translate-middle pt-5">
							<div className="">
								<Image src={title_1} alt="*" width={200} height={180}></Image>
								<Image src={title_2} alt="*" width={200} height={180}></Image>
							</div>

							<div className="d-flex align-items-center">
								<div className="input-group my-3 ">
									<input
										type="text"
										className="form-control"
										placeholder="請輸入關鍵字"
										aria-label="Username"
										aria-describedby="basic-addon1"
									/>
									<button className="input-group-text" id="basic-addon1">
										<Image src={search} alt="*"></Image>
									</button>
								</div>
								<button className="d-flex search ms-3" type="button">
									<Image src={menu} alt="*"></Image>
									<p className="ms-2">進階搜尋</p>
								</button>
							</div>
						</div>
					</div>

					<div
						style={{ position: "relative", width: "100%", height: "500px" }}
						className="contain d-block d-md-none "
					>
						<Image src={banner} layout="fill" objectFit="cover" alt="photo" className="" />
					</div>

					<div className="block">
						<div className="container-fluid card-group">
							<div className="w-100 d-flex justify-content-between py-2 px-3">
								<p className="fs-2 fw-bold">熱門景點</p>
								<Link href="/place">
									<a>
										<Button variant="outline-light">查看更多</Button>
									</a>
								</Link>
							</div>
						</div>
					</div>

					<div className="block">
						<div className="container-fluid card-group-food mt-5">
							<div className="w-100 d-flex justify-content-between py-2 px-3">
								<p className="fs-2 fw-bold">網紅攻略</p>
								<Button variant="outline-light">查看更多</Button>
							</div>
						</div>
					</div>

					<div className="block">
						<div className="container-fluid card-group-stay mt-5">
							<div className="w-100 d-flex justify-content-between py-2 px-3">
								<p className="fs-2 fw-bold">主題景點</p>
								<Button variant="outline-light">查看更多</Button>
							</div>
						</div>
					</div>
				</main>
			</main>
			<Footer />
		</div>
	);
}
