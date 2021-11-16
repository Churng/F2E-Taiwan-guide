import Image from "next/image";
import Logo from "../public/Logo.png";
export default function footer({ children }) {
	return (
		<>
			<div className="container-fluid footer">
				<footer className="row row-cols-5  px-5 py-5 mt-5 me-1">
					<div className="col">
						<h5 className="text-start mb-3 fs-5 fw-bold">活動新訊</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									最新消息
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									活動異動
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									熱門話題
								</a>
							</li>
						</ul>
					</div>
					<div className="col">
						<h5 className="text-start mb-3 fs-5 fw-bold">景點</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									熱門景點
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									網紅攻略
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									主題景點
								</a>
							</li>
						</ul>
					</div>
					<div className="col ">
						<h5 className="text-start mb-3 fs-5 fw-bold">美食</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									台灣文化
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									台灣小吃
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									台灣在地特色
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									熱門美食
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									網紅必推美食
								</a>
							</li>
						</ul>
					</div>
					<div className="col">
						<h5 className="text-start mb-3 fs-5 fw-bold">住宿</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									觀光旅館
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									旅館
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									民宿
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									住宿推薦
								</a>
							</li>
						</ul>
					</div>
					<div className="col">
						<h5 className="text-start mb-3 fs-5 fw-bold">交通</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									陸運資訊
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									高速公路
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									交通租賃
								</a>
							</li>
						</ul>
					</div>
				</footer>
			</div>
			<div className="d-flex flex-wrap align-items-center  copyright py-3 px-2">
				<div className=" d-flex align-items-center">
					<Image src={Logo} alt="photo" width="52px" height="40px" />
				</div>

				<p className="fs-6 lh-base ms-3">
					24小時免付費旅遊諮詢熱線：0800-011765
					<br />
					免付費國旅券專線：0800-211734（服務時間：週一至週日8:30~18:30）
				</p>
			</div>
		</>
	);
}
