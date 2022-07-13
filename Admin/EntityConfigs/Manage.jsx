import { useState } from 'react'
import { DialogForm, Text } from '@Form'

const ManageEntityConfigs = ({
    entityGuid
}) => {

    const load = ({ setProgress }) => {
        setProgress(true)
        setTimeout(() => {
            setProgress(false)
        }, 2000)
    }

    const inputs = <>
        <Text
            column='Text'
            placeholder='Text'
        />
    </>

    return <DialogForm
        title='Entity Configs'
        onLoad={load}
        inputs={inputs}
    />
}

export default ManageEntityConfigs