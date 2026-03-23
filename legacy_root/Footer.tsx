import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Brand & Description */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 font-bold text-white text-sm">
                NV
              </div>
              <span className="text-xl font-bold text-white">
                Nuske<span className="text-amber-500">Vet</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Centro veterinario de alta tecnología. Profesionales comprometidos con la salud, 
              el bienestar y el amor por los animales, utilizando equipamiento de vanguardia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">Navegación</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm hover:text-amber-500 transition-colors">Inicio</Link></li>
              <li><Link href="/servicios" className="text-sm hover:text-amber-500 transition-colors">Servicios</Link></li>
              <li><Link href="/tecnologia" className="text-sm hover:text-amber-500 transition-colors">Tecnología</Link></li>
              <li><Link href="/contacto" className="text-sm hover:text-amber-500 transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start">
                <span className="mr-3 text-teal-500">📍</span>
                <span>Av. de las Mascotas 123, Ciudad Autónoma<br/>Edificio High-Tech, PB</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-teal-500">📞</span>
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-teal-500">✉️</span>
                <span>contacto@nuskevet.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Nuske Vet Center. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}