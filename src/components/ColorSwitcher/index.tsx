import { FC, useState, useEffect } from 'react'
import IconButton from 'components/IconButton'
import Drawer from '@mui/material/Drawer'
import { useThemeProviderContext } from 'context/ThemeProvider'
import dynamic from 'next/dynamic'

const Content = dynamic(() => import('./Content'))

// Button to open setting menu drawer
const ColorSwitcherComponent: FC = () => {
  // Palette mode context
  const { mode, setColorMode } = useThemeProviderContext()

  // Drawer state
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // Button group value filled with palette mode from context
  const [value, setValue] = useState<typeof mode | null>(null)

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev)
  }

  // Set context palette mode with selected mode
  const handleSwitchMode = (
    _event: React.MouseEvent<HTMLElement>,
    newValue: Exclude<typeof mode, undefined> | null
  ) => {
    if (newValue !== null) {
      setColorMode(newValue)
      setValue(newValue)
    }
  }

  useEffect(() => {
    setValue(mode)
  }, [mode])

  return (
    <>
      <IconButton
        aria-label="Pengaturan"
        src="ic_setting"
        onClick={toggleDrawer}
      />
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        PaperProps={{ sx: { minWidth: '60%' } }}
      >
        <Content
          handleClose={toggleDrawer}
          value={value}
          handleSwitchMode={handleSwitchMode}
        />
      </Drawer>
    </>
  )
}

export default ColorSwitcherComponent
