import { Show, For } from "solid-js";
import { createAsync, cache } from "@solidjs/router";

type User = {
	id: number;
	name: string;
	username: string;
	email: string;
};

const getUsers = cache(async () => {
	const resp = await fetch("https://jsonplaceholder.typicode.com/users");
	return (await resp.json()) as User[];
}, "users");

export const route = {
	load: () => getUsers(),
};

export default function One() {
	const users = createAsync(() => getUsers());
	return (
		<div>
			<h1>Blog one</h1>
			<p>First blog</p>

			<Show when={users()}>{(data) => (
				<>
				<p>Total users: {data().length}</p>
				<For each={data()}>{(u) => (
					<p>{u.name} {u.username}</p>
				)}</For>
				</>
			)}</Show>
		</div>
	);
}
