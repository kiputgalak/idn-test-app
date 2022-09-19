import type { FC } from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CaptionText from 'components/CaptionText'
import TitleText from 'components/TitleText'
import Container from 'components/Container'
import Button from 'components/Button'
import Paper from '@mui/material/Paper'
import type { User } from 'common-types'
import { numberFormatter } from 'utils/formatter'

interface UserInfo {
  readonly user: User
}

const UserInfo: FC<UserInfo> = ({ user }) => {
  const { name, followers, following, bio, image } = user
  return (
    <Paper
      elevation={0}
      square={true}
      sx={{
        pt: 1,
        pb: 2,
      }}
    >
      <Container display="flex">
        <Avatar alt={name} src={image} sx={{ width: 80, height: 80 }} />
        <Box ml={2} sx={{ lineHeight: 0 }}>
          <CaptionText>Verified Creator</CaptionText>
          <TitleText>{name}</TitleText>
          <Box mt="10px" display="flex">
            <Box>
              <CaptionText>Following</CaptionText>
              <TitleText>{numberFormatter(following)}</TitleText>
            </Box>
            <Box ml={5}>
              <CaptionText>Followers</CaptionText>
              <TitleText>{numberFormatter(followers)}</TitleText>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container mt={3}>
        <Typography>{bio}</Typography>
      </Container>
      <Container mt={2}>
        <Button variant="contained" fullWidth>
          Follow
        </Button>
      </Container>
    </Paper>
  )
}

export default UserInfo
