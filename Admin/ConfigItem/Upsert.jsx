import {
    DialogForm,
    Key,
    Enum,
} from '@Form'

const inputs = <>
    <Key
        column='Name'
    />
    <Enum
        column='ConfigTypeId'
        placeholder='Type'
        entityType='ConfigType'
        required='Please specify the type of this configuration item'
    />
</>

const UpsertConfigItem = () => {
    return <DialogForm
        entityType='ConfigItem'
        humanReadableEntityType='Configuration Item'
        inputs={inputs}
    />
}

export default UpsertConfigItem