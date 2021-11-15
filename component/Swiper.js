import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function App() {
	return (
		<>
			<div className="position-relative">
				<Swiper
					slidesPerView={8}
					spaceBetween={30}
					slidesPerGroup={4}
					loop={true}
					loopFillGroupWithBlank={true}
					navigation={true}
					className="mySwiper ms-4 my-5"
				>
					<SwiperSlide>
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
					</SwiperSlide>
					<SwiperSlide>
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
					</SwiperSlide>
					<SwiperSlide>
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
					</SwiperSlide>
					<SwiperSlide>
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
					</SwiperSlide>
					<SwiperSlide>
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
					</SwiperSlide>
					<SwiperSlide>
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
					</SwiperSlide>
					<SwiperSlide>
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
					</SwiperSlide>
					<SwiperSlide>
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
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}
