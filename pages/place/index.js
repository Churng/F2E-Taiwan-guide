import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Button from "react-bootstrap/Button";

// 圖片

export default function place() {
	return (
		<div className="place">
			<Head>
				<title>台灣旅遊導覽-地區選項</title>
				<meta name="description" content="台灣旅遊導覽" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h2>地區</h2>
		</div>
	);
}
