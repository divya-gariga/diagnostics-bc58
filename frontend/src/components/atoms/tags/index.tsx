import { Chip as CustomChip, ChipProps, Typography,styled } from '@mui/material'
import React from 'react'
import theme from '../../../theme'
type TagProps = {
  focused: boolean
  text: string
  onClick?: (value: string) => void
}
interface CustomChipProps extends ChipProps {
  fontColor: string
}
const Chip = styled(CustomChip)<CustomChipProps>(({ fontColor }) => ({
  color: fontColor,
}))
const Tags = ({ focused, text, onClick }: TagProps) => {
  const handleClick = () => {
    return onClick?.(text)
  }
  return (
    <Typography variant="caption2">
      <Chip
        fontColor={
          !focused
            ? theme.palette.gammaMedium.main
            : theme.palette.gammaWhite.main
        }
        label={<Typography variant='caption2' color={focused?"":"#757380"}>{text}</Typography>}
        color={focused ? 'secondary' : 'default'}
        onClick={handleClick}
      ></Chip>
    </Typography>
  )
}

export default Tags
