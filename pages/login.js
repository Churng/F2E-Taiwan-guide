import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Button from "react-bootstrap/Button";

// 圖片
import ImgL from "../public/image/img-rechange-L.png";
import Logo from "../public/Logo-2.png";
import person from "../public/image/img-login-photo.png";
import socail_g from "../public/icon/socail-icon/icon-google.svg";
import socail_f from "../public/icon/socail-icon/icon-facebook.svg";
import person_1 from "../public/icon/icon/person-1.svg";
import lock from "../public/icon/icon/lock.svg";
export default function login() {
	return (
		<div className="login">
			<Head>
				<title>台灣旅遊導覽-登入</title>
				<meta name="description" content="台灣旅遊導覽" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="container-fluid p-0">
				<div className="row g-0">
					<div className="col-12 col-md-5">
						<div className="bg-image" style={{ position: "relative", height: "100vh" }}>
							<Image
								src={ImgL}
								alt="photo"
								layout="fill"
								objectFit="cover"
								objectPosition="25% 30%"
								width="100%"
								height="100%^"
							/>
							<div
								className="position-absolute top-50 start-50 translate-middle"
								style={{ width: "80%", height: "30%" }}
							>
								<div className="position-relative w-100 h-100">
									<Image
										src={Logo}
										alt="photo"
										layout="fill"
										objectFit="contain"
										// objectPosition="25% 30%"
										width="100%"
										height="100%^"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-7">
						<form className="">
							<div className="info d-flex flex-column align-items-center mx-auto  py-5">
								<h2 className="title my-4">登入</h2>
								<div className=" mb-5 ">
									<Image
										src={person}
										alt="photo"
										placeholder="blur"
										className="roundedCircle"
									></Image>
								</div>
								<div className="input-group mb-5">
									<span className="input-group-text" id="basic-addon1">
										<Image src={person_1} alt="icon"></Image>
									</span>
									<input
										type="text"
										className="form-control"
										placeholder="user@mail.com"
										aria-label="user@mail.com"
										aria-describedby="basic-addon1"
									/>
								</div>
								<div className="input-group mb-5">
									<span className="input-group-text" id="basic-addon1">
										<Image src={lock} alt="icon"></Image>
									</span>
									<input
										type="text"
										className="form-control"
										placeholder="請輸入密碼"
										aria-label="請輸入密碼"
										aria-describedby="basic-addon1"
									/>
								</div>
								<Button variant="outline-secondary">登入</Button>
							</div>

							<div className="register d-flex flex-column  mx-auto mt-5">
								<p className="fs-4 fw-bold">註冊</p>
								<div className="block p-3 d-flex justify-content-evenly mt-2">
									<div className="d-flex social p-2">
										<Link href="#">
											<a>
												<Image src={socail_g} alt="socail" className="icon"></Image>
											</a>
										</Link>
										<p className="ms-2 socail-font">google</p>
									</div>

									<div className="d-flex social p-2">
										<Link href="#" className="d-none">
											<a>
												<Image src={socail_f} alt="socail" className="icon"></Image>
											</a>
										</Link>
										<p className="ms-2 socail-font">facebook</p>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
