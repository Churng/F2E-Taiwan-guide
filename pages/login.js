import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Button from "react-bootstrap/Button";

// 圖片
import ImgL from "../public/image/img-rechange-L.png";
import person from "../public/image/img-login-photo.png";
import socail_g from "../public/icon/socail-icon/icon-google.svg";
import socail_f from "../public/icon/socail-icon/icon-facebook.svg";

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
						<div className="" style={{ position: "relative", width: "40vw", height: "100vh" }}>
							<Image
								src={ImgL}
								alt="photo"
								layout="fill"
								objectFit="contain"
								width="100%"
								height="100%^"
							/>
						</div>
					</div>
					<div className="col-12 col-md-7">
						<form className="d-flex flex-column align-items-center mx-auto info pt-5">
							<h2 className="title my-4">登入</h2>
							<div className=" mb-5 ">
								<Image src={person} alt="photo" className="roundedCircle"></Image>
							</div>
							<div className="input-group mb-5">
								<span className="input-group-text" id="basic-addon1">
									@
								</span>
								<input
									type="text"
									className="form-control"
									placeholder="Username"
									aria-label="Username"
									aria-describedby="basic-addon1"
								/>
							</div>
							<div className="input-group mb-5">
								<span className="input-group-text" id="basic-addon1">
									@
								</span>
								<input
									type="text"
									className="form-control"
									placeholder="Username"
									aria-label="Username"
									aria-describedby="basic-addon1"
								/>
							</div>
							<Button variant="outline-secondary">登入</Button>
						</form>
						<div className="register d-flex flex-column  mx-auto mt-5">
							<p className="fs-3">註冊</p>
							<div className="block p-3 d-flex justify-content-evenly mt-2">
								<div className="d-flex social p-2">
									<div className="">
										<Image src={socail_g} alt="socail" width={30} height={30}></Image>
									</div>
									<p className="fs-3 ms-2">google</p>
								</div>

								<div className="d-flex social p-2">
									<div className="">
										<Image src={socail_f} alt="socail" width={30} height={30}></Image>
									</div>
									<p className="fs-3 ms-2">facebook</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
