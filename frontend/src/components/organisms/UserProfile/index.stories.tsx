import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UserProfile from '.'
import { Dialog } from '@mui/material'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Organisms/UserProfile',
  component: UserProfile,
} as ComponentMeta<typeof UserProfile>

const Template: ComponentStory<typeof UserProfile> = (args) => (
  <Dialog
    scroll="body"
    PaperProps={{ sx: { position: 'fixed', top: 10, right: 10, m: 0 } }}
    maxWidth={false}
    open={true}
  >
    <UserProfile {...args} />
  </Dialog>
)

export const UserProfileOrganism = Template.bind({})
UserProfileOrganism.args = {
  handleClose: action("Close Icon Clicked"),
  handleLogOut: action("Clicked On LogOut"),
}
