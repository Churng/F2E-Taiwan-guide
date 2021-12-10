import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import love from "../../public/icon/icon/love.svg";
import eye from "../../public/icon/icon/eye.svg";
import lovetag from "../../public/icon/icon/lovetag.svg";
import location from "../../public/icon/icon/location.svg";
// 圖片
import food_1 from "../../public/image/img-card-food-1.png";
import food_2 from "../../public/image/img-card-food-2.png";
import food_3 from "../../public/image/img-card-food-3.png";

export default function Cardplace() {
	return (
		<div>
			<div className="container my-5">
				<div className="row card-food-stay">
					<div className="col-12 col-md-4 mb-3">
						<div className="position-relative rounded ">
							<div className="looknum d-flex align-items-center position-absolute top-0 start-0 ">
								<Image src={love} alt="icon" />
								<span className="mx-2">45</span>
								<Image src={eye} alt="icon" />
								<span className="ms-2">6萬</span>
							</div>

							<div className="book position-absolute top-0 end-0">
								<Image src={lovetag} alt="icon" />
							</div>
							<div className="position-relative photo w-100">
								<Image
									src={food_1}
									alt="photo"
									layout="responsive"
									// objectFit="cover"
									// width={416}
									// height={400}
								/>
							</div>

							<div className="name">
								<div className="d-flex align-items-center">
									<p className="fs-1 title ">台北101</p>
									<div className="sub d-flex align-items-center">
										<Image src={location} alt="icon" />
										<span className="fs-6 location">台北市</span>
									</div>
								</div>

								<br />
								<div className="d-flex  flex-column">
									<p className="mb-2">花蓮縣壽豐鄉鹽寮村6鄰福德49-2號 </p>
									<p className="mb-2">服務項目：餐廳,咖啡廳,無線網路,國民旅遊卡,停車場</p>
									<p className="mb-2">電話：0928-079213</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4 mb-3">
						<div className="position-relative rounded ">
							<div className="looknum d-flex align-items-center position-absolute top-0 start-0 ">
								<Image src={love} alt="icon" />
								<span className="mx-2">45</span>
								<Image src={eye} alt="icon" />
								<span className="ms-2">6萬</span>
							</div>

							<div className="book position-absolute top-0 end-0">
								<Image src={lovetag} alt="icon" />
							</div>
							<div className="position-relative photo w-100">
								<Image
									src={food_1}
									alt="photo"
									layout="responsive"
									// objectFit="cover"
									// width={416}
									// height={400}
								/>
							</div>

							<div className="name">
								<div className="d-flex justify-content-between align-items-center">
									<p className="fs-1">台北101</p>
									<div className="sub d-flex align-items-center">
										<Image src={location} alt="icon" />
										<span className="fs-6">台北市</span>
									</div>
								</div>

								<br />
								<div className="d-flex  flex-column">
									<p className="mb-2">花蓮縣壽豐鄉鹽寮村6鄰福德49-2號 </p>
									<p className="mb-2">服務項目：餐廳,咖啡廳,無線網路,國民旅遊卡,停車場</p>
									<p className="mb-2">電話：0928-079213</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4 mb-3">
						<div className="position-relative rounded ">
							<div className="looknum d-flex align-items-center position-absolute top-0 start-0 ">
								<Image src={love} alt="icon" />
								<span className="mx-2">45</span>
								<Image src={eye} alt="icon" />
								<span className="ms-2">6萬</span>
							</div>

							<div className="book position-absolute top-0 end-0">
								<Image src={lovetag} alt="icon" />
							</div>
							<div className="position-relative photo w-100">
								<Image
									src={food_1}
									alt="photo"
									layout="responsive"
									// objectFit="cover"
									// width={416}
									// height={400}
								/>
							</div>

							<div className="name">
								<div className="d-flex justify-content-between align-items-center">
									<p className="fs-1">台北101</p>
									<div className="sub d-flex align-items-center">
										<Image src={location} alt="icon" />
										<span className="fs-6">台北市</span>
									</div>
								</div>

								<br />
								<div className="d-flex  flex-column">
									<p className="mb-2">花蓮縣壽豐鄉鹽寮村6鄰福德49-2號 </p>
									<p className="mb-2">服務項目：餐廳,咖啡廳,無線網路,國民旅遊卡,停車場</p>
									<p className="mb-2">電話：0928-079213</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
