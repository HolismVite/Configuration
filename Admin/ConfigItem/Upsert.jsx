import {
    DialogForm,
    Enum,
    Key,
    LongText,
    Text,
} from '@Form'

const inputs = <>
    <Key />
    <Text
        column='Name'
        required='Please provide the name'
    />
    <Enum
        column='ConfigTypeId'
        placeholder='Type'
        entityType='ConfigType'
        required='Please specify the type of this configuration item'
    />
    <LongText
        column='Description'
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