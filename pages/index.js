import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../share/Header";
import Footer from "../share/Footer";
import Swiper from "../component/Swiper";
// 圖片
import banner from "../public/image/index-background-1.png";
import food from "../public/image/food.png";
import accommodation from "../public/image/img-accommodation.png";
import attraction from "../public/image/img-attraction.png";
import traffic from "../public/image/img-traffic.png";
export default function Home() {
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

					<div className="weatherbar d-flex flex-column  align-items-center">
						<p className="text-center title mx-auto">
							台灣許多美景媲美國外，值此五倍券、國旅券及觀光業者加碼優惠盡出之際，旅行台灣就是現在！
							到哪裡旅遊還沒有想法的民眾，歡迎到台灣觀光，體驗「台灣之美」!
						</p>
						<Swiper />
					</div>

					<div className="container">
						<div className="row">
							<div className="col-3 px-2 ">
								<div className="shadow-box">
									<Image src={attraction} alt="photo" />
								</div>
							</div>
							<div className="col-3 px-2">
								<div className="shadow-box">
									<Image src={food} alt="photo" />
								</div>
							</div>
							<div className="col-3 px-2">
								<div className="shadow-box">
									<Image src={accommodation} alt="photo" />
								</div>
							</div>
							<div className="col-3 px-2">
								<div className="shadow-box">
									<Image src={traffic} alt="photo" />
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
