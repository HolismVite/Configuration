import { useState } from 'react'
import {
    DialogForm,
    get,
    Text,
} from '@Form'

const ManageEntityConfigs = ({
    entityGuid
}) => {

    const [data, setData] = useState([])

    const load = ({
        error,
        setProgress,
    }) => {
        setProgress(true)
        get(`/entityConfig/getConfigs?entityGuid=${entityGuid}`)
            .then(data => {
                setData(data)
                setProgress(false)
            }, e => {
                setProgress(false)
                error(e)
            })
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