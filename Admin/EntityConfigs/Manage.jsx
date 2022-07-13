import { useState } from 'react'
import {
    Check,
    Color,
    DialogForm,
    get,
    Numeric,
    Select,
    Text,
} from '@Form'
import { useEnum } from 'Hooks'

const ManageEntityConfigs = ({
    entityType,
    entityGuid
}) => {

    const [data, setData] = useState([])

    const { enumItems, progress } = useEnum({ entityType: 'ConfigType' })

    const load = ({
        error,
        setProgress,
    }) => {
        setProgress(true)
        get(`/entityConfig/getConfigs?entityType=${entityType}&entityGuid=${entityGuid}`)
            .then(data => {
                setData(data)
                setProgress(false)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    const getField = (entity) => {

        switch (entity.configTypeId) {
            case enums?.configType?.text:
                return <Text
                    column={entity.configItemId}
                />
            case enums?.configType?.naturalNumber:
            case enums?.configType?.integer:
            case enums?.configType?.realNumber:
                return <Numeric
                    column={entity.configItemId}
                />
            case enums?.configType?.boolean:
            case enums?.configType?.nullableBoolean:
                return <Check
                    column={entity.configItemId}
                />
            case enums?.configType?.color:
                return <Color
                    column={entity.configItemId}
                />
            case enums?.configType?.singleChoice:
            case enums?.configType?.multipleChoice:
                return <Select
                    column={entity.configItemId}
                />
            case enums?.configType?.percent:
                return null
            default:
                return null
        }
    }

    const inputs = <>
        {
            data.map(i => getField(i))
        }
    </>

    return <DialogForm
        title='Entity Configs'
        onLoad={load}
        inputs={inputs}
    />
}

export default ManageEntityConfigs