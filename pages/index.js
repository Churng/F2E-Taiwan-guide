import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Header from "../share/Header";
import Footer from "../share/Footer";
import Slider from "react-slick";
// 圖片
import banner from "../public/image/index-background-1.png";

export default function Home() {
	var settings = {
		infinite: true,
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 8,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	};
	return (
		<div>
			<Head>
				<title>台灣旅遊導覽</title>
				<meta name="description" content="台灣旅遊導覽" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Header />
				<main>
					<div className="contain">
						<Image src={banner} objectPosition="center" alt="photo" className="d-block" />
					</div>

					<div className="weatherbar">
						<p className="text-center title mx-auto">
							台灣許多美景媲美國外，值此五倍券、國旅券及觀光業者加碼優惠盡出之際，旅行台灣就是現在！
							到哪裡旅遊還沒有想法的民眾，歡迎到台灣觀光，體驗「台灣之美」!
						</p>
						<Slider {...settings} className="py-5">
							<div>
								<p className="">台北市</p>
								<Image
									src="/icon/weather/icon-weather-cloudy-ele.svg"
									width="50px"
									height="50px"
									alt="image"
								/>
								<p className="fs-1">
									24<sup className="fs-6">°C</sup>
								</p>
							</div>

							<div>
								<p className="">台北市</p>
								<Image
									src="/icon/weather/icon-weather-cloudy-ele.svg"
									width="50px"
									height="50px"
									alt="image"
								/>
								<p className="fs-1">
									24<sup className="fs-6">°C</sup>
								</p>
							</div>
							<div>
								<p className="">台北市</p>
								<Image
									src="/icon/weather/icon-weather-cloudy-ele.svg"
									width="50px"
									height="50px"
									alt="image"
								/>
								<p className="fs-1">
									24<sup className="fs-6">°C</sup>
								</p>
							</div>
							<div>
								<p className="">台北市</p>
								<Image
									src="/icon/weather/icon-weather-cloudy-ele.svg"
									width="50px"
									height="50px"
									alt="image"
								/>
								<p className="fs-1">
									24<sup className="fs-6">°C</sup>
								</p>
							</div>
							<div>
								<p className="">台北市</p>
								<Image
									src="/icon/weather/icon-weather-cloudy-ele.svg"
									width="50px"
									height="50px"
									alt="image"
								/>
								<p className="fs-1">
									24<sup className="fs-6">°C</sup>
								</p>
							</div>
							<div>
								<p className="">台北市</p>
								<Image
									src="/icon/weather/icon-weather-cloudy-ele.svg"
									width="50px"
									height="50px"
									alt="image"
								/>
								<p className="fs-1">
									24<sup className="fs-6">°C</sup>
								</p>
							</div>
							<div>
								<p className="">台北市</p>
								<Image
									src="/icon/weather/icon-weather-cloudy-ele.svg"
									width="50px"
									height="50px"
									alt="image"
								/>
								<p className="fs-1">
									24<sup className="fs-6">°C</sup>
								</p>
							</div>
							<div>
								<p className="">台北市</p>
								<Image
									src="/icon/weather/icon-weather-cloudy-ele.svg"
									width="50px"
									height="50px"
									alt="image"
								/>
								<p className="fs-1">
									24<sup className="fs-6">°C</sup>
								</p>
							</div>
						</Slider>
					</div>

					<div className="album py-5 bg-light">
						<div className="container">
							<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
								<div className="col">
									<div className="card shadow-sm">
										<svg
											className="bd-placeholder-img card-img-top"
											width="100%"
											height="225"
											xmlns="http://www.w3.org/2000/svg"
											role="img"
											aria-label="Placeholder: Thumbnail"
											preserveAspectRatio="xMidYMid slice"
											focusable="false"
										>
											<title>Placeholder</title>
											<rect width="100%" height="100%" fill="#55595c" />
											<text x="50%" y="50%" fill="#eceeef" dy=".3em">
												Thumbnail
											</text>
										</svg>

										<div className="card-body">
											<p className="card-text">
												This is a wider card with supporting text below as a natural lead-in to
												additional content. This content is a little bit longer.
											</p>
											<div className="d-flex justify-content-between align-items-center">
												<div className="btn-group">
													<button type="button" className="btn btn-sm btn-outline-secondary">
														View
													</button>
													<button type="button" className="btn btn-sm btn-outline-secondary">
														Edit
													</button>
												</div>
												<small className="text-muted">9 mins</small>
											</div>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="card shadow-sm">
										<svg
											className="bd-placeholder-img card-img-top"
											width="100%"
											height="225"
											xmlns="http://www.w3.org/2000/svg"
											role="img"
											aria-label="Placeholder: Thumbnail"
											preserveAspectRatio="xMidYMid slice"
											focusable="false"
										>
											<title>Placeholder</title>
											<rect width="100%" height="100%" fill="#55595c" />
											<text x="50%" y="50%" fill="#eceeef" dy=".3em">
												Thumbnail
											</text>
										</svg>

										<div className="card-body">
											<p className="card-text">
												This is a wider card with supporting text below as a natural lead-in to
												additional content. This content is a little bit longer.
											</p>
											<div className="d-flex justify-content-between align-items-center">
												<div className="btn-group">
													<button type="button" className="btn btn-sm btn-outline-secondary">
														View
													</button>
													<button type="button" className="btn btn-sm btn-outline-secondary">
														Edit
													</button>
												</div>
												<small className="text-muted">9 mins</small>
											</div>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="card shadow-sm">
										<svg
											className="bd-placeholder-img card-img-top"
											width="100%"
											height="225"
											xmlns="http://www.w3.org/2000/svg"
											role="img"
											aria-label="Placeholder: Thumbnail"
											preserveAspectRatio="xMidYMid slice"
											focusable="false"
										>
											<title>Placeholder</title>
											<rect width="100%" height="100%" fill="#55595c" />
											<text x="50%" y="50%" fill="#eceeef" dy=".3em">
												Thumbnail
											</text>
										</svg>

										<div className="card-body">
											<p className="card-text">
												This is a wider card with supporting text below as a natural lead-in to
												additional content. This content is a little bit longer.
											</p>
											<div className="d-flex justify-content-between align-items-center">
												<div className="btn-group">
													<button type="button" className="btn btn-sm btn-outline-secondary">
														View
													</button>
													<button type="button" className="btn btn-sm btn-outline-secondary">
														Edit
													</button>
												</div>
												<small className="text-muted">9 mins</small>
											</div>
										</div>
									</div>
								</div>

								<div className="col">
									<div className="card shadow-sm">
										<svg
											className="bd-placeholder-img card-img-top"
											width="100%"
											height="225"
											xmlns="http://www.w3.org/2000/svg"
											role="img"
											aria-label="Placeholder: Thumbnail"
											preserveAspectRatio="xMidYMid slice"
											focusable="false"
										>
											<title>Placeholder</title>
											<rect width="100%" height="100%" fill="#55595c" />
											<text x="50%" y="50%" fill="#eceeef" dy=".3em">
												Thumbnail
											</text>
										</svg>

										<div className="card-body">
											<p className="card-text">
												This is a wider card with supporting text below as a natural lead-in to
												additional content. This content is a little bit longer.
											</p>
											<div className="d-flex justify-content-between align-items-center">
												<div className="btn-group">
													<button type="button" className="btn btn-sm btn-outline-secondary">
														View
													</button>
													<button type="button" className="btn btn-sm btn-outline-secondary">
														Edit
													</button>
												</div>
												<small className="text-muted">9 mins</small>
											</div>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="card shadow-sm">
										<svg
											className="bd-placeholder-img card-img-top"
											width="100%"
											height="225"
											xmlns="http://www.w3.org/2000/svg"
											role="img"
											aria-label="Placeholder: Thumbnail"
											preserveAspectRatio="xMidYMid slice"
											focusable="false"
										>
											<title>Placeholder</title>
											<rect width="100%" height="100%" fill="#55595c" />
											<text x="50%" y="50%" fill="#eceeef" dy=".3em">
												Thumbnail
											</text>
										</svg>

										<div className="card-body">
											<p className="card-text">
												This is a wider card with supporting text below as a natural lead-in to
												additional content. This content is a little bit longer.
											</p>
											<div className="d-flex justify-content-between align-items-center">
												<div className="btn-group">
													<button type="button" className="btn btn-sm btn-outline-secondary">
														View
													</button>
													<button type="button" className="btn btn-sm btn-outline-secondary">
														Edit
													</button>
												</div>
												<small className="text-muted">9 mins</small>
											</div>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="card shadow-sm">
										<svg
											className="bd-placeholder-img card-img-top"
											width="100%"
											height="225"
											xmlns="http://www.w3.org/2000/svg"
											role="img"
											aria-label="Placeholder: Thumbnail"
											preserveAspectRatio="xMidYMid slice"
											focusable="false"
										>
											<title>Placeholder</title>
											<rect width="100%" height="100%" fill="#55595c" />
											<text x="50%" y="50%" fill="#eceeef" dy=".3em">
												Thumbnail
											</text>
										</svg>

										<div className="card-body">
											<p className="card-text">
												This is a wider card with supporting text below as a natural lead-in to
												additional content. This content is a little bit longer.
											</p>
											<div className="d-flex justify-content-between align-items-center">
												<div className="btn-group">
													<button type="button" className="btn btn-sm btn-outline-secondary">
														View
													</button>
													<button type="button" className="btn btn-sm btn-outline-secondary">
														Edit
													</button>
												</div>
												<small className="text-muted">9 mins</small>
											</div>
										</div>
									</div>
								</div>

								<div className="col">
									<div className="card shadow-sm">
										<svg
											className="bd-placeholder-img card-img-top"
											width="100%"
											height="225"
											xmlns="http://www.w3.org/2000/svg"
											role="img"
											aria-label="Placeholder: Thumbnail"
											preserveAspectRatio="xMidYMid slice"
											focusable="false"
										>
											<title>Placeholder</title>
											<rect width="100%" height="100%" fill="#55595c" />
											<text x="50%" y="50%" fill="#eceeef" dy=".3em">
												Thumbnail
											</text>
										</svg>

										<div className="card-body">
											<p className="card-text">
												This is a wider card with supporting text below as a natural lead-in to
												additional content. This content is a little bit longer.
											</p>
											<div className="d-flex justify-content-between align-items-center">
												<div className="btn-group">
													<button type="button" className="btn btn-sm btn-outline-secondary">
														View
													</button>
													<button type="button" className="btn btn-sm btn-outline-secondary">
														Edit
													</button>
												</div>
												<small className="text-muted">9 mins</small>
											</div>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="card shadow-sm">
										<svg
											className="bd-placeholder-img card-img-top"
											width="100%"
											height="225"
											xmlns="http://www.w3.org/2000/svg"
											role="img"
											aria-label="Placeholder: Thumbnail"
											preserveAspectRatio="xMidYMid slice"
											focusable="false"
										>
											<title>Placeholder</title>
											<rect width="100%" height="100%" fill="#55595c" />
											<text x="50%" y="50%" fill="#eceeef" dy=".3em">
												Thumbnail
											</text>
										</svg>

										<div className="card-body">
											<p className="card-text">
												This is a wider card with supporting text below as a natural lead-in to
												additional content. This content is a little bit longer.
											</p>
											<div className="d-flex justify-content-between align-items-center">
												<div className="btn-group">
													<button type="button" className="btn btn-sm btn-outline-secondary">
														View
													</button>
													<button type="button" className="btn btn-sm btn-outline-secondary">
														Edit
													</button>
												</div>
												<small className="text-muted">9 mins</small>
											</div>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="card shadow-sm">
										<svg
											className="bd-placeholder-img card-img-top"
											width="100%"
											height="225"
											xmlns="http://www.w3.org/2000/svg"
											role="img"
											aria-label="Placeholder: Thumbnail"
											preserveAspectRatio="xMidYMid slice"
											focusable="false"
										>
											<title>Placeholder</title>
											<rect width="100%" height="100%" fill="#55595c" />
											<text x="50%" y="50%" fill="#eceeef" dy=".3em">
												Thumbnail
											</text>
										</svg>

										<div className="card-body">
											<p className="card-text">
												This is a wider card with supporting text below as a natural lead-in to
												additional content. This content is a little bit longer.
											</p>
											<div className="d-flex justify-content-between align-items-center">
												<div className="btn-group">
													<button type="button" className="btn btn-sm btn-outline-secondary">
														View
													</button>
													<button type="button" className="btn btn-sm btn-outline-secondary">
														Edit
													</button>
												</div>
												<small className="text-muted">9 mins</small>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</main>
			<Footer />
		</div>
	);
}
