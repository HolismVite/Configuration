import { useState, useEffect } from 'react'
import { DialogForm, Text } from '@Form'

const ManageEntityConfigs = ({
    entityGuid
}) => {

    const [progress, setProgress] = useState(true)

    const inputs = <>
        <Text
            column='Text'
            placeholder='Text'
        />
    </>

    return <DialogForm
        title='Entity Configs'
        progress={progress}
        inputs={inputs}
    />
}

export default ManageEntityConfigs