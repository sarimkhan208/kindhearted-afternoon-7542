

import { Avatar , AvatarGroup } from "@chakra-ui/react"

export default function Avatar(){
    return <AvatarGroup spacing='1rem'>
                <Avatar bg='red.500' icon={<AiOutlineUser fontSize='1.5rem' />} />
                <Avatar bg='teal.500' />
            </AvatarGroup>
}