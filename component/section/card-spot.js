import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// 圖片
import spot_1 from "../../public/image/place/img-place-spot-1.png";
import spot_2 from "../../public/image/place/img-place-spot-2.png";
import spot_3 from "../../public/image/place/img-place-spot-3.png";
export default function Cardplace() {
	return (
		<div>
			<div className="container my-5">
				<div className="row cardplace">
					<div className="col-12 col-md-4 mb-3">
						<div className="position-relative rounded ">
							<div className="position-relative photo">
								<Image
									src={spot_1}
									alt="photo"
									layout="fill"
									objectFit="cover"
									className="placephoto"
									width={300}
									height={400}
								/>
							</div>

							<div className="name d-flex justify-content-between align-items-center ">
								<p className="fs-3">單車之旅</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4 mb-3">
						<div className="position-relative rounded ">
							<div className="position-relative photo">
								<Image
									src={spot_2}
									alt="photo"
									layout="fill"
									objectFit="cover"
									className="placephoto"
									width={300}
									height={400}
								/>
							</div>

							<div className="name d-flex justify-content-between align-items-center ">
								<p className="fs-3">戶外踏青</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4 mb-3">
						<div className="position-relative rounded ">
							<div className="position-relative photo">
								<Image
									src={spot_3}
									alt="photo"
									layout="fill"
									objectFit="cover"
									className="placephoto"
									width={300}
									height={400}
								/>
							</div>

							<div className="name d-flex justify-content-between align-items-center ">
								<p className="fs-3">商城街</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
