import { useState } from 'react'
import {
    DialogForm,
    Text,
} from '@Form';
import ConfigItemBrowser from '../ConfigItem/Browser';

const inputs = <>
    <ConfigItemBrowser />
    <Text
        column='Value'
    />
</>

const UpsertEntityTypeConfig = () => {

    const [configType, setConfigType] = useState()

    const getConfigType = ({ getFieldValue }) => {
        // setConfigType(getFieldValue())
    }

    return <DialogForm
        entityType='EntityTypeConfig'
        humanReadableEntityType='Entity Type Config'
        onFieldsChanged={getConfigType}
        inputs={inputs}
    />
}

export default UpsertEntityTypeConfig