import { useRouter } from './router'
import App from './App'
import EmlakInsaatiPage from './pages/EmlakInsaatiPage'
import PortfoyPage from './pages/PortfoyPage'
import IletisimPage from './pages/IletisimPage'

export default function Root() {
  const { path } = useRouter()

  if (path === '/emlak-insaati') return <EmlakInsaatiPage />
  if (path === '/portfoy')       return <PortfoyPage />
  if (path === '/iletisim')      return <IletisimPage />
  return <App />
}
