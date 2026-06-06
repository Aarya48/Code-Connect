
function Footer() {
	return (
		<footer className="w-full bg-[#0b1220] border-t border-purple-500/20 text-gray-300 py-8 px-6">
			<div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-8">
				<div>
					<h2
						className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
					>
						CodeConnect
					</h2>

					<p className="text-gray-400 mt-3 max-w-sm text-sm leading-relaxed">
						Connect with developers and discover amazing projects. Build, collaborate and grow together.
					</p>

					<p className="text-xs text-gray-500 mt-4">Made with ❤️ · {new Date().getFullYear()}</p>
				</div>

				<div className="flex gap-12">
					<div>
						<h3 className="text-white font-semibold mb-3 text-sm">Product</h3>
						<ul className="text-gray-400 space-y-2 text-sm">
							<li>
								<a href="/" className="hover:text-cyan-400 transition">
									Features
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-cyan-400 transition">
									Pricing
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-cyan-400 transition">
									Docs
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-white font-semibold mb-3 text-sm">Company</h3>
						<ul className="text-gray-400 space-y-2 text-sm">
							<li>
								<a href="/about" className="hover:text-cyan-400 transition">
									About
								</a>
							</li>
							<li>
								<a href="/careers" className="hover:text-cyan-400 transition">
									Careers
								</a>
							</li>
							<li>
								<a href="/contact" className="hover:text-cyan-400 transition">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
