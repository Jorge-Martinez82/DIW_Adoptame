const URL_BACKEND = 'https://adoptamegrupo8.alphapro.es'

window.addEventListener('load', () => {
	const menuBtn = document.getElementById('menu-btn')
	const menu = document.getElementById('menu')
	const formularioRegistro = document.getElementById('formularioRegistro')
	const formularioLogin = document.getElementById('formularioLogin')
	const linkIniciarSesionMovil = document.getElementById(
		'link-iniciar-sesion-movil'
	)
	const linkIniciarSesionPC = document.getElementById('link-iniciar-sesion-pc')

	const usuario = JSON.parse(localStorage.getItem('usuario'))

	menuBtn.addEventListener('click', () => {
		menu.classList.toggle('hidden')
	})

	formularioRegistro?.addEventListener('submit', async (event) => {
		event.preventDefault()
	})

	formularioLogin?.addEventListener('submit', async (event) => {
		event.preventDefault()

		const formData = new FormData(formularioLogin)
		const email = formData.get('email')
		const password = formData.get('password')

		const response = await fetch(
			`${URL_BACKEND}/usuarios?email=${email}&password=${password}`
		)
		const data = await response.json()

		if (data.length === 0 || data.error || data.length > 1) {
			alert('Usuario o contraseña incorrectos')
			return
		}

		localStorage.setItem('usuario', JSON.stringify(data[0]))

		window.history.back()
	})

	if (usuario && linkIniciarSesionPC && linkIniciarSesionMovil) {
		let url = './'
		if (
			window.location.pathname === '/index.html' ||
			window.location.pathname === '/'
		) {
			url = './src/'
		}

		linkIniciarSesionMovil.outerHTML = `
		<a class="underline-offset-1 hover:underline" href="${url}perfil.html">Perfil</a>
	`
		linkIniciarSesionPC.outerHTML = `
		<div class="hidden md:block">
			<a href="${url}perfil.html"
				class="p-3 relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-customBlack rounded-full text-white hover:bg-opacity-80"
				aria-label="Perfil de ${usuario.nombre} ${usuario.apellidos}">
					<span class="font-medium dark:text-gray-300">
							${usuario.nombre.charAt(0).toUpperCase()}${usuario.apellidos.charAt(0).toUpperCase()}
					</span>
			</a>
		</div>
	`
	}
})
