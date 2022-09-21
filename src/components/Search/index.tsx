import React, { FC } from 'react'
import { StyledInputBase } from './styled'
import Paper from '@mui/material/Paper'
import Box, { BoxProps } from '@mui/material/Box'

interface SearchProps extends BoxProps {
  readonly changeAction?: (e: React.ChangeEvent<HTMLInputElement>) => void
  readonly value?: string
  readonly placeholder?: string
}

const Search: FC<SearchProps> = ({
  changeAction,
  value,
  placeholder,
  ...props
}) => {
  return (
    <Box {...props}>
      <Paper elevation={0}>
        <StyledInputBase
          value={value}
          placeholder={placeholder}
          onChange={changeAction}
        />
      </Paper>
    </Box>
  )
}

export default Search
