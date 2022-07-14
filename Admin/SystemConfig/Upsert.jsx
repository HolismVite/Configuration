import { useState } from 'react'
import {
    DialogForm,
    Text,
} from '@Form';
import ConfigItem from '../ConfigItem/Field';

const inputs = <>
    <ConfigItem />
    <Text
        column='Value'
    />
</>

const UpsertSystemConfig = () => {

    const [configType, setConfigType] = useState()

    const getConfigType = ({ getFieldValue }) => {
        // setConfigType(getFieldValue())
    }

    return <DialogForm
        entityType='SystemConfig'
        humanReadableEntityType='System Config'
        onFieldsChanged={getConfigType}
        inputs={inputs}
    />
}

export default UpsertSystemConfig