import Link from 'next/link'

export default function FirstPost() {
	return (
		<>
			<h1>I'm Princess</h1>
			<h2>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</h2>
		</>
	)
}
