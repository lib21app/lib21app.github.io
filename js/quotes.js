const quotes = [
	{
		"quote" : "Nothing is pleasanter than exploring a library",
		"source" : "- Walter Savage Landor (1775-1864. English writer and poet)",
		"contoh" : "Tidak ada yang lebih menyenangkan daripada menjelajahi perpustakaan"
	},
	{
		"quote" : "The only thing that you absolutely have to know, is the location of the library",
		"source" : "Albert Einstein (1879-1955. Theoretical physicist)",
		"contoh" : "Satu-satunya hal yang benar-benar harus kamu ketahui, adalah lokasi perpustakaan"
	},
	{
		"quote" : "When in doubt go to the library",
		"source" : "J.K. Rowling (b. 1965. British novelist, best known for writing the Harry Potter fantasy series)",
		"contoh" : "Jika ragu pergilah ke perpustakaan"
	},
	{
		"quote" : "I have found the most valuable thing in my wallet is my library card",
		"source" : "Laura Bush (b. 1946. Librarian and wife of George W. Bush, 43rd President of the United States)",
		"contoh" : "Saya telah menemukan hal yang paling berharga di dompet saya adalah kartu perpustakaan saya"
	},
	{
		"quote" : "Libraries were full of ideas – perhaps the most dangerous and powerful of all weapons",
		"source" : "Sarah J. Maas (b. 1986. American fantasy author) in her novel Throne of Glass",
		"contoh" : "Perpustakaan penuh dengan ide – mungkin senjata yang paling berbahaya dan kuat dari semua senjata"
	},
	{
		"quote" : "Everything you need for better future and success has already been written. And guess what? All you have to do is go to the library",
		"source" : "Henri Frederic Amiel (1821-1881. Swiss moral philosopher, poet, and critic)",
		"contoh" : "Semua yang Anda butuhkan untuk masa depan dan kesuksesan yang lebih baik telah ditulis. Dan coba tebak? Yang harus Anda lakukan adalah pergi ke perpustakaan"
	},
	{
		"quote" : "Whatever the cost of our libraries, the price is cheap compared to that of an ignorant nation",
		"source" : "Walter Cronkite (1916-2009. American broadcast journalist, in American Library Association Libraries Change Lives Campaign, 1995)",
		"contoh" : "Berapapun harga perpustakaan kita, harganya murah dibandingkan dengan bangsa yang bodoh"
	},
	{
		"quote" : "When you absolutely positively have to know, ask a librarian",
		"source" : "American Library Association",
		"contoh" : "Ketika Anda benar-benar harus tahu, tanyakan pada pustakawan"
	},
	{
		"quote" : "Google can bring you back 100,000 answers, a librarian can bring you back the right one",
		"source" : "Neil Gaiman (b. 1960. English author of short fiction, novels, comic books, graphic novels, audio theatre, and films)",
		"contoh" : "Google dapat memberimu 100.000 jawaban kepada Anda, pustakawan dapat memberimu jawaban yang tepat untuk Anda"
	},
	{
		"quote" : "In the nonstop tsunami of global information, librarians provide us with floaties and teach us to swim",
		"source" : "Linton Weeks (Washington Post Staff Writer) in Washington Post, January 13, 2001",
		"contoh" : "Dalam tsunami informasi global tanpa henti, pustakawan memberi kita floaties dan mengajari kita berenang"
	},
	{
		"quote" : "Librarians are tour-guides for all of knowledge",
		"source" : "Patrick Ness (b. 1971. British-American author, journalist, lecturer, and screenwriter)",
		"contoh" : "Pustakawan adalah pemandu wisata untuk semua pengetahuan"
	},
	{
		"quote" : "Librarians have always been among the most thoughtful and helpful people. They are teachers without a classroom. No libraries, no progress",
		"source" : "Willard Scott (b. 1934. American weather presenter, author, television personality, actor, clown, comedian and radio personality)",
		"contoh" : "Pustakawan selalu menjadi salah satu orang yang paling membantu. Mereka adalah guru tanpa ruang kelas. Tidak ada perpustakaan, tidak ada kemajuan"
	},
	{
		"quote" : "A Trained Librarian is a Powerful Search Engine With a Heart",
		"source" : "Sarah McIntyre (Sarah McIntyre is a British-American illustrator and writer of children's books and comics)",
		"contoh" : "Pustakawan Terlatih adalah Mesin Pencari yang Kuat dengan Hati"
	},
]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}.”`;
  source.innerText = random.source;
	contoh.innerText = random.contoh;
}

randomQuote();

document.querySelector("quotebutton").addEventListener('click', randomQuote)
