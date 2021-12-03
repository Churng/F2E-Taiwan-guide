import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import love from "../../public/icon/icon/love.svg";
import eye from "../../public/icon/icon/eye.svg";
import lovetag from "../../public/icon/icon/lovetag.svg";
import location from "../../public/icon/icon/location.svg";
// 圖片
import stay_1 from "../../public/image/img-card-food-3.png";

export default function Cardplace() {
	return (
		<div>
			<div className="container my-5">
				<div className="row cardplace">
					<div className="col-4 ">
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
							<div className="position-relative photo">
								<Image
									src={stay_1}
									alt="photo"
									layout="fill"
									objectFit="cover"
									width={300}
									height={400}
								/>
							</div>

							<div className="name d-flex justify-content-between align-items-center ">
								<p className="fs-1">台北101</p>
								<div className="sub d-flex align-items-center">
									<Image src={location} alt="icon" />
									<span className="fs-6">台北市</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-4 ">
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
							<div className="position-relative photo">
								<Image
									src={stay_1}
									alt="photo"
									layout="fill"
									objectFit="cover"
									width={416}
									height={300}
								/>
							</div>

							<div className="name d-flex justify-content-between align-items-center ">
								<p className="fs-1">台北101</p>
								<div className="sub d-flex align-items-center">
									<Image src={location} alt="icon" />
									<span className="fs-6">台北市</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-4 ">
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
							<div className="position-relative photo">
								<Image
									src={stay_1}
									alt="photo"
									layout="fill"
									objectFit="cover"
									width={300}
									height={400}
								/>
							</div>

							<div className="name d-flex justify-content-between align-items-center ">
								<p className="fs-1">台北101</p>
								<div className="sub d-flex align-items-center">
									<Image src={location} alt="icon" />
									<span className="fs-6">台北市</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
