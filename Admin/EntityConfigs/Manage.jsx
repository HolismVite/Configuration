import { useState } from 'react'
import {
    app,
    Check,
    Color,
    get,
    Numeric,
    PageForm,
    post,
    Select,
    Text,
} from '@Form'
import { useEnum } from 'Hooks'

const ManageEntityConfigs = () => {

    const {
        entityType,
        entityGuid
    } = app.parseQuery()

    const [data, setData] = useState([])

    const { enumItems, progress } = useEnum({ entityType: 'ConfigType' })

    const load = ({
        error,
        setCurrentEntity,
        setProgress,
    }) => {
        setProgress(true)
        get(`/entityConfig/getConfigs?entityType=${entityType}&entityGuid=${entityGuid}`)
            .then(data => {
                setData(data)

                var asEntity = {}
                data.map(i => {
                    asEntity[i.configItemId] = getValue(i)
                })
                console.log(asEntity)
                setCurrentEntity(asEntity)
                setProgress(false)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    const getValue = (entity) => {
        switch (entity.configTypeId) {
            case enums?.configType?.naturalNumber:
            case enums?.configType?.integer:
                return Number.partInt(entity.currentValue)
                case enums?.configType?.realNumber:
                return Number.parseFloat(entity.currentValue)
            case enums?.configType?.boolean:
            case enums?.configType?.nullableBoolean:
                return entity.currentValue === 'True'
            case enums?.configType?.color:
                return entity.currentValue
            case enums?.configType?.singleChoice:
            case enums?.configType?.multipleChoice:
                return Number.parseInt(entity.currentValue)
            case enums?.configType?.percent:
                return null
            default:
                return entity.currentValue
        }
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
                    placeholder={entity.configItemName}
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

    return <PageForm
        title='Entity Configs'
        onLoad={load}
        submitTo='/entityConfig/save'
        inputs={inputs}
    />
}

export default ManageEntityConfigs