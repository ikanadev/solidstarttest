import { ParentProps } from "solid-js";

export default function BlogLayout(props: ParentProps) {
	return (
		<div>
			<h2>This is blog layout</h2>
			<audio autoplay controls>
				{/*
				<source src="https://usa7.fastcast4u.com/proxy/grflores?mp=/1" type="audio/mpeg" />
				*/}
				<source src="http://stream.zeno.fm/pnwpbyfambruv" type="audio/mpeg" />
				Tu navegador no es compatible con esta caracteristica - Señal 1.</audio>
			<div>
				{props.children}
			</div>
		</div>
	);
}
