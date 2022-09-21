import { FC, useState, useCallback } from 'react'
import TopMenu from 'components/TopMenu'
import UserInfo from './UserInfo'
import Divider from '@mui/material/Divider'
import Navigation from './Navigation'
import type { NavigationProps } from './Navigation'
import type { User } from 'common-types'
import dynamic from 'next/dynamic'
import Search from './Search'

const Berita = dynamic(() => import('./Berita'))
const Livestream = dynamic(() => import('./Livestream'))
const Quiz = dynamic(() => import('./Quiz'))

interface ProfilePageProps {
  readonly data: User
}

const ProfilePage: FC<ProfilePageProps> = ({ data }) => {
  const [tab, setTab] = useState<NavigationProps['active']>('berita')
  const handleNavigation = useCallback(
    (state: NavigationProps['active']) => setTab(state),
    []
  )

  return (
    <>
      <TopMenu />
      <UserInfo user={data} />
      <Divider />
      <Navigation setActive={handleNavigation} active={tab} />
      <Search tab={tab} />
      {tab === 'berita' && <Berita />}
      {tab === 'livestream' && <Livestream />}
      {tab === 'quiz' && <Quiz />}
    </>
  )
}

export default ProfilePage
