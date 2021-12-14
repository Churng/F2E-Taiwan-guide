import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../../share/Header";
import Footer from "../../share/Footer";
import Button from "react-bootstrap/Button";
import CardPlaceInside from "../../component/section/card-place-inside";
// import CardSpot from "../../component/section/card-spot";
import CardKol from "../../component/section/card-kol";
// 圖片
import banner from "../../public/image/background-place.png";
import Logo from "../../public/Logo.png";
import title_1 from "../../public/image/place/place_title_1.png";
import title_2 from "../../public/image/place/place_title_2.png";
import search from "../../public/icon/icon/search.svg";
import menu from "../../public/icon/icon/Menu-1.svg";
import spot_main from "../../public/image/spot/img-spot-main.png";
import map from "../../public/map.png";
import tel from "../../public/icon/icon/telephone.svg";
export default function hotspot() {
	return (
		<div className="place">
			<Head>
				<title>台灣旅遊導覽-熱門景點</title>
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
						<div className="container-fluid ">
							<div className="w-100 d-flex justify-content-between py-4 px-3">
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item text-decoration-none">
											<a href="#">景點</a>
										</li>
										<li className="breadcrumb-item text-decoration-none">
											<a href="#">北部地區</a>
										</li>
										<li className="breadcrumb-item active text-decoration-none" aria-current="page">
											台北市
										</li>
									</ol>
								</nav>
							</div>
						</div>

						<div className="container-fluid">
							<div className="row d-flex mb-4">
								<div className="col">
									<Image src={spot_main} alt="*" layout="fixed" width={1000} height={850} />
								</div>
								<div className="col">
									<div className="d-flex flex-column align-items-center justify-content-center mx-auto">
										<h3 className="fs-1 fw-bold ">台北市</h3>
										<p className="text-wrap fs-5 mt-5 lh-lg" style={{ width: "12em" }}>
											在臺北，您每個所到之處，多樣的文化特質都充沛鼓動著。雕龍畫棟的廟宇與現代的街道完美吻合，還有許多世界級餐廳隨時提供您最正統的各式中華料理。別忘了，美味的夜市小吃不僅僅帶給您口腹的滿足，更是引領您體驗臺灣生活的理想去處。
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="block">
						<div className="container-fluid">
							<div className="row">
								<div className="col-12 col-md-6 p-5">
									<ul>
										<li className="mb-5">
											<h2 className="fs-1">景點資訊</h2>
										</li>
										<li className="mb-5">
											<p className="fs-3">
												地址&nbsp; &nbsp; <span className="">臺北市信義區信義路5段7號</span>
											</p>
										</li>
										<li className="mb-5">
											<p className="fs-3">
												電話&nbsp; &nbsp;
												<span className="border rounded  border-secondary rounded-3">
													0912345678
													<Image src={tel} alt="*" className="ms-3"></Image>
												</span>
											</p>
										</li>
										<li className="mb-5">
											<p className="fs-3">
												開放時間&nbsp; &nbsp;
												<span>星期一～五 11:00 - 21:00 星期六.日 10:00 - 21:00</span>
											</p>
										</li>
									</ul>
								</div>
								<div className="col-12 col-md-6 p-5">
									<h2 className="fs-2 mb-5">景點地圖</h2>
									<Image src={map} alt="*"></Image>
								</div>
							</div>
						</div>
					</div>

					<div className="block">
						<div className="container-fluid card-group-food mt-5">
							<div className="w-100 d-flex justify-content-between py-2 px-3">
								<p className="fs-2 fw-bold">網紅這樣玩</p>
								<Button variant="outline-light">查看更多</Button>
							</div>
						</div>
						<CardKol />
					</div>
				</main>
			</main>
			<Footer />
		</div>
	);
}
