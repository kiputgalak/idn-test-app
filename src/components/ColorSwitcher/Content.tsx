import { FC } from 'react'
import IconButton from 'components/IconButton'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import type { Mode } from 'context/ThemeProvider/types'

interface ColorSwitcherContentProps {
  readonly handleClose: () => void
  readonly value: Mode | null
  readonly handleSwitchMode: (
    e: React.MouseEvent<HTMLElement>,
    n: Mode | null
  ) => void
}

const ColorSwitcherContent: FC<ColorSwitcherContentProps> = ({
  handleClose,
  value,
  handleSwitchMode,
}) => {
  return (
    <>
      <Box display="flex" justifyContent="space-between" p={2}>
        <Typography>Pengaturan</Typography>
        <IconButton aria-label="Tutup" src="ic_close" onClick={handleClose} />
      </Box>
      <Divider />
      <Box p={2}>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Mode
        </Typography>
        <ToggleButtonGroup
          exclusive
          value={value}
          fullWidth
          size="small"
          aria-label="Mode"
          onChange={handleSwitchMode}
        >
          <ToggleButton value="light">Terang</ToggleButton>
          <ToggleButton value="dark">Gelap</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </>
  )
}

export default ColorSwitcherContent
