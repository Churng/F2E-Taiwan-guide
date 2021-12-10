import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import love from "../../public/icon/icon/love.svg";
import eye from "../../public/icon/icon/eye.svg";
import lovetag from "../../public/icon/icon/lovetag.svg";
import location from "../../public/icon/icon/location.svg";
// 圖片
import kol_1 from "../../public/image/kol/img-kol-1.png";
import kol_2 from "../../public/image/kol/img-kol-2.png";
import kol_3 from "../../public/image/kol/img-kol-3.png";
import person from "../../public/image/img-login-photo.png";
import person_2 from "../../public/image/img-login-person-2.png";
export default function Cardplace() {
	return (
		<div className="card-kol">
			<div className="container my-5 py-5">
				<div className="row card-food-stay">
					<div className="col-12 col-md-4 mb-3">
						<div className="position-relative rounded ">
							<div className="book position-absolute top-0 end-0">
								<Image src={lovetag} alt="icon" />
							</div>
							<div className="position-relative photo w-100">
								<Image src={kol_1} alt="photo" layout="responsive" />
								<div className="position-absolute top-0 start-50 translate-middle">
									<Image src={person} alt="*"></Image>
								</div>
							</div>

							<div className="name pt-4">
								<div className="d-flex align-items-center">
									<p className="fs-3 fw-bold title ">台北101攻略</p>
									<div className="sub d-flex align-items-center">
										<Image src={location} alt="icon" />
									</div>
								</div>

								<br />
								<div className="d-flex flex-column">
									<p className="text-break subtitle">
										除了台北101台北到底還有那些夜景？
										讓KKday告訴你台北還有哪些易達又美麗的夜景景點吧!
									</p>
								</div>
								<div className="d-flex align-items-center justify-content-end mt-3">
									<Image src={eye} alt="icon" width={20} height={20} />
									<span className="mx-2">6萬</span>
									<Image src={love} alt="icon" width={20} height={20} />
									<span className="mx-2">45</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4 mb-3">
						<div className="position-relative rounded ">
							<div className="book position-absolute top-0 end-0">
								<Image src={lovetag} alt="icon" />
							</div>
							<div className="position-relative photo w-100">
								<Image src={kol_2} alt="photo" layout="responsive" />
								<div className="position-absolute top-0 start-50 translate-middle">
									<Image src={person_2} alt="*"></Image>
								</div>
							</div>

							<div className="name pt-4">
								<div className="d-flex align-items-center">
									<p className="fs-3 fw-bold title ">2021九份必逛</p>
									<div className="sub d-flex align-items-center">
										<Image src={location} alt="icon" />
									</div>
								</div>

								<br />
								<div className="d-flex flex-column">
									<p className="text-break subtitle">
										九份附近景點推薦有哪些？ 十分老街與十分瀑布、
										金瓜石博物館、報時山步道、無耳茶壺山、侯硐貓村等， 都是九份必去的景點唷！
									</p>
								</div>
								<div className="d-flex align-items-center justify-content-end mt-3">
									<Image src={eye} alt="icon" width={20} height={20} />
									<span className="mx-2">6萬</span>
									<Image src={love} alt="icon" width={20} height={20} />
									<span className="mx-2">45</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4 mb-3">
						<div className="position-relative rounded ">
							<div className="book position-absolute top-0 end-0">
								<Image src={lovetag} alt="icon" />
							</div>
							<div className="position-relative photo w-100">
								<Image src={kol_3} alt="photo" layout="responsive" />
								<div className="position-absolute top-0 start-50 translate-middle">
									<Image src={person} alt="*"></Image>
								</div>
							</div>

							<div className="name pt-4">
								<div className="d-flex align-items-center">
									<p className="fs-3 fw-bold title ">全台超靈驗財神廟 </p>
									<div className="sub d-flex align-items-center">
										<Image src={location} alt="icon" />
									</div>
								</div>

								<br />
								<div className="d-flex flex-column">
									<p className="text-break subtitle">
										台灣有不少特色廟宇，尤其以財神廟最為熱門， 有些財神廟可說是相當靈驗
									</p>
								</div>
								<div className="d-flex align-items-center justify-content-end mt-3">
									<Image src={eye} alt="icon" width={20} height={20} />
									<span className="mx-2">6萬</span>
									<Image src={love} alt="icon" width={20} height={20} />
									<span className="mx-2">45</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
